import LoginBtn from '../components/LoginBtn';
import Urlshortener from '../components/UrlShortener';
import UserData from '../components/UserData';
import AddData from '../components/AddData';
import '../styles/user-page.css';
import { useEffect } from 'react';

function UserPage ({user, data, isAuth}){

    let userData = [];

    if (user !== undefined) {
        userData = data.filter((obj) => obj.userId === user.sub);
    }

    return (
        <div className='home'>
            {isAuth && (
                <div>
                    <div className='header'>
                        <div className="userPhoto">
                            <img src={user.picture} alt="User" />
                        </div>
                        <h1>{user.name}</h1>
                    </div>
                    <LoginBtn userPage={true}/>
                    <Urlshortener/>
                    <UserData data={userData} />
                </div>            
            )}
        </div>
    )
}

export default UserPage;