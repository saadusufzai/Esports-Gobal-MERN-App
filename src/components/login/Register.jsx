import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./style.scss";

const Register = () => {
  const [type, setType] = useState(false);
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [pubgId, setPubgId] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState("");

  const onChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const onChangeLastName = (e) => {
    setLastName(e.target.value);
  };
  const onChanegeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };
  const onChangeCity = (e) => {
    setCity(e.target.value);
  };
  const onChangePubgId = (e) => {
    setPubgId(e.target.value);
  };

  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();

    const user = {
      firstName, 
      lastName, 
      country, 
      city, 
      pubgId, 
      email,
      phone,
      password, 
    }

    axios.post('http://localhost:5000/register/add',user)
    .then(res => console.log(res.data))
    alert('You have been registered Successfully. ')

    console.log(user)
    window.location ='/'

  };

  return (
    <div className="register">
      <div className="left"></div>
      <div className="right">
        <h2>Create Your Account</h2>
        <p>to register for the Tournaments</p>
        <form onSubmit={submit}>
          <div className="form">
            <input
              onChange={(e) => onChangeFirstName(e)}
              required
              type="text"
              placeholder="First Name *"
            />
            <input
              onChange={(e) => onChangeLastName(e)}
              required
              type="text"
              placeholder="Last Name *"
            />
            <select value={country} onChange={(e) => onChangeCountry(e)}>
              <option value="">Country</option>
              <option value="Pakistan">Pakistan</option>
              <option value="India">India</option>
            </select>
            <select value={city}  onChange={(e) => onChangeCity(e)}>
              <option value="">City</option>
              <option value="Bhakkar">Bhakkar</option>
            </select>
            <input
              onChange={(e) => onChangePubgId(e)}
              type="number"
              placeholder="PUBG ID"
            />
            <input
              onChange={(e) => onChanegeEmail(e)}
              type="email"
              placeholder="Email"
            />
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
          <div className="checkbox">
            <input required type="checkbox" />
            <label>
              I Accept The{" "}
              <a target="blank" href="">
                Terms & Conditions
              </a>
            </label>
          </div>

          <div className="form">
            <input type="submit" value="Register" className="btn" />
            <input
              readOnly
              onClick={() => navigate("/login")}
              value="Back "
              className="btn noselect back"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
