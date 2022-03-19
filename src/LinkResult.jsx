import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function LinkResult({ inputValue }) {
  const [result, setResult] = useState("");
  const [copy, setCopy] = useState(false);

  const fetchApi = async () => {
    const api = "https://api.shrtco.de/v2/shorten?url=";
    const result = await axios.get(api + inputValue);
    const { short_link } = result.data.result;

    setResult(short_link);
  };

  useEffect(() => {
    if (inputValue.length) {
      fetchApi();
    }
  });

  return (
    <div className="result">
      <>
        {result !== "" ? (
          <Fragment>
            <p>{result}</p>

            <CopyToClipboard text={result} onCopy={() => setCopy(true)}>
              <button className={copy ? "copy" : ""}>Copy To Clipboard</button>
            </CopyToClipboard>
          </Fragment>
        ) : (
          ""
        )}
      </>
    </div>
  );
}

export default LinkResult;
