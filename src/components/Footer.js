import { Link } from 'react-router-dom'

function Footer ({isAuthenticated}){
    
    return(
        <div className="footer">
            {!isAuthenticated && (
                <div>
                <Link key='a' to='/'><img className='logo' src="/logo-white.png" alt="User"/></Link>
                <ul>
                <li><Link key="b" to='about-us'>About Us</Link></li>
                <li><Link key="c" to='services'>Services</Link></li>
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