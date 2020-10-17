import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./login.scss";

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

    const user = {
      phone,
      password,
    };
    // Headers
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    // Request body
    const body = JSON.stringify({ phone, password });

  //   axios
  //     .post("http://localhost:5000/api/auth/login",config, user)
  //     .then((res) => console.log(res.data));

  const options = {
    method: 'POST',
    url: 'http://localhost:5000/api/auth/login',
    headers: {'content-type': 'application/json'},
    data: {phone: '03326877676', password: '1234'}
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
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
            <input onChange={(e)=> onChangePhone(e)} required type="number" placeholder="Phone Number" />
            <input
              required
              onChange={(e) => onChangePhone(e)}
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
