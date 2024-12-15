import React from 'react';
import '../styles/HeroBanner.css';
import heroBanner from '../assets/images/hero-banner1.jpeg';


const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <div className="hero-content">
        <h1>Rent Gadgets Effortlessly</h1>
        <p>Explore a wide variety of gadgets for your needs—affordable, reliable, and fast!</p>
        <button className="cta-btn">Explore Rentals</button>
      </div>
      <img
       
        src={heroBanner}
        alt="Gadget Rentals"
        className="hero-image"
      />
      
     
    </section>
  );
};

export default HeroBanner;
