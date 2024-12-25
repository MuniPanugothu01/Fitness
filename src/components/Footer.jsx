// import React from 'react'

// const Footer = () => {
//   return (
//     <footer>
//         Designed And Developed By Muni Panugothu
//     </footer>
//   )
// }

// export default Footer

import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Footer.css'; // Import the footer-specific styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h3>Gym App</h3>
          <p>Your fitness journey starts here!</p>
          <p>Contact us:</p>
          <p>Phone:- <a href="tel:+1234567890">+91 9347870616</a></p>
          <p>Email:- <a href="mailto:contact@gymapp.com">munipanugothu2001@gmail.com</a></p>
        </div>

        <div className="footer-social">
          <h4>Follow us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



