import { Link } from "react-router-dom";
import jovopng from "../assets/primary-logo.png";
import { useState } from "react";
import "./automationnavbar.css";

export default function AutomationNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  }
  return (
    <nav className="navbar1-wrapper">
      <div className="container2-default">
        <div className="navbar2-content">
         
          <div className="nav2-side hidden-on-tablet">
            <ul className="nav2-menu">
              <li><Link to="/" className="nav2-link">Home</Link></li>
              <li><Link to="/ContactUs" className="nav2-link">Contact Us</Link></li>
            </ul>
          </div>

         
          <div className="nav2-logo">
            <Link to="/" className="logo2-link">
              <img src={jovopng} alt="Logo" />
            </Link>
          </div>

         
          <div className="nav2-side hidden-on-tablet">
            <ul className="nav2-menu">
              <li><Link to="/Blog" className="nav2-link">Blogs</Link></li>
              <li><Link to="/Event" className="nav2-link">Events</Link></li>
            </ul>
          </div>

        
          <div className="nav2-side mobile-only">
            <button
              className={`hamburger2 ${isOpen ? "open" : ""}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>

            <div className={`mobile-menu2 ${isOpen ? "open" : ""}`}>
              <ul className="nav-menu">
                <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                <li><Link to="/ContactUs" onClick={closeMenu}>Contact Us</Link></li>
                <li><Link to="/Blog" onClick={closeMenu}>Blogs</Link></li>
                <li><Link to="/Event" onClick={closeMenu}>Events</Link></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}
