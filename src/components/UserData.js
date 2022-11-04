import AdList from './AdList'
import AddData from './AddData';

import '../styles/user-data.css';

function UserData ({data, updateAdHandler}) {
    return(
        <div className='user-data'>
            <h2>Your Ads List</h2>
            <div className='list-of-ads'>
                {data.map(obj => <AdList key={obj.id} data={obj} updateAdHandler={updateAdHandler}/>)} 
                <AddData/>
            </div>
        </div>
    )
}

export default UserData;