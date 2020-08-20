import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useQuery, useMutation, queryCache } from "react-query";
import Palm from "../../img/tour/palm.png";
import Hibiscus from "../../img/tour/hibiscus.png";
import "./Login.css";

const Login = ({ handleLogin, setModalLogin, setModalRegister }) => {
  let history = useHistory();
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const { email, password } = formLogin;

  const handleChange = (event) => {
    setFormLogin({ ...formLogin, [event.target.name]: event.target.value });
  };

  const loginSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5001/api/v1/login",
        formLogin
      );
      localStorage.setItem("token", res.data.data.token);
      localStorage.setItem("userId", res.data.data.id);
      localStorage.setItem("userData", JSON.stringify(res.data.data));
      const token = localStorage.getItem("token");
      if (token) {
        handleLogin();
        history.push("/");
        // window.location.reload();
      }
    } catch (err) {
      const resError = err.response.data.error.message;
      setError(resError);
      console.log(err);
    }
  };

  return (
    <div className="login-page">
      <div className="login">
        <div className="palm">
          <img src={Palm} />
        </div>
        <div className="hibiscus">
          <img src={Hibiscus} />
        </div>
        <div className="closed" onClick={() => setModalLogin(false)}>
          X
        </div>
        <h1>Login</h1>
        {error && (
          <div className="my-3 alert alert-danger text-center">{error}</div>
        )}
        <form formLogin={formLogin}>
          <p>Email</p>
          <div className="input-group input-group-lg mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
          </div>
          <p>Password</p>
          <div className="input-group input-group-lg mb-3">
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
          </div>
          <Link to="/">
            <button type="submit" onClick={loginSubmit}>
              Login
            </button>
          </Link>
        </form>
        <p style={{ marginTop: 25 }}>
          Don't have an account ? Klik{" "}
          <span
            className="clickHere"
            onClick={() => (setModalLogin(false), setModalRegister(true))}
          >
            Here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
