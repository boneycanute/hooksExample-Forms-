import React, { useEffect } from "react";

function UnmountableComponent2() {
  // Simulating componentWillUnMount
  useEffect(() => {
    return function cleanUpFunction() {
      console.log("Component unMounted😭");
    };
  }, []);
  return (
    <div>
      UnmountableComponent2
      <p>
        For siumlating componentWillUnmount , make the first parameter , i.e the
        function to return another function . this returning function will only
        be executed when the component unmounts
      </p>
    </div>
  );
}

export default UnmountableComponent2;
