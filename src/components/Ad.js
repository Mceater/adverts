function Ad ({data, style}){

    return(
        <div className="ad-wrapper" style={style}>
            <a href={data.url}>
                <div className="hex">
                    <img className="ad-logo" src={"/uploads/" + data.img} alt="ad-logo"/>
                </div>
            </a>
            
        </div>
    )
}

export default Ad