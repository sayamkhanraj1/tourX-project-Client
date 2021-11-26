import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Packag from '../Packag/Packag';

const TourPackages = () => {
         const [packages, setPackages] = useState([]);

         useEffect(()=>{
                  fetch('https://powerful-sierra-60610.herokuapp.com/packages')
                  .then(res => res.json())
                  .then(data => setPackages(data))
         },[])
         return (
                  <div>
                  <div className="container my-5">
                  <div className="achievement-text">
                  <h5>Choose Your Package</h5>
                  <h2>Select Your Best <br /> Package For Your Travel</h2>
                  </div>
                  <div className="row">
                  {
                           packages.map(packag=> <Packag
                                    key={packag.key}
                                    package={packag}
                                     ></Packag>)
                  }
                  </div>
                  </div>
                  </div>
         );
};

export default TourPackages;