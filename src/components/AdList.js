import { useState } from "react"
import Service from '../service/Service'
import '../styles/ad-list.css';

const AdList = ({data}) => {

    const [mode, setMode] = useState ('')

    const edit = () => {
        setMode('edit')
        
    }
    
    function extend(){
        setMode('extend')
    }

    function save(){
        setMode('save')
        console.log(data)
    }

    function cancel(){
        setMode('')
    }

    function deleteAd () {
        Service.deleteData(data.id)
        .then(res => {
            console.log(res)
        })
    }

    function updateField(e){
        const url = e.target.value
        console.log(url)
    }

    if(mode === 'edit'){
        return(
            <div className="ad-list">
            <div className="list-img">
                <img src={"/uploads/"+ data.img} alt="User" />
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
