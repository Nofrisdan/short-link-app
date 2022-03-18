import React from "react";
import "./app.css";
import InputShortener from "./Component/InputShortener";
import BackgroundAnimate from "./Component/BackgroundAnimate";
import Copyright from "./Component/Copyright";
import LinkResult from "./LinkResult";
function App() {
  return (
    <div className="container">
      <InputShortener />
      <BackgroundAnimate />
      <Copyright />
      <LinkResult />
    </div>
  );
}

export default App;
