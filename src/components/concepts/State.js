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
  const [likeNum, setLikeNum] = useState(0);
  const [paraColor, setParaColor] = useState("blue");



  return (
    <div>
      <input value={text} onChange={e=>setText(e.target.value)}/>
      <br />
      <img style={{width:'50px',height:'50px'}} src="https://upload.wikimedia.org/wikipedia/commons/1/13/Facebook_like_thumb.png" alt="This is a thumbs up icon" onClick={e=>setLikeNum(likeNum+1)}/>
      <span>{likeNum}</span>
      <p style={{color:paraColor}} onMouseOver={e=>setParaColor("red")} onMouseLeave={e=>setParaColor("blue")}>This should change color on hover</p>
    </div>
  );
}

export default State;
