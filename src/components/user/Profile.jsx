import React, { useState } from "react";
import classes from "./profile.module.css";
import {Link} from 'react-router-dom'

import avatar1 from "../../images/avatars/1.png";
import Login from "../login/Login";
import ReactTooltip from 'react-tooltip';

const Profile = ({user, isAuthenticated, setIsAuthenticated }) => {
  const [status, setStatus] = useState("Pending");
  
  const logout = () => {
    setIsAuthenticated(false);
  }


  if (isAuthenticated) {
    return (
      <div className={classes.profileContainer}>
        <ReactTooltip/>
        <div className={classes.left}>
          <div className={classes.avatar}>
            <img src={avatar1} alt="avatar" />
            <h2 className="name">
              {user.firstName} {user.lastName} 
            </h2>
            <p>
              {" "}
              <i class="fa fa-phone " aria-hidden="true"></i> 0{user.phone}
            </p>
          </div>
        </div>
        <div className={classes.right}>
            
          <div  data-tip="Submit Fee in order to participate in the Upcoming PUBG Tournament" className={classes.feeStatus}>
            Fee Status <p>{status}</p>
          </div>
          <div data-tip="Will be Updated Soon" className={classes.edit}>
            Edit <i className="fa fa-pencil" aria-hidden="true"></i>
          </div>
          <div onClick={() =>logout()} className={classes.logout}>
            Logout <i className="fa fa-sign-out" aria-hidden="true"></i>
          </div>

          <div className={classes.about}>
            <i className="fa fa-user fa-2x" aria-hidden="true"></i>
            <h2>ABOUT</h2>
          </div>

          <div className={classes.info}>
            <ul>
              <li>
                <h3>First Name:</h3>
                <p>{user.firstName}</p>
              </li>
              <li>
                <h3>Last Name:</h3>
                <p>{user.lastName}</p>
              </li>
              <li>
                <h3>City:</h3>
                <p>{user.city}</p>
              </li>
            </ul>

            <ul>
              <li>
                <h3>Country:</h3>
                <p>{user.country}</p>
              </li>
              <li>
                <h3>PUBG ID:</h3>
                <p>{user.pubgId}</p>
              </li>
              <li>
                <h3>Phone:</h3>
                <p>{user.phone}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
       <h1>You have been successfully logged out <br/>
       <br/>
       click <Link style={{color: 'rgb(0,0,0)',  fontStyle:'italic'}} to="/"> HERE</Link> to return to HOME page  </h1>
      </div>
    );
  }
};

export default Profile;
