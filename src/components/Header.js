import React, { useEffect, useState } from 'react';
import './Header.css';

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
        <a href="#home" className="logo">L J</a>
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
