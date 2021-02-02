import React, {useState } from "react";

const State = () => {
  return (
    <div className="main">
      <div className="mainDiv">
        <ul>
          <dt>useState is Unique to Functional Components</dt>
          <dd>
            Class components have a separate means of using and changing state.
          </dd>
          <dt>useState Uses Array Destructuring</dt>
          <dd>useState provides a state variable and a setState variable</dd>
          <dt>useState is a Hook</dt>
          <dd>useState is a hook baked into react.</dd>
          <dt>Triggers re-renders</dt>
          <dd>Like with prop changes, changing the state of a component re-renders the whole component.</dd>
        </ul>
        <StateExample/>
      </div>
    </div>
  );
};

function StateExample() {
  const [text, setText] = useState("initial value");

  return (
    <div>
      <input value={text} />
    </div>
  );
}

export default State;
