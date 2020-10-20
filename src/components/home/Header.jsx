import React, { useState } from "react";
import logo from "../../images/logo1.png";
import "./style.css";
import { useNavigate } from "react-router-dom";
import cx from "classname";

const Header = () => {
  const navigate = useNavigate();
  const [color, setColor] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  var menus = cx({
    menu: true,
    mobileMenu: menuOpen,
  });

  const handelMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };
  const handelMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <div className="header">
      <i
          onClick={() => handelMenuOpen()}
          className="menu-btn fa fa-bars fa-2x"
          aria-hidden="true"
        ></i>
      <div className="logo">
        <img
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
          src={logo}
          alt="logo-esports-global"
        />
        
      </div>
      <div className={menus}>
        <ul onClick={() => handelMenuClose()}>
          <i
            onClick={() => handelMenuClose()}
            className="close-btn fa fa-times"
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
