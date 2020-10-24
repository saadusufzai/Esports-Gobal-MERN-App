import React from "react";
import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import axios from "axios";
import { rules, rulesUrdu } from "../rules/rules";
import ReactTooltip from 'react-tooltip';
import { useAlert } from "react-alert";
import { cities } from "../rules/cities";
import { countries } from "../rules/countries";


import "./style.scss";

const Register = () => {
  const [type, setType] = useState(false);
  const [data, setData] = useState();
  const [english ,setEnglish] = useState(true)

  const navigate = useNavigate();
  const alert = useAlert();

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
    const user = JSON.stringify({
      firstName,
      lastName,
      country,
      city,
      pubgId,
      email,
      phone,
      password,
    });

    // Headers
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    axios
      .post("https://esports-global.herokuapp.com/api/auth/users", user, config)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
        alert.success("Thank you! You have been Registered!");
        setTimeout(() => {
          window.location = "/";
        }, 2000);
      })
      .catch((err) => console.log(err));
  };

  const toLogin = () => {
    navigate("/login");
    window.scrollTo(0, 0);
  };

const handelText= () => {
  setEnglish(!english)
}

  return (
    <div className="register">
      <ReactTooltip/>
      <div className="left">
        <h2>RULES of the Tournament</h2>
        <i onClick={()=> handelText()} data-tip={`To read in ${english? 'Urdu':'English'} Click here`} className="fa fa-info-circle fa-2x" aria-hidden="true"></i>
        <ul className="rule-list">
          {
          
      english?rules.map((rule, key) => (
        <li key={key}> {rule} </li>
      )) :
      rulesUrdu.map((rule, key) => (
        <li key={key}> {rule} </li>
      )) }
        </ul>
      </div>
      <div className="right">
        <h2>Create Your Account</h2>
        <p>To Register For The Tournaments</p>
        <form onSubmit={submit}>
          <div className="form">
            <input
              htmlFor="firstName"
              onChange={(e) => onChangeFirstName(e)}
              required
              type="text"
              placeholder="First Name *"
            />
            <input
              htmlFor="lastName"
              onChange={(e) => onChangeLastName(e)}
              required
              type="text"
              placeholder="Last Name *"
            />
            <select value={country} onChange={(e) => onChangeCountry(e)}>
              <option selected="true" disabled="disabled" value="">
                Country
              </option>
              <option value="Pakistan">Pakistan</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country.name}
                </option>
              ))}
            </select>
            <select value={city} onChange={(e) => onChangeCity(e)}>
              <option selected="true" disabled="disabled" value="">
                City
              </option>
              <option value="Bhakkar">Bhakkar</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <input
              onChange={(e) => onChangePubgId(e)}
              type="number"
              placeholder="PUBG ID"
            />
            <input
              htmlFor="email"
              onChange={(e) => onChanegeEmail(e)}
              type="email"
              placeholder="Email"
            />
            <input
              htmlFor="phone"
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
              <Link target="blank" to={'/terms&conditions'} >
                Terms & Conditions
              </Link>
            </label>
          </div>

          <div className="form">
            <input type="submit" value="Register" className="btn" />
            <input
              readOnly
              onClick={() => toLogin()}
              value="Back"
              className="btn noselect back"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
