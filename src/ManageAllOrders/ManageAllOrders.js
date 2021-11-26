import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCalendarAlt, faMapMarkedAlt, faStar } from '@fortawesome/free-solid-svg-icons';

const  ManageAllOrders = () => {
         const [allOrders, setAllOrders] = useState([]);
         const [isDeleted, setDeleted] = useState(null);

        const durationIcon = <FontAwesomeIcon icon={faCalendarAlt} />
        const mapIcon = <FontAwesomeIcon icon={faMapMarkedAlt} />
        const starIcon = <FontAwesomeIcon icon={faStar} />

         useEffect(() =>{
                  fetch('https://powerful-sierra-60610.herokuapp.com/myOrder')
                  .then(res => res.json())
                  .then(data => setAllOrders(data))
         },[isDeleted])

         const handleDelete = (id) =>{
                  fetch(`https://powerful-sierra-60610.herokuapp.com/deleteOrder/${id}`, {
                           method:"DELETE", 
                           headers:{'content-type': 'application/json'}
                  })
                  .then(res => res.json())
                  .then(result => {
                           if(result.deletedCount){
                                    setDeleted(true)
                                    alert('Delete Successfully');
                           }
                           else{
                                    setDeleted(false);
                           }
                  })
         
                 }
                 
         return (
                  <div>
                            <div>
                  <div className="container my-5">
                  <div className="achievement-text">
                  <h2>All Orders</h2>
                  </div>
                  <div className="row">
                  {
                           allOrders.map(allOrder => <div className="col-md-4 mt-4 mb-3">
                           <div className="card h-100 card-style">
                              <img className="img-fluid" src={allOrder?.img} alt="..."/>
                              <div className="mt-3 package-detail d-flex justify-content-around">
                                       <h5>{allOrder?.price}</h5>
                                       <h5>{durationIcon} {allOrder?.duration}</h5>
                              </div>
                              <div className="card-body text-center package-text">
                                <h3 className="card-title mb-3">{mapIcon} {allOrder?.name}</h3>
                                <h6 className="fw-bold text-secondary"><span className="star">{starIcon}</span> {allOrders?.rating}</h6>
                              </div>
                              
                              <div>
                               <button onClick={() => handleDelete(allOrder?._id)} className="service-btn mb-3 me-4">Cancel Order</button>
                               <button className="service-btn mb-3 me-4">Panding</button>
                               
                               
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

export default ManageAllOrders;