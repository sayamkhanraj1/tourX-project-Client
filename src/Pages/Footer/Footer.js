import React from 'react';
import './Footer.css'
import logo from '../../images/Footer/footer-img.png'

const Footer = () => {
         return (
                  <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src={logo} alt="" />
              <p className="mt-4">Pellentesque accumsan magna in augue sagittis, non fringilla eros molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper.non fringilla eros molestie. Sed feugiat mi nec ex vehicula, nec vestibulum orci semper. </p>
            </div>
            <div className="col-md-2">
              <div>
                       <h4>Contact Us</h4>
                <ul>
                  <li className="footer-menu">+01852-1265122 <br />+01852-1265122</li>
                  <li className="footer-menu">info@example.com <br /> support@example.com </li>
                  <li className="footer-menu">2752 Willison<br /> Eagan, United</li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div>
                       <h4>Support</h4>
                <ul>
                  <li className="footer-menu">Contact Us</li>
                  <li className="footer-menu">About Us</li>
                  <li className="footer-menu">Destinations</li>
                  <li className="footer-menu">Package</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <h3>Sign up for the newsletter</h3>
                <div className="mt-3">
                <input
                  className="footer-input"
                  type="text"
                  placeholder="Enter Email"
                />
                <button className="text-center btn btn-light text-dark fw-bold ms-2">Submit</button>
                </div>
                <h6 className="mt-4">*Please Note : We do not spam your mail.</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
         );
};

export default Footer;