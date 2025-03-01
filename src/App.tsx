import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import './App.css';
import Contact from './Contact';
import Projects from './Projects';

// Main App Component
const App: React.FC = () => {
  // Effect to handle hash navigation
  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      // Get the element ID from the hash
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      
      // If the element exists, scroll to it
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Small delay to ensure the page is fully loaded
      }
    }
  }, [window.location.hash]);

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
              <ProjectsWrapper />
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
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div onClick={() => {
        navigate('/');
        window.scrollTo(0, 0);
      }} className="logo"/>
      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <a href="/#services ">Services</a>
        <a href="/#projects-section">Projects</a>
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

// Projects Section Component
const ProjectsWrapper: React.FC = () => {
  return (
    <section className="projects-section" id="projects-section">
      <Projects />
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
        <a href="/"><div className="footer-logo"/></a>
        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#projects-section">Projects</a>
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