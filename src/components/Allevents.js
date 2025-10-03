import React from 'react';
import './EventGallery.css'; 

const eventImages = [
 "https://jovoindia.com/images/events/event-20.jpg",
" https://jovoindia.com/images/events/event-32.jpg"
];

const EventGallery = () => {
  return (
    <section className="jovo-event-images">
      <div className="container-default">
        <h2 id="category-title" style={{ marginBottom: '20px' }}>All Events</h2>
        <div className="event-grid">
          {eventImages.map((filename, index) => (
            <div key={index} className="event-item" data-category="Residencial">
              <img
                src={filename.eventImages}
                alt="Architectural Design"
                className="event-image-grid"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventGallery;
