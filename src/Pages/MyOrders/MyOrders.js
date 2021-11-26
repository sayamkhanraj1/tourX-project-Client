import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faCalendarAlt, faMapMarkedAlt, faStar } from '@fortawesome/free-solid-svg-icons';

const MyOrders = () => {
         const {user} = useAuth();
         const [orders, setOrders] = useState([]);
         const [isDeleted, setDeleted] = useState(null);

         const cartIcon = <FontAwesomeIcon icon={faCartArrowDown} />
        const durationIcon = <FontAwesomeIcon icon={faCalendarAlt} />
        const mapIcon = <FontAwesomeIcon icon={faMapMarkedAlt} />
        const starIcon = <FontAwesomeIcon icon={faStar} />

         useEffect(() =>{
                  fetch(`https://powerful-sierra-60610.herokuapp.com/orders/${user?.email}`)
                  .then(res => res.json())
                  .then(data => setOrders(data))
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
                                    alert('Deleted Successfully')
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
                  <h2>Your Selected Orders</h2>
                  </div>
                  <div className="row">
                  {
                           orders.map(order => <div className="col-md-4 mt-4 mb-3">
                           <div className="card h-100 card-style">
                              <img className="img-fluid" src={order?.img} alt="..."/>
                              <div className="mt-3 package-detail d-flex justify-content-around">
                                       <h5>{order?.price}</h5>
                                       <h5>{durationIcon} {order?.duration}</h5>
                              </div>
                              <div className="card-body text-center package-text">
                                <h3 className="card-title mb-3">{mapIcon} {order?.name}</h3>
                                <h6 className="fw-bold text-secondary"><span className="star">{starIcon}</span> {order?.rating}</h6>
                              </div>
                              
                              <div>
                               <button onClick={() => handleDelete(order?._id)} className="service-btn mb-3">Cancel Order</button>
                               
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

export default MyOrders;