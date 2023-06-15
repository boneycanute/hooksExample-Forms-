import React, { createContext, useState } from "react";
import ContextAPI_Child from "./ContextAPI_Child";

export const myContext = createContext();
function ContextAPI_parent() {
  const [data, setData] = useState("Data from parent");
  return (
    <div>
      <h1>ContextAPI Steps</h1>
      <ul>
        <li>Create your context</li>
        <li>
          Provide your context
          <ol>
            <li>Specify the value to be provided</li>
          </ol>
        </li>
        <li>
          Consume your context
          <ol>
            <li>useContext(ContextYouHaveCreated)</li>
            <li>ContextYouHaveCreated.Consumer Component</li>
          </ol>
        </li>
      </ul>
      <myContext.Provider value={data}>
        <ContextAPI_Child />
      </myContext.Provider>
    </div>
  );
}

export default ContextAPI_parent;
