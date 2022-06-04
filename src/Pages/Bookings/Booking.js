import React from 'react';
import { faCalendarAlt, faMapMarkedAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';
import './Booking.css'

const Booking = () => {

         let {bookingId} = useParams();
         const {user} = useAuth();

         const [bookings, setBooking] = useState([]);
         const [singleBooking, setSingleBooking] = useState({});

         // icones
         const durationIcon = <FontAwesomeIcon icon={faCalendarAlt} />
         const mapIcon = <FontAwesomeIcon icon={faMapMarkedAlt} />
         const starIcon = <FontAwesomeIcon icon={faStar} />

         useEffect(()=>{
                  fetch('https://fast-badlands-89453.herokuapp.com/packages')
                  .then(res => res.json())
                  .then(data => setBooking(data))
         },[]);

         useEffect(()=>{
                  const foundBooking = bookings.find(booking => (booking.key == bookingId))
                  setSingleBooking(foundBooking)
                  
         },[bookings])

         // react hook form
         const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
         const onSubmit = data => {
           console.log(data)
           reset();
        };

         console.log(watch("example")); 

         return (
                  <div className="container">
                  <div className="row"> 
                  <div className="col-md-6 mt-4 mb-3">
                 <div className="card h-100 card-style">
                    <img className="img-fluid" src={singleBooking?.img} alt="..."/>
                    <div className="mt-3 package-detail d-flex justify-content-around">
                             <h5>{singleBooking?.price}</h5>
                             <h5>{durationIcon} {singleBooking?.duration}</h5>
                    </div>
                    <div className="card-body text-center package-text">
                      <h3 className="card-title mb-3">{mapIcon} {singleBooking?.name}</h3>
                      <h6 className="fw-bold text-secondary"><span className="star">{starIcon}</span> {singleBooking?.rating}</h6>
                      <p className="fw-bold text-secondary">{singleBooking?.discription}</p>
                    </div>
                    <div>
                               <button className="service-btn mb-3">Panding</button>
                               
                              </div>
                  </div>
                 </div>

                  <div className="col-md-6 mt-4 mb-3">
                  <form className="order-form " onSubmit={handleSubmit(onSubmit)}>
                  <input defaultValue={user.displayName} {...register("name")} />
                  <input defaultValue={user.email} {...register("email")} />
                  <input placeholder="Address" {...register("address", { required: true })} />
                  <input placeholder="City" {...register("city", { required: true })} />
                  <input type="number" placeholder="Phone Number" {...register("number", { required: true })} />
                  {errors.exampleRequired && <span>This field is required</span>}
                  
                  <input className="fw-bolder fs-5" type="submit" />
                  </form>
                  </div>

                  </div>
                  </div>
         );
};

export default Booking;