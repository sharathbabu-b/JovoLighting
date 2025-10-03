// import { Link } from "react-router-dom"
import homebanner1 from "../assets/LightingImages/Homeimages/Home-banner-1.jpeg"
import bulbicon from "../assets/LightingImages/Homeimages/hanging-bulb-icon.png"
import patioimage from "../assets/LightingImages/Homeimages/patio-heater.png"
import hanglamp from "../assets/LightingImages/Homeimages/hang-lamp.png"
import homeautomation from "../assets/LightingImages/Homeimages/home-automation.png"
import { Carousel } from "react-bootstrap"
import BlogSection from "./LightinghomeBlog"
import "./lighting.css"

export default function Lightinghome() {
  return (
    <>
  
 <section className="position-relative pt-4 w-100 min-vh-100 overflow-hidden">
  
  <img
    src={homebanner1}
    alt="homebanner"
    className="img-fluid w-100 h-100 position-absolute top-0 start-0"
    style={{ objectFit: "cover", zIndex: 0 }}
  />


  <div
    className="position-absolute top-0 start-0 w-100 h-100"
    style={{
      background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))',
      zIndex: 1
    }}
  ></div>

 
  <div
    className="position-absolute top-50 start-50 translate-middle text-center text-white px-3 px-md-4"
    style={{ zIndex: 2 }}
  >
    <h1 className="display-4 fw-semibold  mb-2  mt-5 me-5 ">
      Experience the Brilliance
    </h1>

    <h2 className="fs-4 fs-md-3 fw-semibold mb-3 tag-line-animated-text">
      "India's first lighting Manufacturer to offer up to 7-year warranty"
    </h2>

    <p className="fs-6 fs-md-5 mb-4 ">
      Premium Lighting & Automation by JÖVÖ INDIA
    </p>

   <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3 hero-buttons py-3 ">
  <button className="btn btn-lg btn-custom rounded-pill  py-2 w-100 w-sm-auto animate-btn delay-0 mb-2">
    Get In Touch →
  </button>
  <button className="btn btn-ls btn-banner rounded-pill px-3 py-3 w-100 w-ms-auto w-sm-auto animate-btn delay-1">
    Browse Products
  </button>
</div>
  </div>
</section>
 <section className="why-choose-section bg-black text-white mt-0 pt-4">
  <div className=" contanier-fluid text-center py-5 ">
    <h2 className="display-5 mt-0">Why Choose Us?</h2>
  </div>

 <div className="container-fluid ms-2 ">
  <div className="row g-4 gy-5">

   
    <div className="col-12 col-sm-6 col-lg-3">
      <div className="text-middle  h-100 d-flex flex-column">
        <img
          src={bulbicon}
          alt="Unique Design Icon"
          className="img-fluid mb-3 icon-size"
        />
        <h5 className="fs-4 fw-semibold py-2">Unique Design Solutions</h5>
        <p className="mb-0 fw-semi me-2 py-1" >
          At JÖVÖ, we understand that every space tells a story — and light plays a powerful role in experiencing that story. Experts in providing concept-based lighting solutions end to end.
        </p>
      </div>
    </div>


    <div className="col-12 col-sm-6 col-lg-3">
      <div className="text-start h-100 d-flex flex-column">
        <img
          src={patioimage}
          alt="Advanced Lighting Icon"
          className="img-fluid mb-3 icon-size"
        />
        <h5 className="fs-4 fw-semibold py-2">Advanced Lighting Excellence</h5>
        <ul className="ps-3 mb-0" >
          <li className="mb-2">High CRI (97)</li>
          <li className="mb-2">Smart lighting</li>
          <li className="mb-2">Home automation & networking</li>
          <li className="mb-2">Skylum (circadian lighting)</li>
        </ul>
      </div>
    </div>

 
    <div className="col-12 col-sm-6 col-lg-3">
      <div className="text-start h-100 d-flex flex-column">
        <img
          src={hanglamp}
          alt="Customised Light Icon"
          className="img-fluid mb-3 icon-size"
        />
        <h5 className="fs-4 fw-semibold py-2">Customised Light Solutions</h5>
        <ul className="ps-3 mb-0" >
          <li className="mb-2">Transforming Vision into Reality</li>
          <li className="mb-2">We design customizable lighting solutions for architectural needs</li>
          <li className="mb-2">Our focus is on precision, adaptability, and brilliance to enhance every space</li>
        </ul>
      </div>
    </div>

    <div className="col-12 col-sm-6 col-lg-3">
      <div className="text-start h-100 d-flex flex-column">
        <img
          src={homeautomation}
          alt="Home Automation Icon"
          className="img-fluid mb-3 icon-size"
        />
        <h5 className="fs-4 fw-semibold py-2">Leverage One Stop Solution</h5>
        <ul className="ps-3 mb-0">
          <li className="mb-2">Indoor Lighting</li>
          <li className="mb-2">Outdoor Lighting</li>
          <li className="mb-2">Decorative Lighting</li>
          <li className="mb-2">Home Automation</li>
        </ul>
      </div>
    </div>

  </div>
</div>

</section>


      <section className="bg-black text-white py-5 position-relative">
  <div className="container">
    <div className="row align-items-center g-4">
      
      <div className="col-12 col-lg-6 mb-4 mb-lg-0">
        <h2 className="display-5 fw-semi ms-1 px-0">What our clients say</h2>
      </div>

   
      <div className="col-15 col-lg-6  mt-4"> 
        <p className=" fw-semi  me-0 lh-base px-3" style={{textAlign:"justify",fontSize:"18px"}}>
          Discover how Jovo India's innovative lighting solutions have
          transformed spaces and exceeded expectations across diverse projects.
          Our clients share their experiences with our quality craftsmanship
          and dedicated service.
        </p>
      </div>
    </div>
  </div>
</section>

    <section
      className="testimonial-section bg-black text-white py-1 "
     
    >
      <div className="container-fluid py-5 m-1">
        <Carousel
          indicators={true}
          controls={true}
          interval={4000}
          fade={false}
          pause={false}
          nextIcon={<span className="carousel-control-next-icon custom-arrow" />}
          prevIcon={<span className="carousel-control-prev-icon custom-arrow" />}
        >
         
          <Carousel.Item>
            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center text-center position-relative py-5">
              
             
              <img
                src="https://jovoindia.com/images/649dfc4cc47448084f44ed73_testimonial-left-image-architectr-x-webflow-template.svg"
                alt="Left Quote"
                className="position-absolute start-0 d-none d-lg-block"
                style={{ width: "500px", opacity: 0.1 ,height:"300px"}}
              />

             
              <div className="px-3 px-lg-5">
                <h3 className="display-6 fw-bold mb-3 fs-5">
                  “If you’re seeking expert advice on selecting top-notch lighting”
                </h3>
                <p className="mb-3 text-white-50" style={{textAlign:"justify"}}>
                  Mahesh has been an exceptionally kind and generous person. I highly
                  recommend reaching out to him for his invaluable suggestions.
                </p>
                <div className="fw-bold mt-3">Vaishnavi G</div>
              </div>

             
              <img
                src="https://jovoindia.com/images/649dfc4c1c6bb70aa8f6dcd9_testimonial-right-image-architectr-x-webflow-template.svg"
                alt="Right Quote"
                className="position-absolute end-0 d-none d-lg-block"
                style={{ width: "100px", opacity: 0.1 }}
              />
            </div>
          </Carousel.Item>

        
          <Carousel.Item>
            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center text-center position-relative py-5">
              
              
              <img
                src="https://jovoindia.com/images/649dfc4cc47448084f44ed73_testimonial-left-image-architectr-x-webflow-template.svg"
                alt="Left Quote"
                className="position-absolute start-0 d-none d-lg-block"
                style={{ width: "100px", opacity: 0.1 }}
              />

         
              <div className="px-3 px-lg-5">
                <h3 className="display-6 fw-bold mb-3 fs-5" >
                  “JOVO Lighting has been such a refreshing experience for us”
                </h3>
                <p className="mb-3 text-white-50" style={{textAlign:"justify"}}>
                  We approached JOVO for our meditation hall at Domlur and they were
                  very forthright in their recommendations. Great experience!
                </p>
                <div className="fw-bold mt-3">Preedesh M</div>
              </div>

             
              <img
                src="https://jovoindia.com/images/649dfc4c1c6bb70aa8f6dcd9_testimonial-right-image-architectr-x-webflow-template.svg"
                alt="Right Quote"
                className="position-absolute end-0 d-none d-lg-block"
                style={{ width: "100px", opacity: 0.1 }}
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
<BlogSection/>  
    </>
  );
}
