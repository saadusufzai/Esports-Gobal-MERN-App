import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="inner-footer">
        <div>
          <ul>
            <h4>Links</h4>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/About">About</a>
            </li>
            <li>
              <a href="/Tournaments">TOURNAMENTS</a>
            </li>
            <li>
              <a href="/Login">Login/Register</a>
            </li>
          </ul>
        </div>
        <div className="contact">
          <ul>
            <h4>Contact Us</h4>
            <li>0332877676</li>
            <li>email@gmial.com</li>
            <li>www.esportsgloal.netlify.app</li>
          </ul>
        </div>
      </div>
    <div className="copyright">
        <p>Copyright 2020 | All Rights are reserved by eSports Global | Website Developed By <a target='blank' href="https://github.com/saadusufzai">Saad Aslam</a></p>
    </div>
    </footer>
  );
};

export default Footer;
