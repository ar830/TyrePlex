import React from 'react';
import '../Style/BussinessInfo.css'; 
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

const BusinessInfo = () => {
  return (
    <div className="business-info-container">

      <div className='row'>
        <div className='col-md-8'>
      <div className="text-section">
        <h2>Shree Hemkunt Tyres and Services <span className="verified">Verified</span></h2>
        <p>Plot Number-09 Ground Floor CISF Campus Road, Ahinsa Khand-02 Indirapuram, Ghaziabad, Uttar Pradesh, 201014</p>
        <p>Open - Monday to Sunday: 10:00 AM to 8:00 PM</p>
        <button>Get Directions</button>
      </div>
      </div>
      
    

{/* //caurasals */}

     <div className='col-md-4'>
<MDBCarousel showControls showIndicators dark fade>
<MDBCarouselItem itemId={1}>
        <img src='images/ceat1.jpg' className='d-block w-100' alt='...' />
       
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src='images/ceat.jpg' className='d-block w-100' alt='...' />
       
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src='images/ceat.jpg' className='d-block w-100' alt='...' />
       
      </MDBCarouselItem>
    </MDBCarousel>
    </div>
    </div>
    </div>
  );
};

export default BusinessInfo;

