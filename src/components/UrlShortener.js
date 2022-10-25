function UrlShortener () {
    return(
        <form className='form'>
            <h2>URL Shortener</h2>
            <input className='url-input' type='text' placeholder='Enter your URL'/>
            <input className='btn' type='submit' value="Shorten URL"/>
        </form>
    )
}

export default UrlShortener;