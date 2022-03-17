import React, { useState, Fragment } from "react";
import axios from "axios";

function App() {
  return (
    <Fragment>
      <div className="container text-center">
        <h1>URL Shortener</h1>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Masukkan URL Anda"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2">
              @example.com
            </span>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
