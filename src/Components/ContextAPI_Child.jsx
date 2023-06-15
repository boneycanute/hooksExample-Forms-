import React, { useContext } from "react";
import { myContext } from "./ContextAPI_parent";

function ContextAPI_Child() {
  const data = useContext(myContext);
  return (
    <div>
      <p>ContextAPI-Child using hook: {data}</p>
      <myContext.Consumer>
        {(value) => {
          return <p>ContextAPI-Child using Consumer Component: {value} </p>;
        }}
      </myContext.Consumer>
    </div>
  );
}

export default ContextAPI_Child;
