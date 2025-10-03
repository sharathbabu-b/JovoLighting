import React, { useState } from "react";
import { Link } from "react-router-dom";
import jovologo from "../assets/primary-logo.png"
import "./Navbarhome.css"


const IntropageNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <>
    <header
  className="intro-header-wrapper w-nav"
  
>
  <div className="intro-container-default w-container">
    <div className="intro-home-header-content-wrapper">

      
      <div className="intro-header-right-side hidden-on-tablet">
        <ul className="intro-header-nav-menu-list">
          <li className="intro-header-nav-list-item left">
            <Link to="/lighting" className="intro-header-nav-link w-nav-link">
              Lighting
            </Link>
          </li>
        </ul>
      </div>

   
      <div className="intro-header-middle">
        <Link to="/" className="intro-header-logo-link w-nav-brand">
          <img src={jovologo} alt="jovo logo" className="intro-jovo-brandlogo" />
        </Link>
      </div>


      <div className="intro-header-right-side hidden-on-tablet">
        <ul className="intro-header-nav-menu-list">
          <li className="intro-header-nav-list-item left">
            <Link to="/automation" className="intro-header-nav-link w-nav-link">
              Automation
            </Link>
          </li>
        </ul>
      </div>

      
      <div className="intro-header-left-side">
        <nav
          role="navigation"
          className={`intro-header-nav-menu-wrapper w-nav-menu ${menuOpen ? "open" : ""}`}
        >
          <ul className="intro-header-nav-menu-list">
            <li className="intro-header-nav-list-item show-in-tablet">
              <Link to="/lighting" className="intro-header-nav-link w-nav-link">
                Lighting
              </Link>
            </li>
            <li className="intro-header-nav-list-item show-in-tablet">
              <Link to="/automation" className="intro-header-nav-link w-nav-link">
                Automation
              </Link>
            </li>
          </ul>
        </nav>

        
        <div
          className={`intro-hamburger-menu-wrapper w-nav-button ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div className="intro-hamburger-menu-bar top"></div>
          <div className="intro-hamburger-menu-bar bottom"></div>
        </div>
      </div>

    </div>
  </div>
</header>

</>

  );
};

export default IntropageNav;
