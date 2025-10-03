import { useState } from "react";
import { Link } from "react-router-dom";
import "./lightingnavbar.css";
import jovopng from "../assets/primary-logo.png";

export default function LightingNavbar() { 
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
          className="header1-wrapper w-nav"
        >
          <div className="container1-default w-container1">
            <div className="home-header1-content-wrapper">
    
              {/* Right Side Nav (hidden on tablet) */}
              <div className="header1-right-side hidden-on-tablet">
                <ul className="header1-nav-menu-list">
                  <li className="header1-nav-list-item left">
                    <Link to="/" className="header1-nav-link w-nav-link">
                      Home
                    </Link>
                  </li>
                  <li  className="header1-nav-list-item left">
                    <Link to="/ContactUs"className="header1-nav-link w-nav-link" >ContactUs</Link>
                  </li>
                  <li>
                    <Link to="/Aboutus" className="header1-nav-link w-nav-link">About</Link>
                  </li>
                </ul>
              </div>
    
              {/* Logo in the middle */}
              <div className="header-middle">
                <Link to="/" className="header1-logo1-link w-nav-brand">
                  <img src={jovopng} alt="jovo logo" className="jovo-brandlogo" />
                </Link>
              </div>
    
              {/* Right Side Nav (hidden on tablet) */}
              <div className="header1-right-side hidden1-on-tablet">
                <ul  className="header1-nav-menu-list">
                  <li className="header1-nav-list-item left" >
                    <Link to="/career" className="header1-nav-link w-nav-link">
                  Career
                    </Link>
                  </li>
                  <li className="header1-nav-list-item left dropdown">
                   <button className="dropdown-toggle">Resources</button>
                          <div className="dropdown-menu">
           <Link to="/Event" className="dropdown-link">Events</Link>
           <Link to="/Blog" className="dropdown-link">Blog</Link>
  </div>
</li>
                </ul>
              </div>
    
              {/* Left Side Menu & Hamburger */}
              <div className="header1-left-side">
                <nav
                  role="navigation"
                  className={`header-nav-menu-wrapper w-nav-menu ${menuOpen ? "open" : ""}`}
                >
                  <ul className="header-nav-menu-list">
                    <li className="header-nav-list-item show-in-tablet">
                     <Link to="/" className="header-nav-link w-nav-link">
                      Home
                    </Link>
                    </li>
                    <li className="header-nav-list-item show-in-tablet">
                     <Link to="/contactUs" className="header-nav-link w-nav-link">
                    ContactUs
                    </Link>
                    </li>
                    <li className="header-nav-list-item show-in-tablet">
                     <Link to="/Aboutus" className="header-nav-link w-nav-link">
                    About
                    </Link>
                    </li>
                    <li className="header-nav-list-item show-in-tablet">
                     <Link  to="/career" className="header-nav-link w-nav-link">
                  Career
                    </Link>
                    </li>
                    <li className="header-nav-list-item show-in-tablet">
                     <Link to="/Event"className="header-nav-link w-nav-link">
                    Events
                    </Link>
                    </li>
                    <li className="header-nav-list-item show-in-tablet">
                     <Link to="/Blog" className="header-nav-link w-nav-link">
                  Blogs
                    </Link>
                    </li>

                  </ul>
                </nav>
    
                {/* Hamburger Menu */}
                <div
                  className={`hamburger1-menu-wrapper w-nav-button ${menuOpen ? "active" : ""}`}
                  onClick={toggleMenu}
                >
                  <div className="hamburger1-menu-bar top"></div>
                  <div className="hamburger1-menu-bar bottom"></div>
                  
                </div>
              </div>
    
            </div>
          </div>
        </header>
    // <nav className="navbar-wrapper">
    //   <div className="container-default">
    //     <div className="navbar-content">
    //       {/* Left Side - Desktop Menu */}
    //       <div className="nav-side hidden-on-tablet">
    //         <ul className="nav-menu">
    //           <li><Link to="/" className="nav-link text-light">Home</Link></li>
    //           <li><Link to="/Aboutus" className="nav-link">About</Link></li>
    //           <li><Link to="/ContactUs" className="nav-link">Contact Us</Link></li>
    //         </ul>
    //       </div>

    //       {/* Logo */}
    //       <div className="nav-logo">
    //         <Link to="/" className="logo-link">
    //           <img src={jovopng} alt="Logo" />
    //         </Link>
    //       </div>

    //       {/* Right Side - Desktop Menu */}
    //       <div className="nav-side hidden-on-tablet">
    //         <ul className="nav-menu">
    //           <li><Link to="/career" className="nav-link">Career</Link></li>
    //           <li className="dropdown">
    //             <button className="dropdown-toggle">Resources </button>
    //             <div className="dropdown-menu">
    //               <Link to="/Event" className="dropdown-link">Events</Link>
    //               <Link to="/Blog" className="dropdown-link">Blog</Link>
    //             </div>
    //           </li>
    //         </ul>
    //       </div>

    //       {/* Mobile Menu */}
    //       <div className="nav-side mobile-only">
    //         <button
    //           className={`hamburger ${isOpen ? "open" : ""}`}
    //           onClick={() => setIsOpen(!isOpen)}
    //           aria-label="Toggle menu"
    //         >
    //           <span className="bar"></span>
    //           <span className="bar"></span>
    //           <span className="bar"></span>
    //         </button>

    //         <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
    //           <ul className="nav-menu">
    //             <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
    //             <li><Link to="/Aboutus" onClick={() => setIsOpen(false)}>About</Link></li>
    //             <li><Link to="/ContactUs" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
    //             <li><Link to="/career" onClick={() => setIsOpen(false)}>Career</Link></li>
    //             <li><Link to="/Blog" onClick={() => setIsOpen(false)}>Blog</Link></li>
    //             <li><Link to="/Event" onClick={() => setIsOpen(false)}>Events</Link></li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  );
}
