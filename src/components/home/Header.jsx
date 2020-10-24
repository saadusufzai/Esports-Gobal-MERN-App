import React, { useState,useEffect } from "react";
import logo from "../../images/logo1.png";
import "./style.css";
import { useNavigate,Link } from "react-router-dom";
import cx from "classname";

const Header = ({isAuthenticated,user}) => {
  const navigate = useNavigate();
  const [color, setColor] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled , setScrolled] = useState(false);


  useEffect(() => {
    window.addEventListener('scroll', handelScroll)
  })

  const handelScroll = ()=>{
    const offset=window.scrollY;
    if(offset > 300 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
    
  }
  console.log(scrolled);

  var menus = cx({
    menu: true,

    mobileMenu: menuOpen,
  });

  let header = cx({
    header: true,
    scroll:scrolled
  })

  const handelMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };
  const handelMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <div className={header}>
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
      {/* <h2 className="title"  >ESPORTS GLOBAL</h2> */}
      <div  className={menus}>
        <ul onClick={() => handelMenuClose()}>
          <i
            onClick={() => handelMenuClose()}
            className="close-btn fa fa-times"
            aria-hidden="true"
          ></i>

          <li>
            <Link onClick={() =>  window.scrollTo(0, 0)}  to="/">HOME</Link>
          </li>
          <li>
            <Link onClick={() =>  window.scrollTo(0, 0)} to="/about">About</Link>
          </li>
          <li>
            <Link onClick={() =>  window.scrollTo(0, 0)} to="/tournaments">TOURNAMENTS</Link>
          </li>
          <li>
            <Link onClick={() =>  window.scrollTo(0, 0)} to={isAuthenticated? `/login/${user.id}` : "/login"}>{isAuthenticated? 'Profile':'Login'}</Link>
          </li>
          <li style={{ background: "red" }} className="btn">
            <Link
              onClick={() =>  window.scrollTo(0, 0)}
              onMouseEnter={() => setColor(true)}
              onMouseLeave={() => setColor(false)}
              style={{ color: `${color ? "#000" : "#fff"}` }}
              to="/register"
            >
              Register Now
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
