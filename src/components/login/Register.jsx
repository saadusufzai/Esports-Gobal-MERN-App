import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { rules, rulesUrdu } from "../rules/rules";

import ReactTooltip from "react-tooltip";
import { useAlert } from "react-alert";
import { cities } from "../rules/cities";
import { countries } from "../rules/countries";

import "./style.scss";

const Register = () => {
  const [type, setType] = useState(false);
  const [data, setData] = useState();
  const [english, setEnglish] = useState(true);

  const navigate = useNavigate();
  const alert = useAlert();
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [pubgId, setPubgId] = useState();
  
  const [firstName, setFirstName] = useState("");
  const [player2, setPlayer2] = useState("");
  const [player3, setPlayer3] = useState("");
  const [player4, setPlayer4] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState();
  
  const onChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const onChangePlayer2 = (e) => {
    setPlayer2(e.target.value);
  };
  const onChangePlayer3 = (e) => {
    setPlayer3(e.target.value);
  };
  const onChangePlayer4 = (e) => {
    setPlayer4(e.target.value);
  };

  // const onChanegeEmail = (e) => {
  //   setEmail(e.target.value);
  // };

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };
  const onChangeCity = (e) => {
    setCity(e.target.value);
  };

  // const onChangePubgId = (e) => {
  //   setPubgId(e.target.value);
  // };

  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const submit = (e) => {
    console.log(
      firstName,
      player2,
      player3,
      player4,
      country,
      city,
      phone,
      password,
    );
    e.preventDefault();

    // Request body
    const user = JSON.stringify({
      firstName,
      player2,
      player3,
      player4,
      country,
      city,
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
    // 
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

  const handelText = () => {
    setEnglish(!english);
  };

  return (
    <div className="register">
      <ReactTooltip />
      <div className="left">
        <h2>RULES of the Tournament</h2>
        <i
          onClick={() => handelText()}
          data-tip={`To read in ${english ? "Urdu" : "English"} Click here`}
          className="fa fa-info-circle fa-2x"
          aria-hidden="true"
        ></i>
        <ul className="rule-list">
          {english
            ? rules.map((rule, key) => <li key={key}> {rule} </li>)
            : rulesUrdu.map((rule, key) => <li key={key}> {rule} </li>)}
        </ul>
      </div>
      <div className="right">
        <h2>Register Your Squad</h2>
        <p>Only one member will enter the info</p>
        <form onSubmit={submit}>
          <div className="form">
            <input
              htmlFor="leaderName"
              onChange={(e) => onChangeFirstName(e)}
              required
              type="text"
              placeholder="Team Leader Name *"
            />
            <select  onChange={(e) => onChangeCountry(e)}>
              <option value="country" selected={true} disabled="disabled">
                Country
              </option>
              <option value="Pakistan">Pakistan</option>
              {countries.map((country,ind) => (
                <option key={ind} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
            <select  onChange={(e) => onChangeCity(e)}>
            <option value="country" selected={true} disabled="disabled">
                City
              </option>
              <option value="Bhakkar">Bhakkar</option>
              {cities.map((city,ind) => (
                <option key={ind} value={city}>
                  {city}
                </option>
              ))}
            </select>
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
            <label htmlFor="TEAM_INFO" value='TEAM INFO'> Squad Information</label>


            <input
              htmlFor="player2"
              onChange={(e) => onChangePlayer2(e)}
              
              type="text"
              placeholder="Player 2"
            />
            <input
              htmlFor="player3"
              onChange={(e) => onChangePlayer3(e)}
              
              type="text"
              placeholder="Player 3"
            />
            <input
              htmlFor="player4"
              onChange={(e) => onChangePlayer4(e)}
              
              type="text"
              placeholder="Player 4"
            />
          </div>
          <div className="checkbox">
            <input required type="checkbox" />
            <label>
              I Accept The{" "}
              <Link target="blank" to={"/terms&conditions"}>
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
