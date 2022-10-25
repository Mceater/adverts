import { useState } from "react"

import '../css/AdListStyle.css';

const AdList = ({data, function_edit, function_extend}) => {

    const [mode, setMode] = useState ('')
    const endDate = data.endDate.split("T", 1)

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

    function deleteItem(){
        setMode('delete')
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
                <p>{endDate}</p>
                <button type="submit">Save</button>
            </form>
            
            <button onClick={cancel}>Cancel</button>
            <button onClick={deleteItem}>Delete</button>
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
                <p>{endDate}</p>
            </div>
            
            <button onClick={edit}>Edit</button>
            <button onClick={extend}>Extend</button>
        </div>
    )
}

export default AdList

/* 
) 
*/