import React from "react";
import ControlledComponentExample from "./ControlledComponentExample";
import UncontrolledComponentExample from "./UncontrolledComponentExample";

function ReactFormsExample() {
  return (
    <>
      <h1>ReactFormsExample</h1>
      <div style={{ display: "flex" }}>
        <div style={{ background: "cyan", flex: "0.5", padding: "10px" }}>
          <h1>Controlled Component</h1>
          <ControlledComponentExample />
        </div>
        <div style={{ background: "pink", flex: "0.5", padding: "10px" }}>
          <h1>Uncontrolled Component</h1>
          <UncontrolledComponentExample />
        </div>
      </div>
    </>
  );
}

export default ReactFormsExample;
