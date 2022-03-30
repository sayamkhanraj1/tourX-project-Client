import { faUser, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

const Blogs = () => {

         const [blogs, setBlogs] = useState([]);

         useEffect(() =>{
                  fetch('https://fast-badlands-89453.herokuapp.com/blog')
                  .then(res => res.json())
                  .then(data => setBlogs(data))
         },[])

         const userIcon = <FontAwesomeIcon icon={faUser} />
        const commentIcon = <FontAwesomeIcon icon={faComment} />
         return (
                  <div>
                            <div>
                  <div className="container my-5">
                  <div className="achievement-text">
                  <h5>Latest Blog</h5>
                  <h2>Stay Updated And New <br /> Post Our Blog</h2>
                  </div>
                  <div className="row">
                  {
                           blogs.map(blog => <div className="col-md-4 mt-4 mb-3">
                           <div className="card h-100 card-style">
                              <div className="img-effect">
                              <img className="img-fluid" src={blog?.img} alt="..."/>
                              </div>
                              <div className="mt-3 package-detail d-flex justify-content-around">
                                       <h5>{userIcon} {blog?.user}</h5>
                                       <h5>{commentIcon} {blog?.comment}</h5>
                              </div>
                              <div className="card-body text-center package-text">
                                <h3 className="card-title mb-3"> {blog?.name}</h3>
                              </div>
                              
                              <div>
                               <button className="service-btn mb-3">Read More</button>
                               
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

export default Blogs;