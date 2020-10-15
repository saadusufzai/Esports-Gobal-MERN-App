import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./login.scss";

const Login = () => {
  const [type, setType] = useState(false);
  

  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="register">
      <div className="left"></div>
      <div className="right">
        <h2>Sign In</h2>
        <p>
          Visit your Profile & Get yourself registered in the upcoming events
          ASAP
        </p>
        <form onSubmit={submit}>
          <div className="form">
            
            <input required type="number" placeholder="Phone Number" />
            <input
              required
              onClick={() => setType(true)}
              type={type ? "password" : "text"}
              placeholder="Password *"
            />
          </div>

          <div className="form">
              <input type="submit" value="Sign In" className="btn" />
          </div>
          <span>Don't have an account? <Link to="/register" >Register</Link></span>
        </form>
      </div>
    </div>
  );
};

export default Login;
