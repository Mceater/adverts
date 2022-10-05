import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function Home () {
    return(

        <div className="container">
            <TransformWrapper>
                <TransformComponent>
                <div className="grid-container">

                <div className="logo-container">
                    <img className="ad-logo" src="/images/logo_1.png" alt="logo1"/>
                </div>
                <div className="logo-container">
                    <img className="ad-logo" src="/images/logo_2.png" alt="logo1"/>
                </div>
                <div className="logo-container">
                    <img className="ad-logo" src="/images/logo_3.png" alt="logo1"/>
                </div>
                <div className="logo-container">
                    <img className="ad-logo" src="/images/logo_1.png" alt="logo1"/>
                </div>
                <div className="logo-container">
                    <img className="ad-logo" src="/images/logo_2.png" alt="logo1"/>
                </div>
                <div className="logo-container">
                    <img className="ad-logo" src="/images/logo_2.png" alt="logo1"/>
                </div>
                <div className="logo-container">
                    <img className="ad-logo" src="/images/logo_2.png" alt="logo1"/>
                </div>

                </div>
                </TransformComponent>
            </TransformWrapper>
            
        </div>
        

        
    ) 
}

export default Home