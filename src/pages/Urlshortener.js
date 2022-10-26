import { useState, useEffect } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import ShortenerAPI from "../services/ShortenerAPI";

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
        // console.log(response.data.result.short_link);
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

  // useEffect(() => {
  //   if (link.length) {
  //     getLJink();
  //   }
  // }, [link]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [copied]);

  if (loading) {
    return <p className="noData">Loading...</p>;
  }
  if (error) {
    return <p className="noData">Invalid URL. Please Try Again.</p>;
  }

  return (
    <form className="form">
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
          className="btn"
          type="submit"
          value="Shorten URL"
          onClick={handleClick}
        />
        {/* <button onClick={handleClick}>shorten</button> */}
      </div>

      {short && (
        <div className="result">
          <p className="url-result">{short}</p>
          <CopyToClipboard text={short} onCopy={() => setCopied(true)}>
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
