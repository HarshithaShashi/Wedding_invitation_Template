import React from 'react';
import './AboutUs.css';
import images from "../assets/images/bride.jpg";
import image from "../assets/images/groom.jpg";

const AboutUs = () => {
  return (
    <section className="about-us" id="about">
      <div className="about-container">
        {/* Groom Section */}
        <div className="about-row groom-row">
          <div className="about-image groom-image">
            <img src= {image}alt="The Groom" />
          </div>
          <div className="about-info groom-info">
            <h3>The Groom</h3>
            <p>
            Hi I am suntina , dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
            </p>
            <h4 className="groom-signature">— Suntina</h4>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-pinterest"></i></a>
              <a href="#"><i className="fab fa-google-plus"></i></a>
            </div>
          </div>
        </div>

        {/* Bride Section */}
        <div className="about-row bride-row">
        <div className="about-info bride-info">
            <h3>The Bride</h3>
            <p>
            Hi I am suntina , dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
            </p>
            <h4 className="bride-signature">— Lorem Ipsum</h4>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-pinterest"></i></a>
              <a href="#"><i className="fab fa-google-plus"></i></a>
            </div>
          </div>
          <div className="about-image bride-image">
            <img src ={images} alt="The Bride" />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
