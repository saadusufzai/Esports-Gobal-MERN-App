import React, { useState } from "react";
import logo from "../../images/logo1.png";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [color, setColor] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
 

  const handelMenuOpen = () => {
    setMenuOpen(true);
  };
  const handelMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <div className="header">
      <div className="logo">
        <img
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
          src={logo}
          alt="logo-esports-global"
        />
        <i
          onClick={() => handelMenuOpen()}
          class="menu-btn fa fa-bars"
          aria-hidden="true"
        ></i>
      </div>
      <div
        style={{
          transform: `${ menuOpen ? "translateX(0)" : "translateX(-110)"}`,
        }}
        className="menu"
      >
        <ul>
          <i
            onClick={() => handelMenuClose()}
            class="close-btn fa fa-times"
            aria-hidden="true"
          ></i>

          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/tournaments">TOURNAMENTS</a>
          </li>
          <li style={{ background: "red" }} className="btn">
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
