import React, { useState } from 'react';
import './Events.css';
import image1 from '../assets/images/recept.jpg';
import image2 from '../assets/images/party.jpg';
import image3 from '../assets/images/Picture1.jpg';

const Events = () => {
  const [showMap, setShowMap] = useState(false); // State to toggle map visibility

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  return (
    <section className="events" id="events">
      <div>
        <img src={image3} height={100} alt="Wedding Logo" />
      </div>
      <h2 className="events-heading">Wedding Events</h2>

      {/* The Reception Section */}
      <div className="event-card">
        <div className="event-image">
          <img src={image1} alt="The Reception" />
        </div>
        <div className="event-details">
          <h3>The Reception</h3>
          <div className="event-info">
            <p>
              <i className="fas fa-map-marker-alt"></i> 32 Big Bro Road, Chanpai, London.
            </p>
            <p>
              <i className="fas fa-calendar-alt"></i> Nov 25, 2023 | 9 AM - 5 PM
            </p>
            <p>
              When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <button onClick={toggleMap} className="location-button">See location</button>

            
            {/* Conditionally render the map iframe */}
            {showMap && (
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d491528.57860934566!2d-81.46981246390617!3d27.607308299895166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88de0e2c4771994d%3A0x8bcdb254a90cd2a8!2sMelbourne%2C%20FL%2C%20USA!5e0!3m2!1sen!2sin!4v1726331063257!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* The Wedding Party Section */}
      <div className="event-card">
        <div className="event-image">
          <img src={image2} alt="Wedding Party" />
        </div>
        <div className="event-details">
          <h3>Wedding Party</h3>
          <div className="event-info">
            <p>
              <i className="fas fa-map-marker-alt"></i> 32 Big Bro Road, Chanpai, London.
            </p>
            <p>
              <i className="fas fa-calendar-alt"></i> Nov 25, 2023 | 7 PM - 12 AM
            </p>
            <p>
              The wedding party celebration will be a joyous event to remember! Join us for an unforgettable evening of dining, dancing, and fun!
            </p>
            <button onClick={toggleMap} className="location-button">See location</button>

            
            {/* Conditionally render the map iframe */}
            {showMap && (
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d491528.57860934566!2d-81.46981246390617!3d27.607308299895166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88de0e2c4771994d%3A0x8bcdb254a90cd2a8!2sMelbourne%2C%20FL%2C%20USA!5e0!3m2!1sen!2sin!4v1726331063257!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
