import { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Swal from "sweetalert2";
function LinkResult() {
  const [result, setResult] = useState("https://url.cakdunsite/hyagsh");
  const [copy, setCopy] = useState(false);

  return (
    <div className="result">
      <p>{result}</p>

      <CopyToClipboard text={result} onCopy={() => setCopy(true)}>
        <button className={copy ? "copy" : ""}>Copy To Clipboard</button>
      </CopyToClipboard>
    </div>
  );
}

export default LinkResult;
