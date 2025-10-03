import FooterBottom from "./Footerbottom";
import WhiteNavbar from "./whitenavbar";
import "./About.css"
import Aboutvideo from "../assets/LightingImages/About-video1.mp4";
import AboutJovo from "../assets/LightingImages/about-jovo-image-1.jpg";
import AboutJovo2 from "../assets/LightingImages/about-jovo-image-2.jpg";
import AboutJovo3 from "../assets/LightingImages/jovo-about-3.jpg";
import Aboutjovo4 from "../assets/LightingImages/vision-mission-img.jpg";
import Teamimage from "../assets/LightingImages/team-image.jpg";
// import TestimonialSection from "./testimonals";

 
import Testimonial from "../assets/LightingImages/testimonial-icon.jpg"

import { motion } from "framer-motion";

import { useState } from "react";
import { Link } from "react-router-dom";


export default function About() {
 const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  const testimonials = [
  {
    text: `“JÖVÖ Lighting has been such a refreshing experience for us. We approached JÖVÖ Lighting for our YSDK meditation hall at Domlur, and their team visited us, discussed our requirements, and provided clear, forthright recommendations on what would work best. Quite professional! When we faced an issue with one of the units, they promptly came over and resolved it. Both sales and after-sales service reflected true professionalism. With regard to variety and selection, they offer a wide range of products, and since they have their own factory, customization is also possible—which is extremely helpful. We strongly recommend JÖVÖ Lighting for all lighting needs, especially in Bengaluru. Highly recommended!”`,
    name: "Preedesh M",
    image: Testimonial,
  },
  {
    text:`“I have been working with Mahesh for the past year, for both technical and decorative lighting requirements for my interior projects. His service and quality of products are top notch. Special mention to the variety and number of options he has. 100% would recommend him!!”`,
    name:"Anirudh Shashidhar",
    image:Testimonial,
  },
  {
    text:`“Our new home is beautifully lit with JÖVÖ Lighting 😊. Thanks to our architect for suggesting it—no doubt they’ve done their best! We had multiple requirements, and they provided the best options with ease.
Swathi, with her excellent coordination, and Shadakshari, the technician, did an amazing job 👏🏽. Thank you so much!!”`,
    name:"Bhagyashree Makam",
    image:Testimonial,
  },

  {
text:`“JÖVÖ Lighting truly lives up to its name—bright, beautiful, and reliable! Their lights completely transformed my space, creating a warm and modern glow. Highly recommended!!”`,
name:"Akash NS",
image:Testimonial,
  }
];
  return (
    <>
     <WhiteNavbar/>
      <section className="hero-section position-relative w-100 vh-100">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ objectFit: "cover" }}
        >
          <source src={Aboutvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Main About Section */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <img
            src={AboutJovo}
            alt="about"
            className="img-fluid rounded shadow"
            style={{ width:"100%",height:"auto",objectFit: "cover"}}
          />
        </div>

        {/* About Title */}
        <div className="d-flex align-items-center mb-4">
          <img
            src="https://jovoindia.com/images/674bf99cab62ac5800486c20_Subtitle%20Icon.svg"
            alt="icon"
            className="me-2"
            style={{ width: "15px", height: "24px" }}
          />
          <h5 className="mb-0 me-2">
            <span className="px-2 py-1 text-dark">About</span>Us
          </h5>
          <div className="flex-grow-1 border-bottom ms-3"></div>
        </div>

        {/* Intro Text */}
        <h2 className="fw-semibold mb-3">
          We're India's Premier Lighting Manufacturer offering up to 7-Year
          Warranty With High CRI
        </h2>
        <p style={{textAlign:"justify"}}  className="fw-5">
          At JÖVÖ, we understand that every space tells a story — and light
          plays a powerful role in experiencing that story.
        </p>
        <p style={{textAlign:"justify"}}>
          At JÖVÖ INDIA, precision engineering meets artistic vision. Our
          products blend cutting-edge LED technology with sophisticated design,
          delivering solutions for every space — from cozy homes to grand
          commercial projects. We don't just manufacture lights; we craft
          experiences that define excellence in both beauty and performance.
        </p>

        {/* Two Image Section */}
     <div className="row align-items-center py-5 px-3 px-md-5">
  <div className="col-12 col-md-6 mb-4 mb-md-0">
    <img
      src={AboutJovo2}
      alt="jovo2"
      loading="lazy"
      sizes="(max-width: 479px) 94vw, (max-width: 767px) 95vw, (max-width: 991px) 340px, (max-width: 1279px) 400px, (max-width: 1439px) 495px, 533px"
      srcSet={`
        https://jovoindia.com/images/portfolio-images/Tyd-5.jpg 500w,
        https://jovoindia.com/images/portfolio-images/Tyd-5.jpg 800w,
        https://jovoindia.com/images/portfolio-images/Tyd-5.jpg 1060w
      `}
      className="animated-image about-grid-image new-jovo-about-image img-fluid"
      style={{
        transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
        transformStyle: "preserve-3d",
      }}
    />
  </div>

  <div className="col-12 col-md-6 text-center py-5 px-3 px-md-5">
    <img
      src={AboutJovo3}
      alt="jovo3"
      loading="lazy"
      sizes="(max-width: 479px) 94vw, (max-width: 767px) 95vw, (max-width: 991px) 340px, (max-width: 1279px) 400px, (max-width: 1439px) 495px, 533px"
      srcSet={`
        https://jovoindia.com/images/jovo-about-3.jpg 500w,
        https://jovoindia.com/images/jovo-about-3.jpg 800w,
        https://jovoindia.com/images/jovo-about-3.jpg 1072w
      `}
      className="animated-image1 about-grid-image img-fluid rounded"
      style={{
        transformStyle: "preserve-3d",
        maxHeight: "600px",
        objectFit: "cover",
      }}
    />

    <p className="py-5 px-2 px-md-0 p-3"style={{textAlign:"justify"}}>
      JÖVÖ INDIA embodies a fusion of exceptional lighting design, innovation,
      and dedication to creating transformative spaces that illuminate life's moments and stand the test of time.
    </p>
  </div>
</div>
    {/* Vision & Mission */}
        <div className="my-5 " >
          <div className=" container d-flex align-items-center mb-4" >
            <img
              src="https://jovoindia.com/images/674bf99cab62ac5800486c20_Subtitle%20Icon.svg"
              alt="icon"
              className="me-2"
              style={{ width: "24px", height: "24px" }}
            />
            <h5 className="mb-0 me-2">
              <span className="px-2 py-1 text-dark">Vision & Mission</span>
            </h5>
            <div className="flex-grow-1 border-bottom ms-3"></div>
          </div>

          <h2 className="fw-light mb-5" >
            "Coming together is a beginning, staying together is progress, and
            working together is success." – Henry Ford
          </h2>

          <div className="row g-4 align-items-center" style={{fontFamily:"' Montserrat Alternates', sans-serif;"}}>
            {/* Vision Image */}
            <div className="col-md-6">
              <motion.img
                src={Aboutjovo4}
                alt="vision"
                className="img-fluid rounded shadow"
                initial={{
                  opacity: 0,
                  x: -100,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                style={{width:"500px", height:"800px"}}    
              />
            </div>

            {/* Vision & Mission Text */}
            <div className="col-md-6 py-3">
              <div className="mb-5">
                <img
                  src="https://jovoindia.com/images/icons/vision%20icon.png"
                  alt="vision icon"
                  className="img-fluid mb-3 "
                  style={{ width: "60px" }}
                />
                <h3 className="fw-bold ts-5">Vision</h3>
                <ul className="fs-5 mt-4">
                  <li>Top Architectural Lighting Companies by 2030 in INDIA.</li>
                  <li>Listed company by 2033.</li>
                </ul>
              </div>

              <div>
                <img
                  src="https://jovoindia.com/images/icons/mission%20icon.png"
                  alt="mission icon"
                  className="img-fluid mb-3 "
                  style={{ width: "60px" }}
                />
                <h3 className="fw-bold">Mission</h3>
                <h5 className="mt-3 fs-4">Craft Cutting-Edge Solutions:</h5>
                <ul >
                  <li>
                    Focus on enhancing consumer experiences while maintaining
                    superior quality standards.
                  </li>
                  <li>
                    Drive sustainability by adopting environmentally responsible
                    practices.
                  </li>
                </ul>
                <h5 className="mt-4 m-3 ">Foster a Win-Win-Win Ecosystem:</h5>
                <ul>
                  <li>Win for customers through value and satisfaction.</li>
                  <li>Win for team members through growth and recognition.</li>
                  <li>
                    Win for business owners through profitability and brand
                    growth.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Founders Section */}
        <div className="my-2">
          <h1>Our Founders</h1>
          <div className="row g-4 py-5 ">
            {/* Founder Cards */}
            <div className="col-md-4 text-center ">
              <img
                src="https://jovoindia.com/images/mahesh.webp"
                alt="mahesh"
                className="img-fluid rounded shadow mb-3"
              />
              <h3 className="fw-semibold text-start" style={{fontSize:"20px"}}>Mr. Mahesh Surasgar</h3>
              <h5 className="fw-semi text-start" style={{fontSize:"18px"}}>Founder & Managing Director</h5>
              <p className=" mb-4 py-3" style={{textAlign: "justify"}}>
Mr. Mahesh Surasgar, Founder of JÖVÖ India, is a visionary entrepreneur with over a decade of expertise in architectural LED lighting. With a background in Advanced Strategic Management from IIM Lucknow, he has successfully led JÖVÖ India to become a pioneer in innovative lighting solutions, renowned for quality, customization, and design excellence. Alongside his strategic leadership, Mr. Surasgar also possesses deep technical expertise in architectural and commercial lighting design, LED system integration, smart lighting technologies, and energy-efficient solutions.
              </p>
            </div>

            <div className="col-md-4 text-center ">
              <img
                src="https://jovoindia.com/images/shashirekha.webp"
                alt="shashirekha"
                className="img-fluid rounded shadow mb-3"
              />
              <h5 className="fw-semibold text-md-start">Dr. Shashirekha Surasgar</h5>
              <h5  className="text-md-startfw-semi"style={{textAlign:"justify",fontSize:"18px"}}>Co-Founder| MBBS, MD | Diabetologist | Researcher</h5>
              <p className=" py-0align-items-center" style={{textAlign:"justify"}}>
              Dr. Shashirekha Surasgar is a renowned
                    Diabetologist and an
                    integral partner at JÖVÖ India. With a
                    deep understanding of both medical science and the impact of lighting on human health, she bridges
                    the gap between design and well-being. Dr. Shashirekha’s research focuses on the effects of lighting
                    on circadian rhythms and its influence on overall health, particularly in relation to diabetes and
                    lifestyle
                    management. Her expertise drives JÖVÖ India’s commitment to creating lighting solutions that not
                    only enhance
                    spaces but also promote well-being through scientifically-backed designs.              </p>
            </div>

            <div className="col-md-4 text-center">
              <img
                src="https://jovoindia.com/images/vishnukumar.png"
                alt="vishnu"
                className="img-fluid rounded shadow mb-3"
              />
              <h3 className="text-start fw-semibold">Mr. Vishnu Kumar</h3>
              <h5  className="text-md-start "style={{textAlign:"justify" ,fontSize:"18px"}}>Co-Founder- JÖVÖ Automation LLP</h5>
              <p className=" py-0 align-items-center " style={{textAlign:"justify"}}>
                Vishnu Kumar brings a robust 13 years of professional experience across technical domains, IT, and networking infrastructure. His
                  expertise encompasses: <br/>  Technical & IT Leadership: Extensive hands-on experience in system servers, networking, and IT
                  operations. <br/> Network Structure Architecture: Skilled in designing and implementing efficient network architectures
                  for diverse business needs. <br/>Server Room Preparation: Proficient in planning, setting up, and maintaining server rooms to ensure
                  optimal performance and security. <br/>
                  

                  
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="my-5">
          <div className="d-flex align-items-center mb-4">
            <img
              src="https://jovoindia.com/images/674bf99cab62ac5800486c20_Subtitle%20Icon.svg"
              alt="jovo"
              className="me-2"
              style={{ width: "24px", height: "24px" }}
            />
            <h5 className="mb-0 me-2">
              <span className="px-2 py-1 text-dark">Our Team</span>
            </h5>
            <div className="flex-grow-1 border-bottom ms-3"></div>
          </div>

          <div className="row  m-3 g-2 py-6">
            <div className="col-md-4 text-center">
              <img
                src="https://jovoindia.com/images/Swathi1.jpeg"
                alt="team1"
                className="img-fluid rounded shadow mb-3"
                style={{ height: "400px", objectFit: "cover" }}
              />
              <h3 className="text-md-middle">Swathi</h3>
              <h5>Customer Success Executive</h5>
            </div>
            <div className="col-md-4 text-center pe-3">
              <img
                src="https://jovoindia.com/images/Lalitha.jpg"
                alt="team2"
                className="img-fluid rounded shadow mb-3"
                style={{ height: "400px", objectFit: "cover" }}
              />
              <h3 className="">Lalitha</h3>
              <h5>Sr. Account Executive</h5>
            </div>
          </div>

          <div className="text-center my-5">
            <img
              src={Teamimage}
              alt="team"
              className="img-fluid rounded shadow"
            />
          </div>    
              </div>


       <section
  data-w-id="30d90e90-d96e-791b-f386-08698953ed7d"
  className="video-cta-section"
  style={{ width: "100%", padding: "0", margin: "0" }} // Optional inline style to reinforce fluid behavior
>
  <div
    className="video-cta-wrapper container-fluid" // Add your full-width styling class here
    data-w-id="30d90e90-d96e-791b-f386-08698953ed7d"
  >
    <Link
      to="/Aboutus"
      className="video-cta-lightbox w-inline-block w-lightbox"
      style={{
        transform:
          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
        transformStyle: "preserve-3d",
        opacity: 1,
      }}
      onClick={handleOpen}
      aria-label="open lightbox"
      aria-haspopup="dialog"
    >
      <div
        className="video-icon-circle"
        style={{
          transform:
            "translate3d(0px, 0px, 0px) scale3d(1.19462, 1.19462, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          transformStyle: "preserve-3d",
          opacity: 0.51344,
          willChange: "opacity transform",
        }}
      >
        <div className="video-icon-circle-border circle-two">
          <div className="video-icon-circle-border circle-one"></div>
        </div>
      </div>
      <div className="video-icon-wrapper">
        <div className="video-icon w-embed">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="25"
            viewBox="0 0 17 23"
            fill="none"
          >
            <path
              d="M15.6345 9.85726C16.7801 10.6528 16.7801 12.3472 15.6345 13.1427L3.14079 21.8189C1.81458 22.7399 8.02847e-08 21.7908 1.38962e-07 20.1762L7.69562e-07 2.82385C8.28239e-07 1.20921 1.81458 0.260123 3.14079 1.18111L15.6345 9.85726Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </Link>
  </div>

  <div className="video-cta-bg"></div>
  <div className="video-cta-bg-start-block">
    <div className="video-cta-bg scroll-start-bg"></div>
  </div>

  {isOpen && (
    <div className="video-lightbox-overlay" onClick={handleClose}>
      <div className="video-lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="video-lightbox-close" onClick={handleClose}>
          &times;
        </button>
        <iframe
          width="940"
          height="528"
          src="https://www.youtube.com/embed/LZFoxNm1JjM?autoplay=1"
          title="YouTube video"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )}
</section>
<section className="testimonial-section py-5">
  <div className="container-fluid px-0">
    {/* Header Section */}
    <div className="my-3 px-0">
      <div className="d-flex align-items-center mb-4 ps-0">
        <img
          src="https://jovoindia.com/images/674bf99cab62ac5800486c20_Subtitle%20Icon.svg"
          alt="icon"
          className="me-2"
          style={{ width: "24px", height: "24px" }}
        />
        <h5 className="mb-0 me-2">
          <span className="px-2 py-1 text-dark">Testimonial</span>
        </h5>
        <div className="flex-grow-1 border-bottom ms-3"></div>
      </div>
    </div>

    <h3 className="fw-semibold mb-4">What Our Clients Say</h3>

    {/* Testimonial Carousel */}
    <div
      id="testimonialCarousel"
      className="carousel slide position-relative"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className={`carousel-item${index === 0 ? " active" : ""}`}
          >
            <div className="row align-items-center mx-0">
              {/* Text Section */}
              <div className="col-md-7 px-0">
                <p
                  className="mb-3"
                  style={{ textAlign: "justify", textAlignLast: "left" }}
                >
                  {t.text}
                </p>
                <p className="fw-bold fs-5 mt-3 mb-0">{t.name}</p>
              </div>

              {/* Image Section */}
              <div className="col-md-5 d-flex justify-content-center justify-content-md-end">
                <img
                  src={t.image}
                  alt="testimonial"
                  className="img-fluid shadow-sm"
                  style={{
                    width: "180px",
                    height: "180px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="d-flex justify-content-center px-5 gap-3 mt-4">
      <button
        className="btn btn-light rounded-circle d-flex align-items-center justify-content-center"
        type="button"
        data-bs-target="#testimonialCarousel"
        data-bs-slide="prev"
        style={{ width: "50px", height: "50px" }}
      >
        <span aria-hidden="true">←</span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="btn btn-dark rounded-circle d-flex align-items-center justify-content-center"
        type="button"
        data-bs-target="#testimonialCarousel"
        data-bs-slide="next"
        style={{ width: "50px", height: "50px" }}
      >
        <span aria-hidden="true">→</span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</section>

 {/* <section className="testimonial-section py-5  ">
       <div className="container-fluid mt-3 "> 
        <div className="my-3 ">
          <div className="d-flex align-items-center mb-4 ps-0">
            <img
              src="https://jovoindia.com/images/674bf99cab62ac5800486c20_Subtitle%20Icon.svg"
              alt="icon"
              className="me-2"
              style={{ width: "24px", height: "24px" }}
            />
            <h5 className="mb-0 me-2">
              <span className="px-2 py-1 text-dark">Testimonial</span>
            </h5>
            <div className="flex-grow-1 border-bottom ms-3"></div>
          </div>
        </div>

        <h3 className="fw-semibold mb-4">What Our Clients Say</h3>

        <div
          id="testimonialCarousel"
          className="carousel slide position-relative d-flex align-items-center justify-content-center"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className={`carousel-item${index === 0 ? " active" : ""}`}
              >
                <div className="row align-items-center">
                  <div className="col-md-7">
                    <p
                      className="mb-3  "
                      style={{ textAlign: "justify", textAlignLast: "left" }}
                    >
                      {t.text}
                    </p>
                    <p className="fw-bold fs-5 mt-3">{t.name}</p>
                  </div>
                  <div className="col-md-5 d-flex justify-content-center justify-content-md-end">
                    <img
                      src={t.image}
                      alt="testimonial"
                      className="img-fluid  shadow-sm m-"
                      style={{
                        width: "180px",
                        height: "180px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
         
       </div> 
      
    </section> */}
     {/* <div className="d-flex justify-content-center px-5 gap-3 mb-4">
            <button
              className="btn btn-light rounded-circle d-flex align-items-center justify-content-center"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="prev"
              style={{ width: "50px", height: "50px" }}
            >
              <span aria-hidden="true">←</span>
              <span className="visually-hidden">Previous</span>
            </button>

            <button
              className="btn btn-dark rounded-circle d-flex align-items-center justify-content-center"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="next"
              style={{ width: "50px", height: "50px" }}
            >
              <span aria-hidden="true">→</span>
              <span className="visually-hidden">Next</span>
            </button>
          </div> */}

{/* <section className="testimonial-section py-5">
      <div className="container">
       
        <div className="my-3">
          <div className="d-flex align-items-center mb-4">
            <img
              src="https://jovoindia.com/images/674bf99cab62ac5800486c20_Subtitle%20Icon.svg"
              alt="icon"
              className="me-2"
              style={{ width: "24px", height: "24px" }}
            />
            <h5 className="mb-0 me-2">
              <span className="px-2 py-1 text-dark">Testimonial</span>
            </h5>
            <div className="flex-grow-1 border-bottom ms-3"></div>
          </div>
        </div>

   
        <h3 className="fw-semibold mb-4">What Our Clients Say</h3>

  
        <div
          id="testimonialCarousel"
          className="carousel slide position-relative  align-items-center justify-content-center"
          data-bs-ride="carousel" 
          
        >
          <div className="carousel-inner">
          
            <div className="carousel-item active">
              <div className="row align-items-center">
                <div className="col-md-7">
                  <p className=" mb-3  m-2" style={{textAlign:"justify",textAlignLast:"left"}}>
                  “JÖVÖ Lighting has been such a refreshing experience for us. We approached JÖVÖ Lighting for our YSDK meditation hall at Domlur, and their team visited us, discussed our requirements, and provided clear, forthright recommendations on what would work best. Quite professional! When we faced an issue with one of the units, they promptly came over and resolved it. Both sales and after-sales service reflected true professionalism. With regard to variety and selection, they offer a wide range of products, and since they have their own factory, customization is also possible—which is extremely helpful. We strongly recommend JÖVÖ Lighting for all lighting needs, especially in Bengaluru. Highly recommended!”
                  </p>
                  <p className="fw-bold fs-5 mt-3">Preedesh M</p>
                </div>
                <div className="col-md-5 d-flex justify-content-center justify-content-md-end">
                  <img
                    src={Testimonial}
                    alt="testimonial"
                    className="img-fluid rounded-circle border shadow-sm m-3"
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>


            <div className="carousel-item">
              <div className="row align-items-center">
                <div className="col-md-7">
                  <p className=" mb-3">
                    “I have been working with Mahesh for the past year, for both technical and decorative lighting requirements for my interior projects. His service and quality of products are top notch. Special mention to the variety and number of options he has. 100% would recommend him!”
                  </p>
                  <p className="fw-bold fs-5 mt-3">Anirudh Shashidhar</p>
                </div>
                <div className="col-md-5 d-flex justify-content-center justify-content-md-end">
                  <img
                    src={Testimonial}
                    alt="testimonial"
                    className="img-fluid rounded-circle border shadow-sm"
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>

        
            <div className="carousel-item">
              <div className="row align-items-center">
                <div className="col-md-7">
                  <p className="text-justify mb-3">
                    “Our new home is beautifully lit with JÖVÖ Lighting 😊. Thanks
                    to our architect for suggesting it—no doubt they’ve done
                    their best! We had multiple requirements, and they provided
                    the best options with ease.”
                  </p>
                  <p className="text-justify mb-3">
                    Swathi, with her excellent coordination, and Shadakshari,
                    the technician, did an amazing job 👏🏽. Thank you so much!!
                  </p>
                  <p className="fw-bold fs-5 mt-3">Bhagyashree Makam</p>
                </div>
                <div className="col-md-5 d-flex justify-content-center justify-content-md-end">
                  <img
                    src={Testimonial}
                    alt="testimonial"
                    className="img-fluid rounded-circle border shadow-sm"
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>

       
            <div className="carousel-item">
              <div className="row align-items-center">
                <div className="col-md-7">
                  <p className="text-justify mb-3">
                    “JÖVÖ Lighting truly lives up to its name—bright, beautiful,
                    and reliable! Their lights completely transformed my space,
                    creating a warm and modern glow. Highly recommended!!”
                  </p>
                  <p className="fw-bold fs-5 mt-3">Akash NS</p>
                </div>
                <div className="col-md-5 d-flex justify-content-center justify-content-md-end mt-3">
                  <img
                    src={Testimonial}
                    alt="testimonial"
                    className="img-fluid rounded-circle border shadow-sm"
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>

         
            <div className="carousel-item">
              <div className="row align-items-center">
                <div className="col-md-7">
                  <p className="text-justify mb-3 ms-1">
                    “JÖVÖ—the name itself means lighting, and true to its name,
                    JÖVÖ Lighting brings brilliance, elegance, and innovation
                    into every space it touches! 💡 Highly recommended! 🌟🌟🌟🌟🌟”
                  </p>
                  <p className="fw-bold fs-5 mt-3">DILEEP K</p>
                </div>
                <div className="col-md-5 d-flex justify-content-center justify-content-md-end">
                  <img
                    src={Testimonial}
                    alt="testimonial"
                    className="img-fluid rounded-circle border shadow-sm "
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          
          <div className="d-flex justify-content-center px-5 gap-3">
            <button
              className="btn btn-dark rounded-circle d-flex align-items-center justify-content-center"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="prev"
              style={{ width: "50px", height: "50px" }}
            >
              <span aria-hidden="true">←</span>
              <span className="visually-hidden">Previous</span>
            </button>

            <button
              className="btn btn-dark rounded-circle d-flex align-items-center justify-content-center"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="next"
              style={{ width: "50px", height: "50px" }}
            >
              <span aria-hidden="true">→</span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section> */}
 


      </div>
      
      <FooterBottom/>
    </>
  );
}
