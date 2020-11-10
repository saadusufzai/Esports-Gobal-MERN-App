import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

import img from "../../images/pubg.jpg";
const EventsList = () => {
  const navigate = useNavigate();

  const handelOnRegister = () => {
    window.scrollTo(0, 0);
    navigate("/register");
    navigate("/register");
  };

  return (
    <div className="events">
      <h1>Events</h1>
      <div className="inner-events">
        <h2>Squad Vs Squad PUBG MOBILE Tournament </h2>
        <div className="summary">
          <span>
            <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
            November 15, 2020 :
            <i className="fa fa-clock-o" aria-hidden="true"></i> will be accounced later
          </span>
          <span>
            <i className="fa fa-users" aria-hidden="true"></i>VS
            <i className="fa fa-users" aria-hidden="true"></i>
          </span>
        </div>
        <div className="text">
          <img src={img} alt="pubg" />
          <p>
            Esports Global is organizing a Squad vs Squad 1 Match PUBG Mobile
            Tournament.Only Mobile players can participate can participate and get a chance to win 6000 PKR. The
            registration process is really simple. just Click the register
            button and thats it. Registration charges are only 800Rs (200 per/member) for this
            Tournament.
          </p>
        </div>
        <div onClick={() => handelOnRegister()} className="btn">
          REGISTER NOW
        </div>
      </div>
      <hr />
      <br />
      <br />
      <div className="inner-events">
        <h2>Solo Vs Solo PUBG MOBILE FREE Tournament </h2>
        <div className="summary">
          <span>
          <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
            November 8, 2020 :
            <i className="fa fa-clock-o" aria-hidden="true"></i> 08:00 PM
          </span>
          <span>
            <i className="fa fa-male" aria-hidden="true"></i>VS
            <i className="fa fa-male" aria-hidden="true"></i>
          </span>
        </div>
        <div className="text">
          <img src={img} alt="pubg" />
          <p>
            Esports Global is organizing a Solo vs Solo 1 Match PUBG Mobile
            Tournament. Any one can participate and get a chance to win 660UC or
            1500 PKR. Top player will win a 660UC or 1500 PKR. The
            registration process is really simple. just Click the register
            button and thats it.This tournament is FREE, No Registration charges.
          </p>
        </div>
        <div onClick={() => handelOnRegister()} className="btn">
          REGISTER NOW
        </div>
      </div>
    </div>
  );
};

export default EventsList;
