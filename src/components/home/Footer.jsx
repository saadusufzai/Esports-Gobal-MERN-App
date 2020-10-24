import React from "react";
import "./style.css";
import {Link} from 'react-router-dom'

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
              <Link onClick={() =>  window.scrollTo(0, 0)} to="/">Home</Link>
            </li>
            <li>
              <Link onClick={() =>  window.scrollTo(0, 0)} to="/About">About</Link>
            </li>
            <li>
              <Link onClick={() =>  window.scrollTo(0, 0)} to="/Tournaments">Tournaments</Link>
            </li>
            <li>
              <Link onClick={() =>  window.scrollTo(0, 0)} to="/Login">Login/Register</Link>
            </li>
            <li>
              <Link onClick={() =>  window.scrollTo(0, 0)} to="/admin/users">Users</Link>
            </li>
          </ul>
        </div>
        
        <div className="contact">
          <ul>
            <h4>Contact Us</h4>
            <li>
              <i className="fa fa-phone" aria-hidden="true"></i>03472175563
            </li>
            <li>
              <i className="fa fa-phone" aria-hidden="true"></i>03127507523
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
