import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="inner-footer">
        <div className="about">
            <h3>About Us</h3>
            <p>
            Esports Global is an Esports Company that organize online tournaments and events to boost and support the rising gamming cmmunity of Pakitan.
            </p>
        </div>

        <div>
          <ul className='links' >
            <h4>Links</h4>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/About">About</a>
            </li>
            <li>
              <a href="/Tournaments">Tournaments</a>
            </li>
            <li>
              <a href="/Login">Login/Register</a>
            </li>
            <li>
              <a href="/admin/users">Users</a>
            </li>
          </ul>
        </div>
        
        <div className="contact">
          <ul>
            <h4>Contact Us</h4>
            <li>
              <i className="fa fa-phone" aria-hidden="true"></i>0332877676
            </li>
            <li>
              <i className="fa fa-envelope" aria-hidden="true"></i>email@gmial.com
            </li>
            <li>
              <i className="fa fa-external-link-square" aria-hidden="true"></i>
              www.esportsgloal.netlify.app
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>
          Copyright 2020 | All Rights are reserved by eSports Global | Website
          Developed By{" "}
          <a target="blank" href="https://github.com/saadusufzai">
            Saad Aslam
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
