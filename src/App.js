import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState(localStorage.getItem("text") || "");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const saveText = () => {
    localStorage.setItem("text", text);
  };

  return (
    <div className="App">
      <div className="box">
        <div className="field">
          <div className="control">
            <textarea
              onChange={handleChange}
              value={text}
              className="textarea is-large"
              placeholder="Notes..."
            />
          </div>
        </div>
        <button
          className="button is-large is-primary is-active"
          type="submit"
          onClick={saveText}
        >
          Save
        </button>
        <button className="button is-large" onClick={() => setText("")}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;
