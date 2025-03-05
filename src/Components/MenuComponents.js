import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "../Styles/Menu.css"
export const MenuComponents = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">POOL Cleaning</Link>
        </div>
        
        {/* Desktop Menu */}
        <div className="menu">
          <Link to="/services" className="menu-item">Services</Link>
          <Link to="/about" className="menu-item">About</Link>
          <Link to="/contact" className="menu-item">Contact</Link>
        </div>

        {/* Contact Button */}
        <div className="quote-button">
          <Link to="/quote">Get a Quote</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="menu-toggle" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <Link to="/services" className="mobile-item">Services</Link>
          <Link to="/about" className="mobile-item">About</Link>
          <Link to="/contact" className="mobile-item">Contact</Link>
          <Link to="/quote" className="mobile-quote">Get a Quote</Link>
        </div>
      )}
    </nav>
  );
};

