import React, { useState,useEffect } from "react";
import classes from "./profile.module.css";
import axios from "axios";

import avatar1 from "../../images/avatars/1.png";
import Login from "../login/Login";
import ReactTooltip from 'react-tooltip';

const Profile = ({user, isAuthenticated }) => {
  const [status, setStatus] = useState("Pending");
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  
  useEffect(() => {
      axios.get(`https://esports-global.herokuapp.com/api/users/${user.id}`)
        .then((res) => {
            setFirstName(res.data.firstName)
            setLastName(res.data.lastName)
        }) 
  },user)



  if (isAuthenticated) {
    return (
      <div className={classes.profileContainer}>
        <div className={classes.left}>
          <div className={classes.avatar}>
            <img src={avatar1} alt="avatar" />
            <h2 className="name">
              {user.name} 
            </h2>
            <p>
              {" "}
              <i class="fa fa-phone " aria-hidden="true"></i> 0{user.phone}
            </p>
          </div>
        </div>
        <div className={classes.right}>
            <ReactTooltip/>
          <div  data-tip="Submit Fee in order to participate in the Upcoming PUBG Tournament" className={classes.feeStatus}>
            Fee Status <p>{status}</p>
          </div>
          <div className={classes.edit}>
            Edit <i class="fa fa-pencil" aria-hidden="true"></i>
          </div>

          <div className={classes.about}>
            <i class="fa fa-user fa-2x" aria-hidden="true"></i>
            <h2>ABOUT</h2>
          </div>

          <div className={classes.info}>
            <ul>
              <li>
                <h3>First Name:</h3>
                <p>{firstName}</p>
              </li>
              <li>
                <h3>Last Name:</h3>
                <p>{lastName}</p>
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
        <Login />
      </div>
    );
  }
};

export default Profile;
