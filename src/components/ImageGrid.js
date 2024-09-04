import React from 'react';
import '../Style/ImageGrid.css';
import { Row, Col, Button } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import image from "../../src/image/img_main.webp";

const ImageGrid = () => {

  const arr = [
    { src: image, price: 'Rs. 100', label:'Offer Available' },
    { src: image, price: 'Rs. 200' , label:'Offer Available'  },
    { src: image, price: 'Rs. 100'  , label:'Offer Available' },
    { src: image, price: 'Rs. 100' , label:'Offer Available'  },
    { src: image, price: 'Rs. 100' , label:'Offer Available'  },
    { src: image, price: 'Rs. 100' , label:'Offer Available'  },
  ];

  return (
    <>
      <div className='image-grid-container'>
        <Row>
          {arr.map((item, index) => (
            <Col md={4} key={`${index}_img`}>
              <div className="img1" style={{backgroundImage: `url(${item.src})`}}>{item.price} {item.label}</div>
              {/* <img key={`${index}_img`} src={item.src} className="simple-image" alt={`Image ${index}`} /> */}
            </Col>
            
          ))}
        </Row>
        <div>
          <Badge bg="secondary" as={Button}>
            View More
          </Badge>
        </div>
        <div className='text'>
          <h1>Home / Tyre Dealers / Tyre Dealers Ghaziabad / SHREE HEMKUNT TYRES AND SERVICES</h1>
        </div>
      </div>
    </>
  );
};

export default ImageGrid;
