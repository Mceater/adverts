import '../styles/home-page.css'
import Ad from '../components/Ad'
import { useState } from 'react';
import LoginBtn from '../components/LoginBtn'

let n = 0

function HomePage ({data, isAuthenticated, user}){
    const [slice, setSlice] = useState(0)
    const [search, setSearch] = useState("")

    function randomStyle (){
        const style = {
            "top": "10%",
            "left": "10%",
            "scale": "2"
        }

        style.top = Math.floor(Math.random()*(90 - 20)) + 10 + "%"
        style.left = Math.floor(Math.random()*(90 - 20)) + 10 + "%"
        style.scale = (Math.random() * (2.5 - 1) + 1).toFixed(1) + ''

        return(
            style
        )
    }
    
    window.addEventListener('wheel', (e) => {
        if(e.deltaY > 0){
            n+=0.1
        }
        else {
            if(n<0){
                n=0
            }
            else {
                n-=0.1
            }
        }
        setSlice(n)
    })

    return (
        <div className='home'>

            <div className="search">
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={(event) => {
                    setSearch(event.target.value);
                }}/>
            </div>

            <LoginBtn isAuthenticated={isAuthenticated} user={user}/>
            {data.slice(slice, slice+8)
                .filter((ad) => {
                    if (search === "") {
                      return ad;
                    } else{ 
                        for(let i=0; i<ad.categories.length; i++)
                        {
                        if(ad.categories[i].toLowerCase().includes(search.toLowerCase())){
                            return ad
                        }
                    }}return undefined})
                .map(ad => 
                <Ad key={ad.id} data={ad} style={randomStyle()}/>
            )}
        </div>
    )
}

export default HomePage;