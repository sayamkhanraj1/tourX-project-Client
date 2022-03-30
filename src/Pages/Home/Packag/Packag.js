import { faCartArrowDown, faCalendarAlt, faMapMarkedAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './packag.css'

const Packag = (props) => {

        const packag = props.package;
        const {img, key, name, price, duration, rating} = packag;
  
        const {user} = useAuth();

        //icons
        const cartIcon = <FontAwesomeIcon icon={faCartArrowDown} />
        const durationIcon = <FontAwesomeIcon icon={faCalendarAlt} />
        const mapIcon = <FontAwesomeIcon icon={faMapMarkedAlt} />
        const starIcon = <FontAwesomeIcon icon={faStar} />

        //add to myOrders

        const handleAddToCart = () =>{
          const data = packag;
          data.email = user?.email;
          console.log(data)

          fetch("https://fast-badlands-89453.herokuapp.com/myOrder", {
            method:"POST",
            headers:{'content-type' : 'application/json'},
            body: JSON.stringify(data)
          })
        }

        return (
                  <div className="col-md-4 mt-4 mb-3">
                 <div className="card h-100 card-style">
                   <div className=" img-effect"> 
                     <img className="img-fluid" src={img} alt="..."/>
                     </div>
                    <div className="mt-3 package-detail d-flex justify-content-around">
                             <h5>{price}</h5>
                             <h5>{durationIcon} {duration}</h5>
                    </div>
                    <div className="card-body text-center package-text">
                      <h3 className="card-title mb-3 ">{mapIcon} {name}</h3>
                      <h6 className="fw-bold text-secondary"><span className="star">{starIcon}</span> {rating}</h6>
                    </div>
                    
                    <div>
                     <Link to={`/booking/${key}`}>
                     <button onClick={handleAddToCart}  className="service-btn mb-3">{cartIcon} Book Now</button>
                     </Link>
                    </div>
                  </div>
                 </div>
         );
};

export default Packag;