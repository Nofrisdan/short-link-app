import { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Swal from "sweetalert2";
function LinkResult() {
  const [result, setResult] = useState("https://url.cakdunsite/hyagsh");
  const [count, setCount] = useState("false");
  useEffect(() => {
    if (count == "true") {
      Swal.fire("copy", "", "success");
    }
  });
  return (
    <div className="result">
      <p>{result}</p>

      <CopyToClipboard text={result} onCopy={() => setCount("true")}>
        <button>Copy To Clipboard</button>
      </CopyToClipboard>
    </div>
  );
}

export default LinkResult;
