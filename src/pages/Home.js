import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useEffect, useState } from "react";
import service from "../service/Service";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";

function Home() {
  const [ads, setAds] = useState([]);

  const getAds = () => {
    service.getAll().then((obj) => {
      setAds(obj);
    });
  };

  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  };


  const navigateToRegister = () => {
    navigate("/register");
  };

  //   const navigateHome = () => {
  //     // 👇️ navigate to /
  //     navigate("/");
  //   };

  useEffect(() => {
    getAds();
  });

  return (
    <div className="container">
      <div>
        <input
          onClick={navigateToLogin}
          className="btn"
          type="button"
          value="Login"
        />
                <input
          onClick={navigateToRegister}
          className="btn"
          type="button"
          value="Register"
        />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
      </div>

      <TransformWrapper>
        <TransformComponent>
          <div className="grid-container">
            {ads.map((ad) => (
              <div key={ad.id} className="logo-container glass">
                <img
                  className="ad-logo"
                  src={"/images/" + ad.img}
                  alt="logo1"
                />
              </div>
            ))}
          </div>
        </TransformComponent>
      </TransformWrapper>

      <div className="footer">
        <ul className="footer-containts">
          <li>
            <a href="About-Us">About Us</a>
          </li>
          <li>
            <a href="Services">Services</a>
          </li>
          <li>
            <a href="Price">Price</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
