import { useState, useEffect } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import ShortenerAPI from "../service/ShortenerAPI";
import '../styles/url-shortener.css';

const Urlshortener = () => {
  const [link, setLink] = useState("");
  const [short, setShort] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getLJink = async () => {
    try {
      setLoading(true);
      await ShortenerAPI.get(`shorten?url=${link}`).then((response) => {
        setShort(response.data.result.short_link);
        console.log(response.data.result.short_link);
      });
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    getLJink();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [copied]);

  if (loading) {
    return (
        <div className="shortener">
            <p className="noData">Loading...</p>
        </div>
    );
  }
  if (error) {
    return (
        <div className="shortener">
            <p className="noData">Invalid URL. Please refresh the page and Try Again.</p>
        </div>
    );
  }

  return (
    <form className="shortener">
      <h2>URL Shortener</h2>
      <div>
        <input
          className="url-input"
          type="text"
          placeholder="Enter your URL"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <input
          className="urlbtn"
          type="submit"
          value="Shorten URL"
          onClick={handleClick}
        />
        {/* <button onClick={handleClick}>shorten</button> */}
      </div>

      {short && (
        <div className="result">
          <p className="url-result">https://{short}</p>
          <CopyToClipboard text= {short} onCopy={() => setCopied("https://"+{short})}>
            <button className={copied ? "copied" : ""}>
              Copy to Clipboard
            </button>
          </CopyToClipboard>
        </div>
      )}
    </form>
  );
};

export default Urlshortener;
