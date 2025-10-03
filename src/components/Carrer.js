import React from "react";
import "./career.css";
import Lightingnavbar from "./Lightingnavbar";
import Footerbottom from "./Footerbottom";
import phoneicon from "../assets/phone-icon.svg";

export default function CareerFormSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <>
      <Lightingnavbar />
      <section className="career-section">
        <div className="career-container">
          <h1 className="career-heading">Build Your Future With Us</h1>

          <div className="career-grid">
            {/* ===== Form ===== */}
            <form className="career-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">Full name</label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="Enter Your Full Name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="example@youremail.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone number</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+91 **********"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="position">Position</label>
                  <input
                    id="position"
                    type="text"
                    placeholder="ex. Manager"
                  />
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="about">About yourself</label>
                <textarea id="about" rows="3"></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>

            {/* ===== Info Sidebar ===== */}
            <div className="career-info">
              <h2>Your Next Big Move Starts Here</h2>
              <p>
                We're looking for passionate individuals ready to make an
                impact. Bring your skills and let's build something amazing
                together.
              </p>

              <div className="info-item">
                <img
                  src="https://jovoindia.com/images/64a59c1abf1133aa75c31007_email-icon-architectr-x-webflow-template.svg"
                  alt="Email icon"
                  className="img-fluid"
                />
                <p style={{ color: "#bbb" }}>
                  Send us a message <br />
                  <strong style={{ color: "#fff" }}>connect@jovoindia.com</strong>
                </p>
              </div>

              <div className="info-item">
                <img src={phoneicon} alt="Phone icon" className="img-fluid" />
                <p style={{ opacity: 0.9 }}>
                  Give us a call <br />
                  <strong style={{ color: "#fff" }}>+91 7406000700</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footerbottom />
    </>
  );
}
