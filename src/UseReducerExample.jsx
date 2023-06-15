import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
  }
}

function UseReducerExample() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      Count: {state.count}
      {/* ACtion : { type: "decrement", payload: 20 } */}
      <button onClick={() => dispatch({ type: "decrement", payload: 20 })}>
        -
      </button>
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        +
      </button>
    </>
  );
}

export default UseReducerExample;
