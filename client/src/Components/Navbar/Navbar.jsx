import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import Logo from "../../img/tour/logo.png";
import NavBg from "../../img/icon/navbar.png";
import Profil from "../../img/profle/fachri.jpg";
import DropDown from "../DropDown/DropDown";

import "../Header/Header.css";
import "./Navbar.css";

const Navbar = ({ setModalLogin, setModalRegister }) => {
  const [isDropdown, setDropDown] = useState(false);
  let history = useHistory();

  const showDropDown = () => {
    setDropDown(!isDropdown);
  };
  const logOut = () => {
    localStorage.clear();
    history.push("/");
    window.location.reload();
  };
  const handleClick = () => {
    history.push("/");
    localStorage.removeItem("totalPrice");
  };
  return (
    <>
      <nav
        className="navbar navbar-light navBg"
        style={{
          background: `url(${NavBg} )`,
        }}
      >
        {/* <Link to="/"> */}
        <div className="logoHome">
          <img className="logo" src={Logo} onClick={handleClick} />
        </div>
        {/* </Link> */}
        <span class="fa fa-bars menu-icon"></span>
        <div className="auth">
          {
            !localStorage.getItem("token") ? (
              // {!isLogin && (
              <>
                <div>
                  <button
                    className="log"
                    type="submit"
                    onClick={() => setModalLogin(true)}
                  >
                    Login
                  </button>
                  <button
                    className="reg"
                    style={{ color: "#fff", marginRight: 100 }}
                    type="submit"
                    onClick={() => setModalRegister(true)}
                  >
                    Register
                  </button>
                </div>
              </>
            ) : (
              // )}
              // {isLogin && (
              <div className="iconPic">
                <img src={Profil} alt="" onClick={() => showDropDown()} />
              </div>
            )
            // )}
          }
        </div>
      </nav>
      {isDropdown && <DropDown showDropDown={showDropDown} logOut={logOut} />}
    </>
  );
};

export default Navbar;
