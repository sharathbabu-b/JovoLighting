// // import React from 'react';
//  import "./testmonials.css"
//  // components/TestimonialSection.jsx
// import React, { useEffect } from 'react';
// import Slider from 'react-slick';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// // import './TestimonialSection.css';
// // import testimonialImage from '../assets/testimonial-icon.jpg';

// const PrevArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: 'block',
//         left: '10px',
//         zIndex: 1,
//         background: 'rgba(0,0,0,0.5)',
//         borderRadius: '50%',
//         padding: '8px',
//         cursor: 'pointer',
//       }}
//       onClick={onClick}
//       aria-label="Previous slide"
//     >
//       <span style={{ color: 'white', fontSize: '18px' }}>{'‹'}</span>
//     </div>
//   );
// };

// const NextArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: 'block',
//         right: '10px',
//         zIndex: 1,
//         background: 'rgba(0,0,0,0.5)',
//         borderRadius: '50%',
//         padding: '8px',
//         cursor: 'pointer',
//       }}
//       onClick={onClick}
//       aria-label="Next slide"
//     >
//       <span style={{ color: 'white', fontSize: '18px' }}>{'›'}</span>
//     </div>
//   );
// };

// const TestimonialSection = () => {
//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 6000,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//   };

//   const testimonials = [
//     {
//       id: 1,
//       text: `“JÖVÖ Lighting has been such a refreshing experience for us. We approached them
//              for our YSDK meditation hall at Domlur, and their team discussed our requirements
//              and gave professional suggestions. When we faced an issue, they resolved it
//              quickly. Their product range and customizability are impressive. Highly recommended!”`,
//       author: "Preedesh M",
//       image: "https://jovoindia.com/images/testimonial-icon.jpg",
//     },
//     {
//       id: 2,
//       text: `“The team at JÖVÖ Lighting was professional and efficient. They customized the lighting
//              exactly how we needed it for our office space. The after-sales service was quick and reliable.
//              Would highly recommend their services!”`,
//       author: "Anita R",
//       image: "https://jovoindia.com/images/testimonial-icon.jpg"
//     },
//     {
//       id: 3,
//       text: `“I was impressed with the quality and variety of products offered by JÖVÖ Lighting.
//              Their team took time to understand our needs and delivered a beautiful lighting setup
//              for our restaurant. Excellent service throughout.”`,
//       author: "Suresh K",
//       image: testimonialImage,
//     },
//   ];

//   return (
//     <section className="testimonial-section">
//       <div className="section-gap">
//         <div className="container-default">
//           <div className="testimonial-wrapper">
//             <div className="section-top">
//               <div className="subtitle-wrapper" data-aos="fade-up">
//                 <div className="subtitle-text-wrapper">
//                   <p className="subtitle">Testimonial</p>
//                 </div>
//                 <div className="subtitle-border"></div>
//               </div>
//               <div className="section-top-content-wrapper" data-aos="fade-up" data-aos-delay="100">
//                 <h2 className="section-title">What Our Clients Say</h2>
//               </div>
//             </div>

//             <div className="service-cards-wrapper" data-aos="fade-up" data-aos-delay="200">
//               <Slider {...settings}>
//                 {testimonials.map(({ id, text, author, image }) => (
//                   <div className="testimonial-slider-item" key={id}>
//                     <div className="testimonial-slider-item-wrapper">
//                       <div className="testimonial-content-wrapper">
//                         <div className="testimonial-text-wrapper">
//                           <p className="testimonial-text text-justify">{text}</p>
//                         </div>
//                         <div className="testimonial-author-info">
//                           <p className="text-large testimonial-author-name">{author}</p>
//                         </div>
//                       </div>
//                       <div className="testimonial-image-wrapper">
//                         <img src="https://jovoindia.com/images/testimonial-icon.jpg" alt={`Testimonial from ${author}`} className="testimonial-image" />
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </Slider>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section> )}

// // import Slider from 'react-slick';
// // import 'slick-carousel/slick/slick.css';
// // import 'slick-carousel/slick/slick-theme.css';
// // import './TestimonialSection.css'; // Optional for your custom styles

// // const testimonials = [
// //   {
// //     text: `“JÖVÖ Lighting has been such a refreshing experience for us... Highly recommended!”`,
// //     author: 'Preedesh M',
// //   },
// //   {
// //     text: `“I have been working with Mahesh for the past year... 100% would recommend him!!”`,
// //     author: 'Anirudh Shashidhar',
// //   },
// //   {
// //     text: `“Our new home is beautifully lit with JÖVÖ Lighting 😊... Thank you so much!!”`,
// //     author: 'Bhagyashree Makam',
// //   },
// //   {
// //     text: `“JÖVÖ Lighting truly lives up to its name... Highly recommended!!”`,
// //     author: 'Akash NS',
// //   },
// //   {
// //     text: `“JÖVÖ—the name itself means lighting... 🌟🌟🌟🌟🌟”`,
// //     author: 'DILEEP K',
// //   },
// //   {
// //     text: `“I couldn’t be happier with the lighting solutions... keep growing and glowing!!”`,
// //     author: 'Rohith Ragav',
// //   },
// //   {
// //     text: `“Mahesh has been exceptionally kind... his invaluable suggestions.”`,
// //     author: 'Vaishnavi G',
// //   },
// //   {
// //     text: `“Excellent quality and stunning designs! My home has never looked better.”`,
// //     author: 'Mohan n s',
// //   },
// //   {
// //     text: `“Great experience with JÖVÖ!... thanks to your dedicated team!”`,
// //     author: 'Akshay Bhandari',
// //   },
// //   {
// //     text: `“I highly recommend JÖVÖ Lighting... looking to brighten up their home or office.”`,
// //     author: 'Suraj C',
// //   },
// //   {
// //     text: `“Super impressed with JÖVÖ Lighting!... added a whole new vibe to our interiors!”`,
// //     author: 'BABU. K.C',
// //   },
// //   {
// //     text: `“They do absolutely stunning job... recommend all NRIs.”`,
// //     author: 'A B',
// //   },
// //   {
// //     text: `“Automated lighting system... a game-changer. Thank you JÖVÖ team”`,
// //     author: 'Rupesh Kumar',
// //   },
// // ];

// // const settings = {
// //   dots: true,
// //   arrows: true,
// //   infinite: true,
// //   speed: 500,
// //   slidesToShow: 1,
// //   slidesToScroll: 1,
// //   autoplay: false,
// //   easing: 'ease-in-out',
// // };

// // const TestimonialSection = () => {
// //   return (
// //     <section className="testimonial-section">
// //       <div className="section-gap">
// //         <div className="container-default w-container">
// //           <div className="testimonial-wrapper">
// //             <div className="section-top">
// //               <div className="subtitle-wrapper">
// //                 <div className="subtitle-text-wrapper">
// //                   <p className="subtitle">Testimonial</p>
// //                 </div>
// //                 <div className="subtitle-border"></div>
// //               </div>
// //               <div className="section-top-content-wrapper">
// //                 <h2 className="section-title our-services-title">What Our Clients Say</h2>
// //               </div>
// //             </div>

// //             <div className="service-cards-wrapper">
// //               <Slider {...settings}>
// //                 {testimonials.map((item, index) => (
// //                   <div className="testimonial-slider-item" key={index}>
// //                     <div className="testimonial-slider-item-wrapper">
// //                       <div className="testimonial-content-wrapper">
// //                         <div className="testimonial-text-wrapper">
// //                           <p className="testimonial-text text-justify">{item.text}</p>
// //                         </div>
// //                         <div className="testimonial-author-info">
// //                           <p className="text-large testimonial-author-name">{item.author}</p>
// //                         </div>
// //                       </div>
// //                       <div className="testimonial-image-wrapper">
// //                         <img
// //                           src="images/testimonial-icon.jpg"
// //                           alt="Testimonial"
// //                           className="testimonial-image"
// //                           loading="lazy"
// //                         />
// //                       </div>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </Slider>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default TestimonialSection;
