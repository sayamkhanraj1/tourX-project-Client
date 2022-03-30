import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
         const [reviews, setReviews] = useState([]);

         useEffect(()=>{
                  fetch('https://fast-badlands-89453.herokuapp.com/review')
                  .then(res => res.json())
                  .then(data => setReviews(data))
         },[])
         return (
                  <div>
                            <div>
                  <div className="container my-5">
                  <div className="achievement-text">
                  <h5>Our Traveller Say</h5>
                  <h2>What Oue Traveller Say <br /> About Us</h2>
                  </div>
                  <div className="row">
                  {
                           reviews.map(review => <Review
                                    key={review.key}
                                    review={review}
                                     ></Review>)
                  }
                  </div>
                  </div>
                  </div>
                  </div>
         );
};

export default Reviews;