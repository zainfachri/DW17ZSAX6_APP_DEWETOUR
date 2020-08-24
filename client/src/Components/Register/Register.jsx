import React, { useState } from "react";
import { useQuery, useMutation, queryCache } from "react-query";
import axios from "axios";
import Palm from "../../img/tour/palm.png";
import Hibiscus from "../../img/tour/hibiscus.png";
import "./Register.css";

const Register = ({ setModalRegister, setModalLogin, handleLogin }) => {
  const [formRegister, setFormRegister] = useState({
    fullName: "",
    roleId: 2,
    email: "",
    password: "",
    phone: "",
    address: "",
  });
  const [error, setError] = useState("");
  const { fullName, roleId, email, password, phone, address } = formRegister;

  const handleChange = (event) => {
    setFormRegister({
      ...formRegister,
      [event.target.name]: event.target.value,
    });
  };

  const registerSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5001/api/v1/register",
        formRegister
      );
      localStorage.setItem("token", res.data.data.token);
      localStorage.setItem("userId", res.data.data.id);
      localStorage.setItem("userData", JSON.stringify(res.data.data));
      const token = localStorage.getItem("token");
      if (token) {
        handleLogin();
        // window.location.reload();
      }
    } catch (err) {
      const resError = err.response.data.error.message;
      setError(resError);
      console.log(err);
    }
  };

  return (
    <div className="register-page">
      <div className="register">
        <div className="palm">
          <img src={Palm} />
        </div>
        <div className="hibiscus">
          <img src={Hibiscus} />
        </div>
        <div className="closed" onClick={() => setModalRegister(false)}>
          X
        </div>
        <h1>Register</h1>
        {error && (
          <div className="my-3 alert alert-danger text-center">{error}</div>
          // <div class="p-3 mb-2 bg-danger text-white text-center">{error}</div>
          // <div class="alert alert-danger" role="alert">
          //   {error}
          // </div>
        )}
        <form formRegister={formRegister}>
          <p style={{ marginTop: 40 }}>Full Name</p>
          <div className="input-group input-group-lg mb-3">
            <input
              type="text"
              class="form-control"
              name="fullName"
              onChange={handleChange}
            />
          </div>
          <p>Email</p>
          <div className="input-group input-group-lg mb-3">
            <input
              type="email"
              class="form-control"
              name="email"
              onChange={handleChange}
            />
          </div>
          <p>Password</p>
          <div className="input-group input-group-lg mb-3">
            <input
              type="password"
              class="form-control"
              name="password"
              onChange={handleChange}
            />
          </div>
          <p>Phone</p>
          <div className="input-group input-group-lg mb-3">
            <input
              type="text"
              class="form-control"
              name="phone"
              onChange={handleChange}
            />
          </div>
          <p>Address</p>
          <div className="input-group input-group-lg mb-3">
            <input
              type="text"
              class="form-control"
              name="address"
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={registerSubmit}>
            Register
          </button>
        </form>
        <p style={{ paddingTop: 20 }}>
          Already have account ?{" "}
          <span
            className="clickHere"
            onClick={() => (setModalRegister(false), setModalLogin(true))}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
