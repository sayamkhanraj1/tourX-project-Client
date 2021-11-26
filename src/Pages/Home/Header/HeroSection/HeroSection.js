import React from 'react';
import './HeroSection.css'

const HeroSection = () => {
         return (
                  <div className="row section-container">
                  <div className="col-md-6 d-flex justify-content-center  align-items-center">
                  <div className="container hero-text">
                  <h1>Amazing Tour <br /> In Madagascar</h1>
                  <h5>7 Days, 8 Night Tour</h5>
                  <button className="hero-btn">Book Now</button>
                  </div>
                  </div>
                  </div>
         );
};

export default HeroSection;