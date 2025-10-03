
import automationbanner2 from "../assets/automation-banner2.mp4"

export default function HeroSection2(){
    return (
         <section className="container-fluid p-0">
      <div className="row">
        <div className="col-12">
          <div className="ratio ratio-16x9">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-100 h-100"
            >
              <source src={automationbanner2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
           
          </div>
          
        </div>
      </div>
    </section>
     
          
    )
}