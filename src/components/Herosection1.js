import automationbanner from "../assets/automation-banner.mp4";
import "./herosection1.css";

export default function HeroSection1() {
  return (
    <section className="hero-section position-relative w-100 vh-100">
   
      <video
        autoPlay
        loop
        muted
        playsInline
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ objectFit: "cover" }}
      >
        <source src={automationbanner} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    
      <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
        <h1 className="display-1 gradient-heading mg-bottom-32px padding-bottom-20"  style={{ fontFamily: "'Montserrat Alternates', sans-serif"

        }}>Automation</h1>
        <div className="text-center"></div>
      </div>
       {/* <h1 className="hero-title"  style={{ fontFamily: "'Montserrat Alternates', sans-serif"
          ,backgroundImage:"linear-gradient(138deg, transparent, var(--neutral--100) 18%, #ffffff 72%, #ffffff 86%);"
        }}>Automation</h1>
      </div> */}
    </section>
  );
}
