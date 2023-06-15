import React, { useState } from "react";

function UseStateExample() {
  const [state, setState] = useState(123);
  const [stateAsObject, setStateAsObject] = useState({
    first: "QWERTY",
    second: "ZXCVBNM",
  });
  const [stateAsArray, setStateAsArray] = useState([1, 2, 3, 4, 5]);
  return (
    <div>
      <h1>UseStateExample</h1>
      <ul>
        <li>useState Hook is used to create state variables</li>
        <li>as Normally functional Components are stateless in nature</li>
      </ul>
      <h2>Syntax : useState(initialValue);</h2>
      <h2>Returns 1 Array , with 2 values </h2>
      <ul>
        <li>State Variable</li>
        <li>Setter Function </li>
      </ul>
      <h3>Value in Normal State Variable = {state}</h3>
      <h3>
        Value in Object State Variable : First = {stateAsObject.first} , Second
        = {stateAsObject.second}
      </h3>
      <h3>Value in Array State Variable : [{stateAsArray}]</h3>

      <p>
        Inorder to change the value of your state variable and re-render your
        component, it is important to use the SetterFunction() to do so.
      </p>
      <button
        onClick={() => {
          setState(456);
        }}
      >
        Change State of a normal state variable
      </button>
      <br />
      <button
        onClick={() => {
          setStateAsObject({
            ...stateAsObject,
            first: "ASDFGH",
            // second: "lkjh",
          });
        }}
      >
        Change the value of property "First" from object state variable
      </button>
      <br />
      <button
        onClick={() => {
          const copyOfArray = [...stateAsArray];
          copyOfArray[1] = 99;
          setStateAsArray(copyOfArray);
        }}
      >
        Change the second value of the array to "99"
      </button>
      <br />
    </div>
  );
}

export default UseStateExample;
