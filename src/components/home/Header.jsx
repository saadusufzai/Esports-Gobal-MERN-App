import React, { useState } from "react";
import logo from "../../images/logo1.png";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [color, setColor] = useState(false);
  return (
    <div className="header">
      <div className="logo">
        <img
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
          src={logo}
          alt="logo-esports-global"
        />
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/tournaments">TOURNAMENTS</a>
          </li>
          <li className="btn">
            <a
              onMouseEnter={() => setColor(true)}
              onMouseLeave={() => setColor(false)}
              style={{ color: `${color ? "#000" : "#fff"}` }}
              href="/register"
            >
              Login/Register
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
