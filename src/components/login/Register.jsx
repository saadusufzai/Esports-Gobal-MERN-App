import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { rules } from "../rules/rules"
import { Alert } from 'reactstrap';


import "./style.scss";

const Register = () => {
  const [type, setType] = useState(false);
  const [data, setData] = useState();
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
    
 // Request body
    const user = JSON.stringify( {
      firstName, 
      lastName, 
      country, 
      city, 
      pubgId, 
      email,
      phone,
      password, 
    })

    // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

    axios.post('http://localhost:5000/api/auth/users',user,config)
    .then(res => {setData(res.data)
    console.log(res.data)}
   )
    

    console.log(user)
    alert(`Congrats You have been Registered Successfully. Our Team will contact you soon on the number you provided. `)
  
    window.location ='/'

  };

  const popup = ()=>{
    return(
      <div className="popup">
      <Alert color="success">
        <h4 className="alert-heading">Well done!</h4>
        <p>
          Aww yeah, you successfully read this important alert message. This example text is going
          to run a bit longer so that you can see how spacing within an alert works with this kind
          of content.
        </p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
        </p>
      </Alert>
    </div>
    )
  }

  return (
    <div className="register">
      <div className="left">
        <h2>RULES of the Tournament</h2>
        <ul className="rule-list">
          {rules.map((rule, key)=>
            (<li key={key}> {rule} </li>)
          )}
        </ul>
      </div>
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
