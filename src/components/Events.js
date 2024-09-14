import React from 'react';
import './Events.css';
import image1 from '../assets/images/recept.jpg';
import image2 from '../assets/images/party.jpg';
import image3 from '../assets/images/Picture1.jpg';
import { px } from 'framer-motion';

const Events = () => {
  return (
    <section className="events" id="events">
      <div>
        <img src={image3} height={100}/>
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
            <a href="#" className="location-link">See location</a>
          </div>
        </div>
      </div>

      {/* The Wedding Party Section */}
      <div className="event-card">
        
        <div className="event-image">
          <img src={image2}alt="Wedding Party" />
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
            <a href="#" className="location-link">See location</a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Events;
