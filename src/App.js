import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/main.css";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import Service from "./service/Service";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import UserPage from "./pages/UserPage";
import Services from "./pages/Services";
import PriceNoButton from "./pages/PriceNoButton";
import Price from "./pages/Price";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState([]);
  const { isAuthenticated, user } = useAuth0();

  const getData = async () => {
    await Service.getAll().then((obj) => {
      setData(obj);
    });
  };

  function updateAdHandler(updatedData) {
    setData(updatedData);
  }

  console.log(isAuthenticated);
  useEffect(() => {
    getData();
  }, []);
  return (
    <PayPalScriptProvider
      options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID }}
    >
      <div>
        <Router>
          <Footer isAuthenticated={isAuthenticated} />

          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  data={data}
                  user={user}
                  isAuthenticated={isAuthenticated}
                />
              }
            />
            <Route
              path="/userpage"
              element={
                <UserPage
                  user={user}
                  data={data}
                  isAuth={isAuthenticated}
                  updateAdHandler={updateAdHandler}
                />
              }
            />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/price" element={<PriceNoButton />} />
            <Route path="/pricePayPal" element={<Price />} />
          </Routes>
        </Router>
      </div>
    </PayPalScriptProvider>
  );
}

export default App;
