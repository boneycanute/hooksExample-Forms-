import React, { useRef } from "react";

function UncontrolledComponentExample() {
  const inputElement = useRef();
  console.log("UnControlled Data : ", inputElement);
  return (
    <>
      <label>
        Name :
        <input ref={inputElement} />
        <button
          onClick={() => {
            console.log(inputElement.current.value);
          }}
        >
          Go
        </button>
      </label>
    </>
  );
}

export default UncontrolledComponentExample;
