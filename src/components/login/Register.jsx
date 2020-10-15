import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

import "./style.scss";

const Register = () => {
  const [type, setType] = useState(false);
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault()

  }

  return (
    <div className="register">
      <div className="left"></div>
      <div className="right">
        <h2>Create Your Account</h2>
        <p>to register for the Tournaments</p>
        <form onSubmit={submit} >
          <div className="form">
            <input required type="text" placeholder="First Name *" />
            <input type="text" placeholder="Last Name *" />
            <select>
              <option value="">Country</option>
              <option value="">Pakistan</option>
              <option value="">India</option>
            </select>
            <select>
              <option value="">City</option>
              <option value="">Bhakkar</option>
            </select>
            <input type="number" placeholder="PUBG ID" />
            <input type="email" placeholder="Email" />
            <input required type="number" placeholder="Phone Number" />
            <input
              required
              onClick={() => setType(true)}
              type={type ? "password" : "text"}
              placeholder="Password *"
            />
          </div>
          <div className="checkbox">
            <input required type="checkbox" />
            <label>I Accept The <a target='blank' href="">Terms & Conditions</a></label>
          </div>

          <div className="form">
            <input type='submit' value='Register' className="btn"/>
            <input onClick={()=>navigate('/login')} value='Back ' className="btn noselect back"/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
