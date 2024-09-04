import React from 'react';
import '../Style/TwoImages.css'; 

const TwoImages = () => {
  return (
    <div className="services-container">
      <h2 className="header">Services offered by this dealer</h2>
      <div className="images-box">
        <div className="image-wrapper">
          <img src="/images/img1.webp" alt="Wheel Balancing" className="image" />
          <div className="text-overlay">
            <span className="image-text">Wheel Balancing</span>
          </div>
          <button className="book-now-button">Book Now</button>
        </div>
        <div className="image-wrapper">
          <img src="/images/wheel-alignment.webp" alt="Wheel Alignment" className="image" />
          <div className="text-overlay">
            <span className="image-text">Wheel Alignment</span>
          </div>
          <button className="book-now-button">Book Now</button>
        </div>
    
      </div>
    </div>
  );
};

export default TwoImages;
