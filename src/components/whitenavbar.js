import { useState } from "react";
import { Link } from "react-router-dom";
import "./whitenavbar.css"
import blacklogo from "../assets/black-logo.png"


export default function Whitenavbar() { 
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
 
  return (
    <header
  data-w-id="dc765237-b0a3-458c-7a54-f048e3b331d0"
  data-animation="default"
  data-collapse="medium"
  data-duration="400"
  data-easing="ease"
  data-easing2="ease"
  role="banner"
  className="main-header-wrapper w-nav"
>
  <div className="main-header-container w-container1">
    <div className="main-header-content">

      <div className="nav-section-right hide-on-tablet">
        <ul className="nav-menu-list">
          <li className="nav-list-item left">
            <Link to="/" className="nav-link-primary w-nav-link">Home</Link>
          </li>
          <li className="nav-list-item left">
            <Link to="/ContactUs" className="nav-link w-nav-link">ContactUs</Link>
          </li>
          <li>
            <Link to="/Aboutus" className="nav-link w-nav-link">About</Link>
          </li>
        </ul>
      </div>

      
      <div className="logo-center">
        <Link to="/" className="logo-link w-nav-brand">
          <img src={blacklogo} alt="jovo logo" className="brand-logo" />
        </Link>
      </div>

     
      <div className="nav-section-right hide-secondary-on-tablet">
        <ul className="nav-menu-list">
          <li className="nav-list-item left" style={{ marginTop: "10px" }}>
            <Link to="/career" className="nav-link w-nav-link">Career</Link>
          </li>
          <li className="nav-list-item left dropdown">
            <button className="dropdown-btn" style={{ marginTop: "12px" }}>Resources</button>
            <div className="dropdown-content">
              <Link to="/Event" className="dropdown-item">Events</Link>
              <Link to="/Blog" className="dropdown-item">Blog</Link>
            </div>
          </li>
        </ul>
      </div>

    
      <div className="nav-section-left">
        <nav
          role="navigation"
          className={`nav-menu-wrapper w-nav-menu ${menuOpen ? "open" : ""}`}
        >
          <ul className="nav-menu-list">
            <li className="nav-list-item show-on-tablet">
              <Link to="/" className="nav-link w-nav-link">Home</Link>
            </li>
            <li className="nav-list-item show-on-tablet">
              <Link to="/contactUs" className="nav-link w-nav-link">ContactUs</Link>
            </li>
            <li className="nav-list-item show-on-tablet">
              <Link to="/Aboutus" className="nav-link w-nav-link">About</Link>
            </li>
            <li className="nav-list-item show-on-tablet">
              <Link to="/career" className="nav-link w-nav-link">Career</Link>
            </li>
            <li className="nav-list-item show-on-tablet">
              <Link to="/Event" className="nav-link w-nav-link">Events</Link>
            </li>
            <li className="nav-list-item show-on-tablet">
              <Link to="/Blog" className="nav-link w-nav-link">Blogs</Link>
            </li>
          </ul>
        </nav>

      
        <div
          className={`hamburger-toggle w-nav-button ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div className="hamburger-bar top"></div>
          <div className="hamburger-bar bottom"></div>
        </div>
      </div>

    </div>
  </div>
</header>
  
  );
}
