// components/Brands.js
import React from 'react';
import '../Style/Brands.css';

const brandIcons = {
    MRF: '/images/mrf.png',
    CEAT: '/images/ceaticon.png',
    Goodyear: '/images/goodyear.png',
    Apollo: '/images/apollo.jpeg',
    Bridgestone: '/images/bridgestone.png',
    'JK Tyre': '/images/jk-tyre.jpeg'
  };
  
  
const Brands = () => {
  const brands = Object.keys(brandIcons)

  return (
    <div className="brands-container">
      <div className="brands">
        {brands.map((brand, index) => (
          <div key={index} className="brand">
            <img src={brandIcons[brand]} alt={brand} className="brand-icon" />
            <span className="brand-name">{brand}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
