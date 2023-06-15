import React, { useEffect, useState } from "react";
import UnmountableComponent2 from "./UnmountableComponent2";

function UseEffectExample() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  // simulate componentDidMount()
  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  //simulate componentDidUpdate()
  useEffect(() => {
    console.log("Component Updated");
  }, [count]);

  return (
    <div>
      <h1>useEffect() takes 2 parameters</h1>
      <ul>
        <li>Function</li>
        <li>Array of dependencies</li>
      </ul>
      <h1>Counter : {count} </h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        ➕
      </button>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Toggle
      </button>
      {show && <UnmountableComponent2 />}
    </div>
  );
}

export default UseEffectExample;
