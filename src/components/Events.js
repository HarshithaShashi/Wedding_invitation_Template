import React from 'react';
import './Events.css';

const Events = () => {
  return (
    <section className="events" id="events">
      <h2>Wedding Events</h2>
      <div className="event">
        <h3>Ceremony</h3>
        <p>Details about the ceremony...</p>
      </div>
      <div className="event">
        <h3>Reception</h3>
        <p>Details about the reception...</p>
      </div>
    </section>
  );
};

export default Events;
