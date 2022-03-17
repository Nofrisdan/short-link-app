import React, { Fragment } from "react";

export default function InputShortener() {
  return (
    <Fragment>
      <div className="inputContainer">
        <h1>
          URL <span>Shortener</span>
          <div>
            <input type="text" placeholder="Paste URL Kamu disini" />
            <button type="button">Shorten</button>
          </div>
        </h1>
      </div>
    </Fragment>
  );
}
