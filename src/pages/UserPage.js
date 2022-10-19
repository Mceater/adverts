import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import AdList from '../components/AdList'

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
                    <form className='form'>
                        <h2>URL Shortener</h2>
                        <input className='url-input' type='text' placeholder='Enter your URL'/>
                        <input className='btn' type='submit' value="Shorten URL"/>
                    </form>
                    <div className='form'>
                        <h2>Your List of Ads</h2>
                        <div className='list-of-ads'>
                            <div className='list-header'>
                                <h3>Logo</h3>
                                <h3>URL links</h3>
                                <h3>Started</h3>
                                <h3>Expire</h3>
                            </div>
                            {userData.map(obj => <AdList key={obj.id} data={obj}/>)}
                        </div>
                        
                    </div>
                </div>
            </div>
        )}
     </div>   
    )
}

export default Userpage