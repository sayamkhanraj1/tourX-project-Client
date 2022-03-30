import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import './Destination.css';

const Destinations = () => {
         const [destinations, setDestination] = useState([]);

         useEffect(() =>{
                  fetch('https://fast-badlands-89453.herokuapp.com/destination')
                  .then(res => res.json())
                  .then(data => setDestination(data))
         },[])

         const starIcon = <FontAwesomeIcon icon={faStar} />
         return (
                  <div>
                            <div>
                  <div className="container my-5">
                  <div className="achievement-text">
                  <h5>Feature Tours</h5>
                  <h2>See Our Best Popular <br /> Destinations</h2>
                  </div>
                  <div className="row">
                  {
                           destinations.map(destination => <div className="col-md-4 mt-4 mb-3">
                           <div className="card h-100 card-style">
                              <img className="img-fluid" src={destination?.img} alt="..."/>
                              <div className="card-body text-center package-text">
                                <h3 className="card-title mb-2"> {destination?.name}</h3>
                              </div>
                              <h6 className="fw-bold text-secondary mb-2"><span className="star">{starIcon}</span> {destination?.rating}</h6>
                              <h5 className="des-price">{destination?.price} <span>$200</span></h5>
                              
                              <div>
                               <button className="service-btn my-3">Read More</button>
                               
                              </div>
                            </div>
                           </div>)
                  }
                  </div>
                  </div>
                  </div>
                  </div>
                  );
};

export default Destinations;