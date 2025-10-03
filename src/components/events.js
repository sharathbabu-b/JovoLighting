import eventVideo from "../assets/event-video.mp4";
import event2 from "../assets/event-2.mp4";
import Lightingnavbar from "../components/Lightingnavbar";
import "./event.css";
import { useState } from "react";
import Footerbottom from "../components/Footerbottom";

const eventImages = [
  "https://jovoindia.com/images/events/event-20.jpg",
  "https://jovoindia.com/images/events/event-32.jpg",
  "https://jovoindia.com/images/events/event-10.jpg",
  "https://jovoindia.com/images/events/event-7.jpg",
  "https://jovoindia.com/images/events/event-26.jpg",
  "https://jovoindia.com/images/events/event-27.jpg",
  "https://jovoindia.com/images/events/event-23.jpg",
  "https://jovoindia.com/images/events/event-2.jpg",
  "https://jovoindia.com/images/events/event-5.jpg",
  "https://jovoindia.com/images/events/event-28.jpg",
  "https://jovoindia.com/images/events/event-6.jpg",
  "https://jovoindia.com/images/events/event-30.jpg",
  "https://jovoindia.com/images/events/event-16.jpg", // ✅ fixed: no leading space
  "https://jovoindia.com/images/events/event-33.jpg",
];

const ITEM_TO_SHOW = 4;

export default function Event() {
  const [visibleCount, setVisibleCount] = useState(ITEM_TO_SHOW);

  const handleViewMore = () => {
    setVisibleCount((prevCount) => prevCount + ITEM_TO_SHOW);
  };

  const isAllVisible = visibleCount >= eventImages.length;

  return (
    <>
      <Lightingnavbar />

      {/* Hero Section */}
      <section className="event-section position-relative d-flex justify-content-center align-items-center">
        <video
          className="video-background"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={eventVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="gradient-overlay position-absolute w-100 h-100"></div>

        <div className="overlay-text text-white text-center mb-0px-3">
          <h1 className="display-4 fw-semibold py-4">Experience the Brilliance</h1>
        </div>
      </section>

      {/* Video Section */}
      <section className="event-section-home-v3 bg-black py-1">
        <div className="container">
          <div className="row g-5">
            <div className="col-12 col-md-6 position-relative">
              <div className="video-wrapper">
                <video
                  className="w-100 h-100 object-fit-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={event2} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="video-gradient"></div>
                <div className="video-overlay-text text-center text-white"></div>
              </div>
            </div>

            <div className="col-12 col-md-6 position-relative mt-5">
              <div className="video-wrapper">
                <video
                  className="w-100 h-100 object-fit-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={eventVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="video-gradient"></div>
                <div className="video-overlay-text text-center"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Gallery */}
      <section className="position-relative bg-black text-light justify-content-center py-5">
        <div>
          <h1 className="ms-5 mb-3">All Events</h1>
          <div className="container my-5">
            <div className="row text-center py-5">
              {eventImages.slice(0, visibleCount).map((imgUrl, index) => (
                <div className="col-md-3 mb-5" key={index}>
                  <img
                    src={imgUrl}
                    alt={`event-${index}`}
                    className="img-fluid"
                    style={{
                      height: "500px",
                      width: "530px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              ))}
            </div>

            {!isAllVisible && (
              <div className="text-center">
                <button
                  className="btn border border-light text-light text-center bg-transparent rounded-pill py-3 px-4"
                  onClick={handleViewMore}
                >
                  View More
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footerbottom />
    </>
  );
}
