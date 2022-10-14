import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const url = "http://localhost:3001";
const registerRoute = `${url}/api/auth/register`;

function Register() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate();
    }
  }, [navigate]);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  //   const handleValidation = () => {
  //     const { password, confirmPassword, username } = values;
  //     if (password !== confirmPassword) {
  //       return false;
  //     } else if (username.length < 3) {
  //       return false;
  //     } else if (password.length < 8) {
  //       return false;
  //     }

  //     return true;
  //   };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { username, password } = values;
    const { data } = await axios.post(registerRoute, {
      username,
      password,
    });
    if (data.status === false) {
      alert("already Taken");
    }

    if (data.status === true) {
      alert("Register Success!");
      localStorage.setItem("user", JSON.stringify(data.user));
    }

    navigate("/login");
  };

  return (
    <>
      <div className="container">
        <img className="main-logo" src={"/images/find-It.png"} />
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <h1>Register</h1>
          <div className="input-group">
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={(e) => handleChange(e)}
            />
          <br></br>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
   
          <br></br>
          <button className="submit-btn" type="submit">Create User</button>
          <br></br>
          </div>
          <span>
            Already have an account? <Link to="/login">Login.</Link>
          </span>
        </form>
      </div>
    </>
  );
}

export default Register;
