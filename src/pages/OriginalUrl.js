import axios from "axios";
import { useState, useEffect } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const OriginalUrl = ({ inputValue }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    inputValue(value);
    setValue("");
  };

  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      );
      setShortenLink(res.data.result.full_short_link);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   if (inputValue.length) {
  //     fetchData();
  //   }
  // }, [inputValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [copied]);
  console.log(shortenLink);

  if (loading) {
    return <p className="noData">Loading...</p>;
  }
  if (error) {
    return <p className="noData">Something wne t wrong :(</p>;
  }

  return (
    <form className="form">
      <h2>URL Shortener</h2>
      <div>
        <input
          className="url-input"
          type="text"
          placeholder="Enter your URL"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <input
          className="btn"
          type="submit"
          value="Shorten URL"
          onClick={handleClick}
        />
        {/* <button onClick={handleClick}>shorten</button> */}
      </div>

      {/* {shortenLink && ( */}
      <div className="result">
        <p className="url-result">{shortenLink}</p>
        <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
          <button className={copied ? "copied" : ""}>Copy to Clipboard</button>
        </CopyToClipboard>
      </div>
      {/* )} */}
    </form>
  );
};

export default OriginalUrl;
