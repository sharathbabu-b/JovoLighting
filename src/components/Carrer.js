
import React from "react";
import "./career.css"; 
import Lightingnavbar from "./Lightingnavbar"
import Footerbottom from "./Footerbottom"
import phoneicon from "../assets/phone-icon.svg"

export default function CareerFormSection() {
  return (
    <>
    <Lightingnavbar/>
    <section className="career-section">
      <div className="career-container">
        <h1 className="career-heading">Build Your Future With Us</h1>

        <div className="career-grid">
         
          <form className="career-form">
            <div className="form-row">
              <div className="form-group">
                <label>Full name</label>
                <input type="text" placeholder="Enter Your Full Name" />
              </div>

              <div className="form-group">
                <label>Email address</label>
                <input type="email" placeholder="example@youremail.com" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone number</label>
                <input type="tel" placeholder="+91 **********" />
              </div>

              <div className="form-group">
                <label>Position</label>
                <input type="text" placeholder="ex. Manager" />
              </div>
            </div>

            <div className="form-group full-width">
              <label>About yourself</label>
              <textarea rows="3"></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>

        
          <div className="career-info">
            <h2>Your Next Big Move Starts Here</h2>
            <p>
              We're looking for passionate individuals ready to make an impact.
              Bring your skills and let's build something amazing together.
            </p>

            <div className="info-item">
              <img src="https://jovoindia.com/images/64a59c1abf1133aa75c31007_email-icon-architectr-x-webflow-template.svg" alt="icon" className="img-fluid"/>
              <p style={{color:"neutral--500"}}>
                Send us a message <br />
                <strong style={{color:"#fff"}}>connect@jovoindia.com</strong>
              </p>
            </div>

            <div className="info-item">
           <img src={phoneicon} alt="icon" className="img-fluid"/>
              <p style={{opacity:0.9}}>
                Give us a call <br />
                <strong style={{color: "#fff" }}>+917406000700</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footerbottom/>
    </>
  );
}
