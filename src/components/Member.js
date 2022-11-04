import '../styles/member.css'

function Member ({name, SID, image, about}){
    return(
        <div className='member left'>
            <div>
                <img className='member-img left' src={"/images/" + image} alt="User"/>
            </div>
            <div className='caption'>
                {name}  {"("+SID+")"}
            </div>
            <div className='about-text left'>
                {about}
            </div>
        </div>
    )
}
export default Member;