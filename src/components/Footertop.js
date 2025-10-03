import { FaArrowRight, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./footertop.css";

export default function FooterTop() {
  return (
    <div className="footer-top bg-black text-white py-5 position-relative">
      <div className="container">
        <div className="row align-items-center">
          
          
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="fw-bold" style={{fontFamily:"Montserrat Alternates, sans-serif"}}>Where your next breakthrough begins</h2>
          </div>
          <div className="col-lg-6">
            <p className="lead" style={{textAlign:"justify",wordSpacing:"normal"}}>
              Facilitating seamless integration across platforms,we're here to
              transform your vision into reality. Let's discuss your project and
              explore how our solutions can enhance your space. Reach out anytime
              to schedule an appointment at your convenience.
            </p>

            <div className="d-flex flex-column flex-sm-row align-items-start align-sm-items-center gap-3 gap-sm-5 mt-3">
              <Link
                to="/connect@jovoindia.com"
                className="text-white fw-semibold text-decoration-none"
              >
               <h5>connect@jovoindia.com</h5> 
              </Link>

              <Button
      style={{
        backgroundColor: "#FFE797",
        color: "#000",
       
        width: "100%", 
        maxWidth: "200px", 
      }}
      className=" btn-primary rounded-pill d-flex align-items-center gap-2 justify-content-center px-4 py-2 w-100 w-sm-auto"
    >
      Get in touch <FaArrowRight size={15} />
    </Button>
            </div>
          </div>
        </div>
      </div>

      
      <Link to="/tel:+917406000700">
        <button className="floating-btn phone-btn">
          <FaPhoneAlt size={24} />
        </button>
      </Link>

      <Link
        to="/https://api.whatsapp.com/send/?phone=917406000700&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="floating-btn whatsapp-btn">
          <FaWhatsapp size={24} />
        </button>
      </Link>
      <hr className="mt-5" />
    </div>
  );
}
