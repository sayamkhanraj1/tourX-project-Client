import React from 'react';
import './Review.css'

const Review = (props) => {

         const {name, img, discription, identity} = props.review;

         return (

                    <div className="col-md-4 mt-4 mb-3">
                    <div className="card h-100 card-style">
                    <img className="card-img" src={img} alt="..."/>
                    <div className="card-body text-center package-text">
                     <h3 className="card-title mb-3">{name}</h3>
                     <h5 className="fw-bold text-secondary fs-4">{identity}</h5>
                     <p>{discription}</p>
                      </div>
                      </div>
                      </div>
         );
};

export default Review;