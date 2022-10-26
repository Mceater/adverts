import { useState } from "react"
import '../css/AdForm.css';

function AdForm () {

    const [mode, setMode] = useState('')

    if(mode === 'AdForm') {
        return(
            <div className="AddForm">
                <form>
                    <label>Enter Your URL</label>
                    <input/>

                    <label>From</label>
                    <input/>

                    <label>To</label>
                    <input/>

                    <label>Caterogies</label>
                    <input/>

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