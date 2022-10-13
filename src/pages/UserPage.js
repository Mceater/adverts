import { useNavigate } from "react-router-dom";

export default function UserPage() {
  const navigate = useNavigate();
  const navigateToMain = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <div className="header">
        <div className="user-pf">
          <img src="/images/avatar.png" alt="avatar" />
          <h2>Tom Hard</h2>
        </div>
        <input
          className="btn"
          type="button"
          value="Logout"
          onClick={navigateToMain}
        />
      </div>
      <div className="services">
        <div className="shortener effect2">
          <form>
            <h3>Input URL to be Shortened</h3>
            <input type="text" placeholder="Enter your URL" />
            <button type="submit">Shorten Now</button>
          </form>
        </div>
        <div className="ads effect2">
          <table>
            <tr>
              <th>Image</th>
              <th>URL</th>
              <th>Start Date</th>
              <th>Expiration</th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <td>
                <img src="/images/logo_2.png" />
              </td>
              <td>https://www.samsung.com/</td>
              <td>1/10/2022</td>
              <td>10/10/2022</td>
              <td>
                <input type="button" value="edit" />
              </td>
              <td>
                <input type="button" value="extend" />
              </td>
            </tr>
            <tr>
              <td>
                <img src="/images/logo_1.png" />
              </td>
              <td>https://www.apple.com/</td>
              <td>1/10/2022</td>
              <td>10/10/2022</td>
              <td>
                <input type="button" value="edit" />
              </td>
              <td>
                <input type="button" value="extend" />
              </td>
            </tr>
          </table>
        </div>
      </div>
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
