import React from "react";
import "./style.css";

import img from "../../images/pubg.jpg";
const EventsList = () => {
  return (
    <div className="events">
      <h1>Events</h1>
      <div className="inner-events">
        <h2>Solo Vs Solo PUBG MOBILE Tournament No 1</h2>
        <div className="summary">
          <span>
            <i class="fa fa-clock-o" aria-hidden="true"></i> will be announced
            soon.
          </span>
          <span>
            <i class="fa fa-male" aria-hidden="true"></i>VS
            <i class="fa fa-male" aria-hidden="true"></i>
          </span>
        </div>
        <div className="text">
          <img src={img} alt="pubg" />
          <p>
            Esports Global is organizing a Solo vs Solo 1 Match PUBG Mobile
            Tournament. Any one can participate and get a chance to win 660UC or
            1800 PKR. Top three player will win a 660UC or 1800 PKR each. The
            registration process is really simple. just Click the register
            button and thats it. Registration charges are only 200 Rs for this
            Tournament.
          </p>
        </div>
        <div href="./register" className="btn">
          REGISTER NOW
        </div>
      </div>
      <hr />
      <div className="inner-events">
        <h2>Solo Vs Solo PUBG MOBILE Tournament No 2</h2>
        <div className="summary">
          <span>
            <i class="fa fa-clock-o" aria-hidden="true"></i> will be announced
            soon.
          </span>
          <span>
            <i class="fa fa-male" aria-hidden="true"></i>VS
            <i class="fa fa-male" aria-hidden="true"></i>
          </span>
        </div>
        <div className="text">
          <img src={img} alt="pubg" />
          <p>
            Esports Global is organizing a Solo vs Solo 1 Match PUBG Mobile
            Tournament. Any one can participate and get a chance to win 660UC or
            1800 PKR. Top three player will win a 660UC or 1800 PKR each. The
            registration process is really simple. just Click the register
            button and thats it. Registration charges are only 200 Rs for this
            Tournament.
          </p>
        </div>
        <div href="./register" className="btn">
          REGISTER NOW
        </div>
      </div>
    </div>
  );
};

export default EventsList;
