import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useEffect, useState } from 'react';
import service from '../service/Service';

function Home () {

    const [ads, setAds] = useState([])

    const getAds = () => {
        service.getAll()
        .then(obj => {
            setAds(obj)
        })
    }

    useEffect(() => {
        getAds()
    })

    return(

        <div className="container">
            <div className="login">
                <input onClick={""} className="btn" type="button" value="Login"/>
            </div>
            <TransformWrapper>
                <TransformComponent>
                <div className="grid-container">
                    {
                        ads.map( ad => 
                            <div key={ad.id} className="logo-container glass">
                                <img className="ad-logo" src={"/images/"+ad.img} alt="logo1"/>
                            </div>
                        )
                    }
                </div>
                </TransformComponent>
            </TransformWrapper>
            
            <div className="footer">
                <ul className="footer-containts">
                    <li><a href="About-Us">About Us</a></li>
                    <li><a href="Services">Services</a></li>
                    <li><a href="Price">Price</a></li>
                </ul>
            </div>
        </div>
        

        
    ) 
}

export default Home