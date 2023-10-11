import React, { useState } from "react";
import Output from "./Output";

const Greetings = () => {
  const [changedText, setChangedText] = useState(false);

  const changedTextHandler = () => {
    setChangedText(true);
  };
  return (
    <div>
      <h2>Hello world!</h2>
      {!changedText && <Output>It's good to see you!</Output>}
      {changedText && <Output>changed</Output>}
      <button onClick={changedTextHandler}>Change Text!</button>
    </div>
  );
};

export default Greetings;
