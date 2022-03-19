import React, { useState, useEffect } from "react";
import "./app.css";
import InputShortener from "./Component/InputShortener";
import BackgroundAnimate from "./Component/BackgroundAnimate";
import Copyright from "./Component/Copyright";
import LinkResult from "./LinkResult";
function App() {
  const [inputValue, setinputValue] = useState("");
  const [Count, setCount] = useState(0);

  return (
    <div className="container">
      <InputShortener setinputValue={(v) => setinputValue(v)} />
      <BackgroundAnimate />
      <LinkResult inputValue={inputValue} />
      <Copyright />
    </div>
  );
}

export default App;
