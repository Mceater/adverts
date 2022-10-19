function AdList ({data}) {
    return (
        <div className="ad-list">
            <div className="list-img">
                <img src={"/uploads/"+ data.img} alt="User" />
            </div>
            <p>{data.url}</p>
            <p>`${data.getUTCDate()}`</p>
            <p>{data.endDate}</p>
            <button>Edit</button>
            <button>Extend</button>
        </div>
    )
}

export default AdList