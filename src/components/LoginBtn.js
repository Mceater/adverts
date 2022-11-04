import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom'
import '../styles/login-btn.css'

function LoginBtn ({user, isAuthenticated, userPage}){
    const { loginWithRedirect, logout } = useAuth0();

    if(userPage === true){
        return (
            <div className="btn-wrapper">
              <button onClick={() => logout()} className="login-btn">
                Logout
              </button>
            </div>
        )
    }

    return (
        <div>
            {!isAuthenticated && (
               <div className="btn-wrapper">
                    <button onClick={() => loginWithRedirect()} className="login-btn">
                        Login
                    </button>
                </div> 
            )}
            {isAuthenticated && (
                <Link key="b" to="/userpage">
                    <div className="btn-wrapper">
                        <button className="login-btn">{user.name}</button>
                    </div>
                </Link>
            )}
        </div>
    )
}

export default LoginBtn