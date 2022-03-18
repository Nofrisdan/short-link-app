import React from "react";
import "./app.css";
import InputShortener from "./Component/InputShortener";
import BackgroundAnimate from "./Component/BackgroundAnimate";
import Copyright from "./Component/Copyright";
function App() {
  return (
    <div className="container">
      <InputShortener />
      <BackgroundAnimate />
      <Copyright />
    </div>
  );
}

export default App;
