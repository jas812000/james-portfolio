import './App.css'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'

function App() {
  return (
    <>
      <header className="site-header">
        <nav className="navbar">
          <a href="/" className="brand">James Stevens</a>
          <div className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="/resume">Resume</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </nav>
      </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      <footer className="site-footer">
        <div className="footer-content">
          <p>© 2026 James Stevens. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default App
