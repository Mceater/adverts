import { useState } from "react";

const OriginalUrl = ({ setInputValue }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setInputValue(value);
    setValue("");
  };

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
    </form>
  );
};

export default OriginalUrl;
