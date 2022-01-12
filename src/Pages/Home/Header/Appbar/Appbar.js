import React from 'react';
import { Navbar } from 'react-bootstrap';
import './Appbar.css'
import { Link } from 'react-router-dom';
import headerlogo from '../../../../images/Header/header logo.png'
import useAuth from '../../../../Hooks/useAuth';


const Appbar = () => {
         const {user, logOut} = useAuth();
         return (
                  <div>
                  <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light p-3">
                  <div className="container-fluid">
                  <Link to="/home" className="ms-5"> <img src={headerlogo} alt=""/></Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <Link to="/home"><li className="nav-link active fw-bold fs-5 ms-4">Home</li></Link>
                  <Link to="/tourpackage"><li className="nav-link active fw-bold fs-5">Tour Package</li></Link>
                  <Link to="/reviews"><li className="nav-link active fw-bold fs-5">Reviews</li></Link>
                  </ul>
                  </div>
                  <div className="me-5">
                  <Navbar expand="lg" className="justify-content-end">
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                  {user?.email ?
                  <div className="d-flex">
                    <Link to="/addNewPackage"><li className="nav-link active fw-bold fs-5 text-dark">Add Package</li></Link>
                    <Link to="/myOrders"><li className="nav-link active fw-bold fs-5 text-dark">My Orders</li></Link>
                    <Link to="/allOrders"><li className="nav-link active fw-bold fs-5 text-dark">All Order</li></Link>
                    <Link to="/addreview"><li className="nav-link active fw-bold fs-5 text-dark">Add Review</li></Link>
                    <button onClick={logOut} className="logOut-btn me-4">LogOut</button>
                  </div> :
                    <Link to="/login"><li className="nav-link active fw-bold fs-5 me-2 text-dark">Registration / LogIn</li></Link>
                    }
                    <Navbar.Text>
                       <a href="#login" className="fw-bold">{user?.displayName}</a>
                    </Navbar.Text>
                    </Navbar.Collapse>
                  </Navbar>
                  </div>
                  </div>
                  </nav>    
                  </div>
         );
};

export default Appbar;