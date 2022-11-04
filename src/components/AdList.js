import { useEffect, useState } from "react"
import Service from '../service/Service'
import '../styles/ad-list.css';

const AdList = ({data, updateAdHandler}) => {

    const [mode, setMode] = useState ('')
    const [allAds, setData] = useState([])
    const [url, setUrl] = useState('')

    const edit = () => {
        setMode('edit')
        
    }

    function save(){
        setMode('save')
        Service.updateAd(data.id, url)
        console.log(data)
    }

    function cancel(){
        setMode('')
    }

    function deleteAd () {
        Service.deleteData(data.id)
        .then(res => {
            console.log(res)
            const updatedData = allAds.filter(product => product.id !== data.id)
            updateAdHandler(updatedData)
        })
    }

    function updateField(e){
        setUrl(e.target.value)
        console.log(url)
    }

    useEffect(() => {
        Service.getAll().then(
            obj => setData(obj)
        )
    })

    if(mode === 'edit'){
        return(
            <div className="ad-list">
            <div className="list-img">
                <img src={"/uploads/"+ data.img} alt="User"/>
            </div>
            <form className="adForm" onSubmit={save}>
                <input
                    className="adInput"
                    type='text'
                    name="URL"
                    placeholder={data.url}
                    onChange={updateField}
                />
                <button type="submit">Save</button>
            </form>
            
            <button onClick={cancel}>Cancel</button>
            <button onClick={deleteAd}>Delete</button>
        </div>
        )
    } 
    else if (mode === 'extend'){
        return(
            <div>extend</div>
        )
    }
    
    return (
        <div className="ad-list">
            <div className="list-img">
                <img src={"/uploads/"+ data.img} alt="User" />
            </div>
            <div className="ad-data">
                <p>{data.url}</p>
            </div>
            
            <button className="edit-btn" onClick={edit}>Edit</button>
        </div>
    )
}

export default AdList
