import React, { Fragment, useState } from "react";

export default function InputShortener({ setinputValue }) {
  const [Value, setValue] = useState("");
  const handleClick = () => {
    setinputValue(Value);
    setValue("");
  };

  // api shorten=> https://api.shrtco.de/v2/shorten?url=
  return (
    <Fragment>
      <div className="inputContainer">
        <h1>
          URL <span>Shortener</span>
          <div>
            <input
              type="text"
              placeholder="Paste URL Kamu disini"
              value={Value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button type="button" onClick={handleClick}>
              Shorten
            </button>
          </div>
        </h1>
      </div>
    </Fragment>
  );
}
