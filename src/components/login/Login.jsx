import React,{useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import { useAlert } from "react-alert";
import ReactTooltip from "react-tooltip";

import { rules, rulesUrdu } from "../rules/rules";
import "./login.scss";

export const tokenconfig = (token) => {
  // const token = getState().auth.token;

  const config = {
    headers: {
      "content-type": "application/json",
    },
  };

  // if token, add to header
  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return config;
};
const Login = ({ user, setUser, setIsAuthenticated }) => {
  const [type, setType] = useState(false);
  const [phone, setPhone] = useState();
  const [english, setEnglish] = useState(true);
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const alert = useAlert();
  
  const handelText = () => {
    setEnglish(!english);
  };
 

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
    const config = tokenconfig(localStorage.getItem('token'))

    axios
      .post("https://esports-global.herokuapp.com/api/auth/login/squad", data, config)
      .then((res) => {
        alert.success("You Have Been Logged In");

        localStorage.setItem("token", res.data.token);
        setUser(res.data.user);
        setIsAuthenticated(true);
        navigate(`/login/${res.data.user.id}`);
        // setTimeout(() => {
         
        // },2000)
        
      })
      .catch((err) => {
        console.log(err);
        alert.error("Invalid credentials");
      });
  };

  return (
    <div className="register">
      <ReactTooltip />
      <div className="left">
        <h2>RULES of the Tournament</h2>
        <i onClick={()=> handelText()} data-tip={`To read in ${english? 'Urdu':'English'} Click here`} className="fa fa-info-circle fa-2x" aria-hidden="true"></i>
       
        <ul className="rule-list">
        {english
            ? rules.map((rule, key) => <li key={key}> {rule} </li>)
            : rulesUrdu.map((rule, key) => <li key={key}> {rule} </li>)}
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
            Don't have an account? <Link onClick={() =>  window.scrollTo(0, 0)} to="/register">Register</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
