import { useState } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import Service from '../services/Service'
import '../css/AdForm.css';



const AdForm = ({user}) => {

    const [mode, setMode] = useState('')
    const { getAccessTokenSilently } = useAuth0()
    

    const initialState = {userId: user.sub, adPhoto: null, url: '', startDate: '', endDate: '', categories: []}
    const [formInfo, setFromInfo] = useState(initialState)
    

    function updateField (e){
        const name = e.target.attributes.name.value
        if(name === 'file'){
            setFromInfo({...formInfo, adPhoto: e.target.files[0]})
            
        }else if(name === 'url'){
            setFromInfo({...formInfo, url: e.target.value})
        } else if (name === 'startDate'){
            setFromInfo({...formInfo, startDate: e.target.value})
        } else if (name === 'endDate'){
            setFromInfo({...formInfo, endDate: e.target.value})
        } else if (name === 'categories'){
            setFromInfo({...formInfo, categories: e.target.value.split(' ')})
        }
    }

    async function formHandler (e){
        e.preventDefault()
        const token = await getAccessTokenSilently()
        console.log("Form submitted", formInfo, token)

        const formData = new FormData();
        formData.append('adPhoto', formInfo.adPhoto)
        formData.append('userId', formInfo.userId)
        formData.append('url', formInfo.url)
        formData.append('startDate', formInfo.startDate)
        formData.append('endDate', formInfo.endDate)
        formData.append('categories', formInfo.categories)
        
        Service.createAd(formData)
    }

    if(mode === 'AdForm') {
        return(
            <div className="AddForm">
                <form onSubmit={formHandler}>
                    <label>Select Your Ad Img</label>
                    <input type='file' name="file" onChange={updateField}/>

                    <label>Enter Your URL</label>
                    <input name='url' onChange={updateField}/>

                    <label>From</label>
                    <input type="date" name='startDate' onChange={updateField}/>

                    <label>To</label>
                    <input type="date" name='endDate' onChange={updateField}/>

                    <label>Caterogies</label>
                    <input name='categories' onChange={updateField}/>

                    <input type="submit" value="Save"/>
                </form>
                <button onClick={() => {setMode('Add')}}>Cancel</button>
            </div>
        )
    }
    
    return(
        <div className='Add'>
            <button className="AddBtn" onClick={() => {setMode('AdForm')}}>Add Your Ad</button>
        </div>
    )
}

export default AdForm