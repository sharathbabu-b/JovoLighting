import intropage from "../assets/home-banner-1.mp4";
import "./intropage.css"

export default function Homebanner() {
  return (
    <section className="position-relative w-100 vh-100 overflow-hidden">
      {/* Background Video */}
      <video
        className="position-absolute top-0 start-0 w-100 h-100"
        autoPlay
        muted
        loop
        playsInline
        style={{ objectFit: "cover" }}
      >
        <source src={intropage} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div
        className=" background-image position-absolute top-0 start-0 w-100 h-100"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0, 0, 0, 0.7))",
          zIndex: 1,
        }}
      ></div>

      {/* Centered Text */}
      <div className="position-absolute top-50 start-50 translate-middle text-center text-white z-2 px-3">
        <h1 className="dispaly-1 gradient-heading mg-bottom-32px padding-bottom m-20">
          Innovating Spaces with Smart Lighting
        </h1>
      </div>
    </section>
  );
}
