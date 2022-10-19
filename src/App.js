import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import Service from "./services/Service";
import Home from './pages/Home'
import AboutUs from './pages/AboutUs';
import UserPage from './pages/UserPage';
import Services from './pages/Services';
import Price from './pages/Price';

function App() {
  const [data, setData] = useState([])
  const { isAuthenticated, user } = useAuth0();

  const getData = () => {
      Service.getAll()
      .then( obj => {
          setData(obj)
      })
  }

  useEffect(() => {
    getData()
  })


  return (
    <div className='container'>
      <Router>
        <div className="footer">
            <ul>
              <Link key="b" to='/'><img className='logo' src="/logo/Find-It-White.png" alt="User"/></Link>
              <li><Link key="b" to='about-us'>About Us</Link></li>
              <li><Link key="c" to='services'>Services</Link></li>
              <li><Link key="d" to='price'>Price</Link></li>
            </ul>
        </div>

        <Routes>
          <Route path="/" element={<Home data={data} user={user} isAuthenticated={isAuthenticated}/>}/>
          <Route path="/userpage" element={<UserPage data={data} user={user} isAuthenticated={isAuthenticated}/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/price" element={<Price/>}/>
        </Routes>
      </Router>
    </div>
  );
}


export default App;
