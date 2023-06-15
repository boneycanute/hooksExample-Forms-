import React, { useCallback } from "react";

const MyButton = React.memo(({ handleClick, name }) => {
  console.log(`${name} rendered`);
  return <button onClick={handleClick}>{name}</button>;
});

function UseCallbackExample() {
  console.log("counter rendered");
  const [countOne, setCountOne] = React.useState(0);
  const [countTwo, setCountTwo] = React.useState(0);
  return (
    <>
      {countOne} {countTwo}
      <MyButton
        handleClick={useCallback(() => {
          setCountOne(countOne + 1);
        }, [countOne])}
        name="button1"
      />
      <MyButton
        handleClick={useCallback(() => setCountTwo(countTwo + 1), [countTwo])}
        name="button2"
      />
    </>
  );
}
export default UseCallbackExample;
