 import "./securitysolutions.css"
 import client1 from '../assets/client1.jpg';
import client2 from '../assets/client2.jpg';
 import client3 from '../assets/client3.jpg';
import client4 from '../assets/client4.jpg';
 import client5 from '../assets/client5.jpg';
import client6 from '../assets/client6.jpg';
 import client7 from '../assets/client7.jpg';
import client8 from '../assets/client8.jpg';
 import client9 from '../assets/client9.jpg';
import client10 from '../assets/client10.jpg';
 import client11 from '../assets/client11.jpg';


export default function SecuritySolutions(){

    return (
    <>
      <section className="client-logos-section">
      <div className="client-logos-container">
        <div className="client-logos-track" id="clientTrack">
          <div className="logo-strip">
            <img src= {client1} alt="Client 1" className="client-logo" />
            <img src={client2} alt="Client 2" className="client-logo" />
            <img src={client3} alt="Client 3" className="client-logo" />
            <img src={client4} alt="Client 4" className="client-logo" />
            <img src={client5} alt="Client 5" className="client-logo" />
            <img src={client6} alt="Client 6" className="client-logo" />
            <img src={client7} alt="Client 7" className="client-logo" />
            <img src={client8} alt="Client 8" className="client-logo" />
          </div>
          <div className="logo-strip">
           <img src={client9} alt="Client 9" className="client-logo" />
           <img src={client10} alt="Client 10" className="client-logo" />
           <img src={client11} alt="Client 11" className="client-logo" />
         
          </div>
        </div>
      </div>
    </section>

    <section className="automation-section2">
  <div
    className="container"
    style={{ fontFamily: "'Montserrat Alternates', sans-serif" }}
  >
    <div className="row justify-content-center my-5">
      <div className="col-md-8 text-center">
        <h2 className="automation-display-1 fw-semi mb-3">SECURITY SOLUTIONS</h2>
        <p className="automation-paragraph text-justify">
          Enhance your safety with our advanced security solutions, featuring
          digital door locks, video door phones, smart sensors, and high-performance
          security cameras. Designed for reliability and seamless functionality,
          our systems ensure complete peace of mind for your home and loved ones.
          We offer trusted brands including Secureeye, TP-Link, Panasonic, CP Plus,
          and Honeywell for security cameras, as well as Qubo, Yale, and Ozone for
          premium door locks.
        </p>
      </div>
    </div>
  </div>
</section>
       
        </>
        
    )
}