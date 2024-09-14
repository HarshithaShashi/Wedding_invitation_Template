import React, { useEffect, useState } from 'react';
import './Header.css';
import image1 from '../assets/images/Picture3.jpg';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > window.innerHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={isSticky ? 'header sticky' : 'header'}>
      <nav className="navbar">
        <a href="#home" className="logo">
          <span className="logo-left">L</span>
          <img src={image1} height={38} alt="Logo Image" className="logo-image" />
          <span className="logo-right">S</span>
        </a>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Couple</a></li>
          <li><a href="#Story">Story</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
  
};  

export default Header;
