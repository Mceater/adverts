function AdList ({data}) {

    const startDate = data.startDate.split("T", 1)
    const endDate = data.endDate.split("T", 1)


    return (
        <div className="ad-list">
            <div className="list-img">
                <img src={"/uploads/"+ data.img} alt="User" />
            </div>
            <p>{data.url}</p>
            <p>{startDate}</p>
            <p>{endDate}</p>
            <button>Edit</button>
            <button>Extend</button>
        </div>
    )
}

export default AdList