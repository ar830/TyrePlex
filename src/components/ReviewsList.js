
import React from 'react';
import Review from './Review';
import '../Style/Review.css';
import Brands from './Brands';
import Service from './Service';

const ReviewsList = () => {
  const reviews = [
    { name: 'Md Nasir', reviewText: 'Excellent service from start to finish. 100% satisfaction with the job...' },
    { name: 'Rohit Bhati', reviewText: 'Went for Tyre change. Ultimate service by shoppe boys...' },
    { name: 'Pradeep Kumar', reviewText: 'Best tyre shop in Indirapuram. Good dealing with customer...' },
  ];

  return (
    <>
      <div className='row'>
        <div className='col-md-4'>
          <div className="reviews-container">
            <h3 className="reviews-header">Recent Happy Customers</h3>
            <div className="reviews-list">
              {reviews.map((review, index) => (
                <Review key={index} name={review.name} reviewText={review.reviewText} />
              ))}
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <Brands />
        </div>

        <div className='col-md-4'>
          <Service />
        </div>
      </div>
    </>
  );
};

export default ReviewsList;

