import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";

import Logo from "../../img/tour/logo.png";
import NavBg from "../../img/icon/navbar.png";
import Profil from "../../img/profle/img1.png";
import DropDown from "../DropDown/DropDown";

import "../Header/Header.css";
import "./Navbar.css";

const Navbar = ({ setModalLogin, setModalRegister }) => {
  const [isDropdown, setDropDown] = useState(false);
  const [userPic, setPic] = useState([]);
  let history = useHistory();
  const user = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
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
  const getUser = async () => {
    try {
      const result = await axios.get(
        `http://localhost:5001/api/v1/user/${user}`
      );
      const resData = result.data.data;
      setPic(resData);
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //   getUser();
  // }, []);

  return (
    <>
      <nav
        className="navbar navbar-light navBg"
        style={{
          background: `url(${NavBg} )`,
        }}
      >
        <div className="logoHome">
          <img className="logo" src={Logo} onClick={handleClick} />
        </div>
        <span class="fa fa-bars menu-icon"></span>
        <div className="auth">
          {!token ? (
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
            <div className="iconPic">
              {!userPic.userImg ? (
                <img src={Profil} alt="" onClick={() => showDropDown()} />
              ) : (
                <img
                  src={`http://localhost:5001/uploads/${userPic.userImg}`}
                  alt=""
                  onClick={() => showDropDown()}
                />
              )}
            </div>
          )}
        </div>
      </nav>
      {isDropdown && <DropDown showDropDown={showDropDown} logOut={logOut} />}
    </>
  );
};

export default Navbar;
