import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import Header from './components/Header';
import AboutUs from './components/Aboutus';
import Events from './components/Events';
import Footer from './components/Footer';
import StorySection from './components/StorySection';
import CountDown from './components/CountDown';

function App() {
  return (
    <div className="App">
      
      <HeroSection />
    
    
      <Header />
     
      <AboutUs />
      <CountDown/>
      <StorySection/>
     
      <Events />
      
      <Footer /> 
    </div>
  );
}

export default App;
