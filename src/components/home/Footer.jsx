import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="inner-footer">
        <div>
          <ul className='links' >
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
        <div className="follow-us">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="#">
                <i style={{}}  class=" fb fa fa-facebook-official fa-2x" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i class="insta fa fa-instagram fa-2x" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i class=" yt fa fa-youtube-play fa-2x" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i class="wa fa fa-whatsapp fa-2x" aria-hidden="true"></i>
                
              </a>
            </li>
          </ul>
        </div>
        <div className="contact">
          <ul>
            <h4>Contact Us</h4>
            <li>
              <i class="fa fa-phone" aria-hidden="true"></i>0332877676
            </li>
            <li>
              <i class="fa fa-envelope" aria-hidden="true"></i>email@gmial.com
            </li>
            <li>
              <i class="fa fa-external-link-square" aria-hidden="true"></i>
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
