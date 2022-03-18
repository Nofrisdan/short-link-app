import { useState } from "react";

function LinkResult() {
  const [result, setResult] = useState("https://url.cakdunsite/hyagsh");

  return (
    <div className="result">
      <p>{result}</p>
      <button>Copy To Clipboard</button>
    </div>
  );
}

export default LinkResult;
