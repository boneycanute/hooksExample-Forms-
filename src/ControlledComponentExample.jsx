import React, { useState } from "react";

function ControlledComponentExample() {
  const [data, setData] = useState("");
  console.log("Controlled Comp Data : ", data);
  return (
    <>
      <label>
        Name :
        <input
          onChange={(e) => {
            setData(e.target.value);
          }}
        />
        <button
          onClick={() => {
            console.log(data);
          }}
        >
          Go
        </button>
      </label>
    </>
  );
}

export default ControlledComponentExample;
