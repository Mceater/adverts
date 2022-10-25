import { useAuth0 } from "@auth0/auth0-react";

import UserAds from '../components/UserAds';
import UrlShortener from "../components/UrlShortener";


function Userpage ({data, user, isAuthenticated}) {
    const { logout, loginWithRedirect } = useAuth0();
    let userData = []
    
    if(user !== undefined){
        userData = data.filter(obj => obj.userId === user.sub)
    }

    return(
     <div className="body">
        {!isAuthenticated && (
            <div>
                
                <h1>Please Login</h1>
                <div className='btn-wrapper'> 
                    <button onClick={() => loginWithRedirect()} className='login-btn'>Login</button>
                </div>
            </div>
        )}
        {isAuthenticated && (
            <div>
                <div className="header">
                    <div className="userPhoto">
                        <img src={user.picture} alt="User"/>
                    </div>
                    <h1>{user.name}</h1>
                    <div className='btn-wrapper'> 
                        <button onClick={() => logout()} className='login-btn'>Logout</button>
                    </div>
                </div>
                <div className='applications'>
                    <UrlShortener/>
                    <UserAds data={userData}/>
                </div>
            </div>
        )}
     </div>   
    )
}

export default Userpage