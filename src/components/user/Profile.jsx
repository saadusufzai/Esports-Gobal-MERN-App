import React, { useState, useEffect } from "react";
import classes from "./profile.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import avatar1 from "../../images/avatars/1.png";
import ReactTooltip from "react-tooltip";
import axios from "axios";
import cx from "classname";

const Profile = ({ user, isAuthenticated, setIsAuthenticated }) => {
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();
  const alert = useAlert();
  const id = user.id || "5f93b7e8e7f82900172f1211";

  const logout = () => {
    setIsAuthenticated(false);
    navigate("/");
    alert.success("Loged out successfully!");
  };

  useEffect(() => {
    axios
      .get(`https://esports-global.herokuapp.com/api/users/${id}`)
      .then((res) => setStatus(res.data.feeStatus))
      .catch((err) => console.log(err));
  }, []);

  var feeStatus = cx({
    green: status,
    feeStatus: true,
  });

  if (isAuthenticated) {
    return (
      <div className={classes.profileContainer}>
        <ReactTooltip />
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
          <div
            data-tip={
              status
                ? `Hepefully ${user.firstName} you are in our WhatsApp Group if not You will soon be added in the official WhatsApp Group`
                : "Submit Rs.200 on 03472175563 Easiy Paisa Account to participate in the Upcoming PUBG Tournament"
            }
            className={classes.feeStatus}
            style={{ backgroundColor: status ? "green" : "red" }}
          >
            {status ? "You have been" : "Fee Status"}{" "}
            <p>{status ? "Registered" : "Pending"}</p>
          </div>
          <div
            data-tip="This feature will be Updated Soon"
            className={classes.edit}
          >
            Edit <i className="fa fa-pencil" aria-hidden="true"></i>
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
                <p>0{user.phone}</p>
              </li>
            </ul>
          </div>
          <div className={classes.bottomBtn}>
            <div
              data-tip="Do Not Submit fee on any other Number but this!"
              onClick={() => logout()}
              className={classes.easypaisa}
            >
              EasyPaisa Account: 03472175563
            </div>
            <div onClick={() => logout()} className={classes.logout}>
              Logout <i className="fa fa-sign-out" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>
          You have been successfully logged out <br />
          <br />
          click{" "}
          <Link style={{ color: "rgb(0,0,0)", fontStyle: "italic" }} to="/">
            {" "}
            HERE
          </Link>{" "}
          to return to HOME page{" "}
        </h1>
      </div>
    );
  }
};

export default Profile;
