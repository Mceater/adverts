import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Auth0Context } from "auth0-react";

const Navbar = (isAuthenticated) => {
  const unauthenticatedNavBar = () => {
    return (
      <>
        <Link key="a" to="/">
          <li className="navbar-brand">
            <img src="Find-It-White.png" />
          </li>
        </Link>
        <Link key="b" to="about-us">
          <li className="nav-item nav-link">About Us</li>
        </Link>
      </>
    );
  };

  const authenticatedNavBar = () => {
    return (
      <>
        <Link class="navbar-brand" to="/">
          <img
            src="/logo/Find-It-White.png"
            alt="User"
            style={{ width: "50px", height: "35px" }}
          />
        </Link>
        <Link key="c" to="services">
          <li className="nav-item nav-link">Services</li>
        </Link>
        <Link key="d" to="price">
          <li className="nav-item nav-link">Price</li>
        </Link>
        <Link key="b" to="about-us">
          <li className="nav-item nav-link">About Us</li>
        </Link>
      </>
    );
  };
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{
        marginTop: "15px",
        flexDirection: "horizontal",
        justifyContent: "flex-start",
        padding: "10px",
        alignItems: "center",
      }}
    >
      <ul className="navbar-nav mr-auto">
        {!isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}
      </ul>
    </nav>
  );
};
export default Navbar;
