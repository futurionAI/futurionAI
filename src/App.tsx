import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import './App.css';
import Contact from './Contact';

// Main App Component
const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <About />
              <CTA />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
};

// Navbar Component
const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <nav className="navbar">
      <div className="logo"><a href="/">FuturionAI</a></div>
      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <Link to="/contact">Contact Us</Link>
      </div>
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`hamburger ${menuOpen ? 'active' : ''}`}></div>
      </div>
    </nav>
  );
};

// Hero Section Component
const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Futurion AI solutions</h1>
        <p>We simplify complex tech challenges</p>
        <button className="primary-btn">Let's talk</button>
      </div>
    </section>
  );
};

// Services Section Component
const Services: React.FC = () => {
  const servicesList = [
    {
      id: 1,
      title: "Software Development",
      description: "Custom software that solves real problems. From web apps to enterprise solutions.",
    },
    {
      id: 2,
      title: "Cloud Solutions",
      description: "Scalable, reliable cloud infrastructure that grows with your business.",
    },
    {
      id: 3,
      title: "AI & Machine Learning",
      description: "Practical AI solutions that deliver tangible value, not just buzzwords.",
    },
    {
      id: 4,
      title: "Tech Consultation",
      description: "Strategic technology guidance from experts who speak human.",
    }
  ];
  
  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        {servicesList.map(service => (
          <div className="service-card" key={service.id}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// About Section Component
const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2>Why Choose Us</h2>
        <p>We're not just tech experts – we're partners invested in your success.</p>
        <div className="values">
          <div className="value">
            <h3>Human-First</h3>
            <p>Technology should serve people, not the other way around.</p>
          </div>
          <div className="value">
            <h3>No Jargon</h3>
            <p>We communicate clearly without unnecessary tech-speak.</p>
          </div>
          <div className="value">
            <h3>Real Solutions</h3>
            <p>Practical results that make a meaningful difference.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Call-to-Action Component
const CTA: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="cta" id="cta">
      <h2>Ready to get started?</h2>
      <p>Let's discuss how we can help with your technology challenges.</p>
      <button className="primary-btn" onClick={() => navigate('/contact')}>Contact Us</button>
    </section>
  );
};

// Footer Component
const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="/"><div className="footer-logo">FuturionAI</div></a>
        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-social">
          <a href="#" aria-label="LinkedIn">LinkedIn</a>
          <a href="#" aria-label="Twitter">Twitter</a>
          <a href="#" aria-label="Email">Email</a>
        </div>
      </div>
      <div className="copyright">
        © {new Date().getFullYear()} FuturionAI. All rights reserved.
      </div>
    </footer>
  );
};

export default App;