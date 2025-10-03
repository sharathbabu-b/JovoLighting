import "./cctv&networking.css"
 
export default function CCtvNetworking(){
    const logos = [
  
  { src: "https://jovoindia.com/images/automation-icon/mk-sound-logo.png", alt: "Client 1" },
  { src: "https://jovoindia.com/images/automation-icon/av-logic-logo.png", alt: "Client 2" },
  { src: "https://jovoindia.com/images/automation-icon/ascendo-logo.png", alt: "Client 3" },
  { src: "https://jovoindia.com/images/automation-icon/speaker-craft-logo.png", alt: "Client 4" },
  { src: "https://jovoindia.com/images/automation-icon/pro-fix-logo.png", alt: "Client 5" },
  { src: "https://jovoindia.com/images/automation-icon/little-nap-logo.png", alt: "Client 6" },
  { src: "https://jovoindia.com/images/automation-icon/tyba-logo.png", alt: "Client 7" },
  { src: "https://jovoindia.com/images/automation-icon/casa-tunes-logo.png", alt: "Client 8" }
];

    

  const repeatCount = 3;
    return (
        <>
         <section className="client-logos-section">
      <div className="client-logos-container">
        <div className="automation-client-logos-track">
          {[...Array(repeatCount)].map((_, index) => (
            <div className="logo-strip" key={index}>
              {logos.map(({ src, alt }, idx) => (
                <img key={idx} src={src} alt={alt} className="client-logo" />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  
         {/* <section className="client-logos-section">
              <div className="client-logos-container">
                <div className="client-logos-track" id="clientTrack">
                  <div className="logo-strip">
                     <img src="https://jovoindia.com/images/automation-icon/mk-sound-logo.png" alt="Client 1" className="client-logo" />
              <img src="https://jovoindia.com/images/automation-icon/av-logic-logo.png" alt="Client 2" className="client-logo" />
              <img src="https://jovoindia.com/images/automation-icon/ascendo-logo.png" alt="Client 3" className="client-logo" />
              <img src="https://jovoindia.com/images/automation-icon/speaker-craft-logo.png" alt="Client 4" className="client-logo" />
              <img src="https://jovoindia.com/images/automation-icon/pro-fix-logo.png" alt="Client 5" className="client-logo" />
              <img src="https://jovoindia.com/images/automation-icon/little-nap-logo.png" alt="Client 6" className="client-logo" />
              <img src="https://jovoindia.com/images/automation-icon/tyba-logo.png" alt="Client 7" className="client-logo" />
              <img src="https://jovoindia.com/images/automation-icon/casa-tunes-logo.png" alt="Client 8" className="client-logo" />
                  </div>
                  <div className="logo-strip">
                   <img src="https://jovoindia.com/images/automation-icon/mk-sound-logo.png" alt="Client 1" className="client-logo" />
              <img src="https://jovoindia.com/images/automation-icon/av-logic-logo.png" alt="Client 2" className="client-logo" />
              <img src="https://jovoindia.com/images/automation-icon/ascendo-logo.png" alt="Client 3" className="client-logo" />
              <img src="https://jovoindia.com/images/automation-icon/speaker-craft-logo.png" alt="Client 4" className="client-logo" />
              <img src="https://jovoindia.com/images/automation-icon/pro-fix-logo.png" alt="Client 5" className="client-logo" />
              <img src="https://jovoindia.com/images/automation-icon/little-nap-logo.png" alt="Client 6" className="client-logo" />
              <img src="https://jovoindia.com/images/automation-icon/tyba-logo.png" alt="Client 7" className="client-logo" />
              <img src="https://jovoindia.com/images/automation-icon/casa-tunes-logo.png" alt="Client 8" className="client-logo" />
                  </div>
                </div>
              </div>
            </section>
         */}
       <section className="automation-section4">
  <div
    className="container"
    style={{ fontFamily: "'Montserrat Alternates', sans-serif" }}
  >
    <div className="row justify-content-center my-5">
      <div className="col-md-8 text-center">
        <h2 className="automation-display-1 fw-semi mb-3">CCTV & NETWORKING</h2>
        <p className="automation-paragraph text-justify">
          Secure your premises with our reliable CCTV systems and robust networking
          solutions. From advanced surveillance to seamless connectivity, we deliver
          end-to-end solutions designed for safety, efficiency, and peace of mind.
          Our passive network solutions include high-quality network cables, switches,
          access points, security sensors, and intercom systems—ensuring your spaces
          stay both secure and connected.
        </p>
      </div>
    </div>
  </div>
</section>
    </>
      
    )

}