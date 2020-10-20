import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { rules } from "../rules/rules";
import "./login.scss";

export const tokenconfig = (getState) => {
  const token = getState().auth.token;

  const config = {
    headers: {
      "content-type": "application/json",
    }
  };

  // if token, add to header
  if (token) {
    config.headers['x-auth-token'] = token
  }
  return config;
};
const Login = () => {
  const [type, setType] = useState(false);
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();

 

  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();

    let data = JSON.stringify({
      phone,
      password,
    });
    // Headers
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post("http://localhost:5000/api/auth/login", data, config)
      .then((res) => {
        console.log(res.data.token);
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="register">
      <div className="left">
        <h2>RULES of the Tournament</h2>
        <ul className="rule-list">
          {rules.map((rule, key) => (
            <li key={key}> {rule} </li>
          ))}
        </ul>
      </div>
      <div className="right">
        <h2>Sign In</h2>
        <p>
          Visit your Profile & Get yourself registered in the upcoming events
          ASAP
        </p>
        <form onSubmit={submit}>
          <div className="form">
            <input
              onChange={(e) => onChangePhone(e)}
              required
              type="number"
              placeholder="Phone Number"
            />
            <input
              required
              onChange={(e) => onChangePassword(e)}
              onClick={() => setType(true)}
              type={type ? "password" : "text"}
              placeholder="Password *"
            />
          </div>

          <div className="form">
            <input type="submit" value="Sign In" className="btn" />
          </div>
          <span>
            Don't have an account? <Link to="/register">Register</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
