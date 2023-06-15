import { useMemo, useState } from "react";
const UseMemoExample = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);
  const calculation = useMemo(() => {
    return expensiveCalculation(count);
  }, [toggle]);
  const increment = () => {
    setCount(count + 1);
  };

  const toggleOperation = () => {
    setToggle((d) => !d);
    if ({ toggle }) {
      console.log("Toggled");
    }
  };
  return (
    <div>
      <div>
        <h1>Count: {count}</h1>
        <button onClick={increment}>+</button>
      </div>
      <h3>Expensive Operation : {calculation}</h3>
      <button onClick={toggleOperation}>Toggle</button>
    </div>
  );
};

// Operation that takes too much time

const expensiveCalculation = (num) => {
  console.log("Expensive Operation");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};
export default UseMemoExample;
