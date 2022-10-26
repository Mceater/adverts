import AdList from './AdList'
import AdForm from './AdForm'

function UserAds ({data}) {

    return (
        <div className='form'>
            <AdForm/>
            <h2>Your Ads List</h2>
            <div className='list-of-ads'>
                <div className='list-header'>
                    <h3>Logo</h3>
                    <h3>URL links</h3>
                    <h3>Expire</h3>
                </div>
                {data.map(obj => <AdList key={obj.id} data={obj}/>)} 
            </div>
            
        </div>
    )
}

export default UserAds