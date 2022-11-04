import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons'

function Footer ({isAuthenticated}){
    
    return(
        <div className="footer">
            {!isAuthenticated && (
                <div>
                <Link key='a' to='/'><img className='logo' src="/logo-white.png" alt="User"/></Link>
                <ul>
                <li><Link key="b" to='about-us'>About Us</Link></li>
                <li><Link key="c" to='services'>Services</Link></li>
                <li className="nav-item nav-link">   
                    <a href="https://www.facebook.com/people/Find-it/100087678420437/?is_tour_dismissed=true">
                    <FontAwesomeIcon icon={faFacebook} className="linked-icon"/> 
                    </a> 
                    <a href="https://www.instagram.com/findittss/">
                    <FontAwesomeIcon icon={faInstagram} className="linked-icon"/> 
                    </a> 
                    <a href="https://twitter.com/FindItWebsite">
                    <FontAwesomeIcon icon={faTwitter} className="linked-icon"/> 
                    </a> 
                    </li>
                </ul>
            </div>
            )}
            {isAuthenticated && (
                <div>
                    <Link key='a' to='/'><img className='logo' src="/logo-white.png" alt="User"/></Link>
                    <ul>
                    <li><Link key="b" to='about-us'>About Us</Link></li>
                    <li><Link key="c" to='services'>Services</Link></li>
                    <li><Link key="d" to='price'>Price</Link></li>
                    </ul>

                </div>
                
            )}
        </div>
    ) 
}

export default Footer;