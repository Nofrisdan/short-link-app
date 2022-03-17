import React from "react";
import "./app.css";
import InputShortener from "./Component/InputShortener";
import BackgroundAnimate from "./Component/BackgroundAnimate";
function App() {
  return (
    <div className="container">
      <InputShortener />
      <BackgroundAnimate />
    </div>
  );
}

export default App;
