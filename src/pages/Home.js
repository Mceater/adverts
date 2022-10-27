import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Ad from "../components/Ad";

function Home({ data, user, isAuthenticated }) {
  const { loginWithRedirect } = useAuth0();
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  let n = -1;

  const position = [
    { top: "15vh", left: "15%", scale: "2" },
    { top: "27vh", left: "27%", scale: "1.3" },
    { top: "63vh", left: "7%", scale: "3" },
    { top: "11vh", left: "40%", scale: "1.2" },
    { top: "46vh", left: "43%", scale: "3.3" },
    { top: "13vh", left: "64%", scale: "2" },
    { top: "25vh", left: "85%", scale: "2" },
    { top: "47vh", left: "70%", scale: "2.5" },
    { top: "75vh", left: "55%", scale: "1.7" },
    { top: "60vh", left: "90%", scale: "1.8" },
    { top: "75vh", left: "75%", scale: "1.5" },
  ];

  return (
    <div>
      <div id="myDropdown" className="dropdown-content">
        <input
          id="hey"
          type="text"
          placeholder="Search..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>

      {!isAuthenticated && (
        <div className="btn-wrapper">
          <button onClick={() => loginWithRedirect()} className="login-btn">
            Login
          </button>
        </div>
      )}
      {isAuthenticated && (
        <Link key="a" to="/userpage">
          <div className="btn-wrapper">
            <button className="login-btn">{user.name}</button>
          </div>
        </Link>
      )}

      <div className="body">
        {console.log(data)}
        {data
          .filter((ad) => {
            if (searchTerm == "") {
              return ad;
            } else if (
              ad.categories[0].toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return ad;
            }
          })
          .map((ad) => {
            n++;
            return <Ad style={position[n]} key={ad.id} data={ad} />;
          })}
      </div>
    </div>
  );
}

export default Home;
