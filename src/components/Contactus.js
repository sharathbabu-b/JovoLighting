import { Link } from "react-router-dom";
import React, { useState } from "react";
import LightingNavbar from "./Lightingnavbar";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import MapSection from "./mapsection";
import FAQs from "./Faq";
import "./contact.css";
import ContactVideo from "../assets/contactus-video.mp4";
import FooterBottom from "./Footerbottom";

export default function ContactUs() {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
const [errors, setErrors] = useState({});

const validateForm = () => {
  const newErrors = {};

  if (!fullname.trim()) newErrors.fullname = "Full Name is required";
  if (!email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    newErrors.email = "Email is invalid";
  }
  if (!phone.trim()) {
    newErrors.phone = "Phone Number is required";
  } else if (!/^[0-9]{10}$/.test(phone)) {
    newErrors.phone = "Phone Number must be 10 digits";
  }
  if (!subject.trim()) newErrors.subject = "Subject is required";
  if (!message.trim()) newErrors.message = "Message is required";

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) {
    return;
  }

  alert("Form submitted successfully!");
  setFullName("");
  setEmail("");
  setPhone("");
  setSubject("");
  setMessage("");
  setErrors({});
};
  return (
    <>
      <LightingNavbar />
      <section className="pt-5 mt-5 p-5">
   <div className="container py-4 px-3">
  <div className="d-flex flex-column flex-sm-row align-items-center justify-content-start">
  
    <img
      src="https://jovoindia.com/images/674bf99cab62ac5800486c20_Subtitle%20Icon.svg"
      alt="icon"
      className="me-2"
      style={{ width: "30px", height: "50px", minWidth: "30px" }}
    />

    
    <div className="text-center text-sm-start">
      <Link to="/" className="text-black text-decoration-none">
        Home
      </Link>
      / Contact Us
    </div>

    
    <div className="flex-grow-1 border-bottom ms-sm-3 mt-3 mt-sm-0"></div>
  </div>
</div>

        <div className="container d-flex align-items-center mb-1 py-3 px-1">
          <h2
            className="pt-0 ps-2"
            style={{ fontSize: "40px", fontWeight: "500", maxWidth: "550px" }}
          >
            Let’s Talk About Your Dream Project
          </h2>
        </div>

        
        <div className="container-fluid my-5 mt-3">
          <div className="row justify-content-center align-items-center">
        
            <div className="col-md-5 d-flex justify-content-center mb-4 mb-md-0">
              <img
                src="https://jovoindia.com/images/contact-banner-image.jpg"
                alt="Modern Interior"
                className="img-fluid"
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  height: "650px",
                  objectFit: "cover",
                }}
              />
            </div>

          
            <div className="col-md-6 px-4 px-md-5 py-4 py-md-5">
              <form onSubmit={handleSubmit}>
            
                <div className="row mb-4">
                  <div className="col-12 col-md-6 mb-3 mb-md-0">
                    <label htmlFor="fullName" className="form-label">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      className={`form-control rounded-pill ${errors.fullname ? "is-invalid" : ""}`}
                      id="fullName"
                      placeholder="Your good name"
                      value={fullname}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                    {errors.fullname && <div className="invalid-feedback">{errors.fullname}</div>}
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="email" className="form-label">
                      Your Email*
                    </label>
                    <input
                      type="email"
                      className={`form-control rounded-pill ${errors.email ? "is-invalid" : ""}`}
                      id="email"
                      placeholder="connect@jovoindia.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      
                    />
                    {errors.fullname && <div className="invalid-feedback">{errors.email}</div>}
                  </div>
                </div>

               
                <div className="row mb-4">
                  <div className="col-12 col-md-6 mb-3 mb-md-0">
                    <label htmlFor="phone" className="form-label">
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                       className={`form-control rounded-pill ${errors.phone ? "is-invalid" : ""}`}
                      id="phone"
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    {errors.fullname && <div className="invalid-feedback">{errors.phone}</div>}
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="subject" className="form-label">
                      Subject*
                    </label>
                    <input
                      type="text"
                      className={`form-control rounded-pill ${errors.subject ? "is-invalid" : ""}`}
                      id="subject"
                      placeholder="Modern Interior"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                    {errors.fullname && <div className="invalid-feedback">{errors.subject}</div>}
                  </div>
                </div>

               
                <div className="mb-4">
                  <label htmlFor="message" className="form-label">
                    Your Message*
                  </label>
                  <textarea
                    className={`form-control rounded-pill ${errors.message? "is-invalid" : ""}`}
                    style={{ borderRadius: "18px" }}
                    id="message"
                    rows="5"
                    placeholder="Please type your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  {errors.fullname && <div className="invalid-feedback">{errors.message}</div>}
                </div>

                
                <button
                  type="submit"
                  className="btn btn-dark px-5 py-2 rounded-pill w-100 w-md-auto"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

     
      <div className="bg-dark text-white py-5">
        <div className="container">
          <div className="d-flex flex-column flex-md-row flex-wrap gap-4 text-center text-md-start align-items-center justify-content-center">
            
            <div className="d-flex align-items-center px-3">
              <FaEnvelope size={30} className="text-white border rounded-circle p-2 me-3" />
              <div>
                <h6 className="fw-semibold">Email</h6>
                <p className="mb-0">connect@jovoindia.com</p>
              </div>
            </div>

           
            <div className="d-flex align-items-center px-3">
              <FaPhone size={30} className="text-white border rounded-circle p-2 me-3" />
              <div>
                <h6 className="fw-semibold">Phone</h6>
                <p className="mb-0">+91 7406000700</p>
              </div>
            </div>

            <div className="d-flex align-items-center px-3">
              <FaMapMarkerAlt size={30} className="text-white border rounded-circle p-2 me-3" />
              <div>
                <h6 className="fw-semibold">Location</h6>
                <p className="mb-0">
                  109/1, Ground Floor, 6th Cross, 2nd Main Rd, <br />
                  Ranganathapura, Kamakshipalya, Bengaluru, KA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    
      <div className="container d-flex align-items-center mb-2 py-5 px-3 px-md-5">
        <img
          src="https://jovoindia.com/images/674bf99cab62ac5800486c20_Subtitle%20Icon.svg"
          alt="icon"
          className="me-2"
          style={{ width: "24px", height: "24px" }}
        />
        <div>Location</div>
        <div className="flex-grow-1 border-bottom ms-3"></div>
      </div>

      <div className="d-flex justify-content-center align-items-center px-3 px-md-5 text-center">
        <h5 className="fs-5">
          109/1, Ground Floor, 6th Cross, 2nd Main Rd, Ranganathapura,
          Kamakshipalya, Bengaluru, Karnataka 560079
        </h5>
      </div>

      <div className="d-flex justify-content-center align-items-center py-4">
        <MapSection />
      </div>

      <div className="py-4 px-3 px-md-5">
        <FAQs />
      </div>

     
      <section
        className="px-3 hero-section position-relative w-100"
        style={{ height: "440px" }}
      >
      
        <video
          autoPlay
          loop
          muted
          playsInline
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ objectFit: "cover", zIndex: -1 }}
        >
          <source src={ContactVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background: "linear-gradient(rgba(3, 3, 3, 0.45), rgba(3, 3, 3, 0.45))",
            zIndex: -1,
          }}
        ></div>

      
        <div className="container-fluid h-100 d-flex flex-column justify-content-center text-white py-5 text-center text-md-start">
          <div className="col-lg-6 col-md-8">
            <h1 className="mb-4 fw-semibold">What lighting products do you sell?</h1>
            <p className="mb-4">
              High Quality, bespoke lighting solutions sold. We sell solutions
              rather than products. Complete lighting for your space.
            </p>
            <div className="cta-button-wrapper">
              <a
                href="/contactus"
                className="btn btn-light d-inline-flex flex-wrap align-items-center gap-2 rounded-pill"
              >
                <span>Contact Us</span>
                <svg
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.39868 2L12.4201 6.07174L8.34839 10.0932"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M0.999923 6.0134L12.3064 6.07124"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <FooterBottom />
    </>
  );
}
