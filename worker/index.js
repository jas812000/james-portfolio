import { EmailMessage } from "cloudflare:email"
import { createMimeMessage } from "mimetext"

const CONTACT_EMAIL = "jas812000@gmail.com"
const FROM_EMAIL = "contact@james-stevens.dev"

export default {
    async fetch(request, env) {
        const url = new URL(request.url)

        if (url.pathname !== "/api/contact") {
            return Response.json(
                { message: "Not found." },
                { status: 404 }
            )
        }

        if (request.method !== "POST") {
            return Response.json(
                { message: "Method not allowed." },
                {
                    status: 405,
                    headers: {
                        Allow: "POST",
                    },
                }
            )
        }

        const contentType = request.headers.get("content-type") || ""

        if (!contentType.includes("application/json")) {
            return Response.json(
                { message: "Content-Type must be application/json." },
                { status: 415 }
            )
        }

        let data

        try {
            data = await request.json()
        } catch {
            return Response.json(
                { message: "Invalid request." },
                { status: 400 }
            )
        }

        const {
            name = "",
            company = "",
            email = "",
            subject = "",
            message = "",
            website = "",
        } = data

        // Honeypot field. Real visitors never fill this in.
        if (website) {
            return Response.json({ message: "Message sent." })
        }

        const cleanName = name.trim()
        const cleanCompany = company.trim()
        const cleanEmail = email.trim()
        const cleanSubject = subject.trim()
        const cleanMessage = message.trim()

        if (
            !cleanName ||
            !cleanEmail ||
            !cleanSubject ||
            !cleanMessage
        ) {
            return Response.json(
                { message: "Please complete all required fields." },
                { status: 400 }
            )
        }

        if (
            cleanName.length > 100 ||
            cleanCompany.length > 150 ||
            cleanEmail.length > 254 ||
            cleanSubject.length > 150 ||
            cleanMessage.length > 5000
        ) {
            return Response.json(
                { message: "One or more fields exceed the allowed length." },
                { status: 400 }
            )
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (!emailPattern.test(cleanEmail)) {
            return Response.json(
                { message: "Please enter a valid email address." },
                { status: 400 }
            )
        }

        const mimeMessage = createMimeMessage()

        mimeMessage.setSender({
            name: "James Stevens Portfolio",
            addr: FROM_EMAIL,
        })

        mimeMessage.setRecipient(CONTACT_EMAIL)
        mimeMessage.setSubject(`Portfolio Contact: ${cleanSubject}`)

        mimeMessage.addMessage({
            contentType: "text/plain",
            data: [
                `Name: ${cleanName}`,
                `Company: ${cleanCompany || "Not provided"}`,
                `Email: ${cleanEmail}`,
                "",
                "Message:",
                cleanMessage,
            ].join("\n"),
        })

        try {
            await env.EMAIL.send(
                new EmailMessage(
                    FROM_EMAIL,
                    CONTACT_EMAIL,
                    mimeMessage.asRaw()
                )
            )

            return Response.json({ message: "Message sent." })
        } catch (error) {
            console.error("Contact email failed:", error)

            return Response.json(
                { message: "Unable to send your message right now." },
                { status: 500 }
            )
        }
    },
}
