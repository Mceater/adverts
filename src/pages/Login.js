import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Redirect, Routes, Route, useNavigate } from "react-router-dom";
import UserPage from "../pages/UserPage";

const url = "http://localhost:3001";
const loginRoute = `${url}/api/auth/login`;

export default function Login() {
  const navigate = useNavigate();

  const login = ({ username, password }) => {
    return axios
      .post(loginRoute, { username, password })
      .then((response) => response.data);
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate();
    }
  }, []);

  const [values, setValues] = useState({ username: "", password: "" });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    const { username, password } = values;
    if (username === "") {
      alert("User and Password is required.");
      return false;
    } else if (password === "") {
      alert("User and Password is required.");
      return false;
    }
    return true;
  };

  const formHandler = (event) => {
    event.preventDefault();
    console.log("loginform submitted");
    if (validateForm()) {
      const { username, password } = values;
      login({ username, password })
        .then((data) => {
          if (data.status === false) {
            alert("User or Password Invalid.");
          }
          if (data.status === true) {
            localStorage.setItem("user", JSON.stringify(data.user));
            alert("Successfully Logged In!");
            console.log("Success");
            navigate("/userpage");
          }
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={formHandler}>
        <img src="/images/avatar.png" alt="avatar" />
        <h2>Login</h2>
        <div className="input-group">
          <input
            type="text"
            name="username"
            required
            onChange={(e) => handleChange(e)}
          />
          <label>User Name</label>
        </div>
        <div className="input-group">
          <input
            type="password"
            name="password"
            required
            onChange={(e) => handleChange(e)}
          />
          <label>Password</label>
        </div>
        <input className="submit-btn" type="submit" value="Login" />
        <div className="link">
          <Link to="/register">Sign Up </Link>
          <a href="#">Forgot Password?</a>
        </div>
      </form>

      <div className="forgot-pw">
        <form className="form">
          <a href="#" className="close">
            &times;
          </a>
          <h2>Reset Password</h2>
          <div className="input-group">
            <input type="text" name="email" required />
            <label for="email">Enter your email</label>
          </div>
          <input
            // onClick={navigateToUserPage}
            className="submit-btn"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
      {/* <div className="footer">
                <ul className="footer-containts">
                    <li><a href="About-Us">About Us</a></li>
                    <li><a href="Services">Services</a></li>
                    <li><a href="Price">Price</a></li>
                </ul>
            </div> */}
    </div>
  );
}
