import { useState } from "react";
import "./Faq.css";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is Jövö India?",
      answer: `Jövö India is a premium lighting and automation solutions
      provider based in Bengaluru, Karnataka. With over 12+ years of expertise,
      we specialize in custom and architectural lighting, home automation, AV,
      and security systems. We are India’s first lighting company to offer
      up to 7-year warranty on our products.`,
    },
    {
      question: "What services does Jövö India offer?",
      answer: (
        <>
          <p>
            We offer a comprehensive range of services that cater to both
            residential and commercial spaces:
          </p>
          <ul>
            <li>Custom &amp; architectural lighting</li>
            <li>Home automation systems</li>
            <li>AV (Audio-Visual) integration</li>
            <li>Security &amp; surveillance systems</li>
            <li>Lamps, shades, and premium lighting accessories</li>
          </ul>
        </>
      ),
    },
    {
      question: "What makes Jövö India different from other lighting companies?",
      answer: `At Jövö India, we stand out with an unmatched offer up to 7-year
      warranty—making us the first and only lighting company in India to offer
      such long-term reliability. Backed by over two decades of expertise, we
      provide end-to-end solutions from consultation to installation and
      after-sales support.`,
    },
    {
      question: "What does the offer up to 7-year warranty cover?",
      answer: `Our industry-leading warranty covers manufacturing defects,
      product performance issues, and technical malfunctions. This warranty
      applies to our specific lighting products and ensures peace of mind with
      every purchase. Terms and conditions apply.`,
    },
    {
      question: "Do you offer services outside Bengaluru?",
      answer: `Yes, while we are headquartered in Bengaluru, our services extend
      pan India. We work with clients nationwide, regardless of location or
      project scale.`,
    },
  ];

  return (
    <section className="section-gap-bottom  py-3">
      <div className="container-default">
        <div className="faq-wrapper">
          
          <div className="section-top text-center mb-4 fs-5">
            <div className="d-flex align-items-center justify-content-center mb-2 mt-3">
              <img
                src="https://jovoindia.com/images/674bf99cab62ac5800486c20_Subtitle%20Icon.svg"
                alt="icon"
                style={{ width: "24px", height: "24px", marginRight: "8px" }}
              />
              <h5 className="subtitle mb-0">FAQs</h5>
            </div>
           
          </div>
          <div className="d-flex  justify-content-center py-4 ms-2">
            <h3 className="fw-semi display-3 fs-2">Frequently Asked Questions</h3></div>

        
          <div className="faq-items-wrapper ">
            {faqData.map((item, index) => (
              <div key={index} className="faq-item">
                <div
                  className="faq-toggle-wrapper"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="faq-title ">{item.question}</h3>
                  <div className="faq-icon-block">
                    <div className="faq-icon-line-horizontal"></div>
                   <div
  className="faq-icon-line-vertical"
  style={{
    transform: activeIndex === index ? "scaleY(0)" : "scaleY(1)",
  }}
></div>

                  </div>
                </div>

                <div
                  className={`faq-content-wrapper ${
                    activeIndex === index ? "open" : ""
                  }`}
                >
                  <div className="faq-content">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
