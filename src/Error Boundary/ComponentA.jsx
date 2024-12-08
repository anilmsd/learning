import React, { useEffect, useState } from "react";
import ErrorBoundary from "./ErrorBoundary";

export default function ComponentA() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 5) {
      throw new Error("App Crashed from Component A");
    }
  }, [count]);

  return (
    <center>
      <h3>Example for Error Boundary</h3>
      <span>It will throw an error when count is 5</span>
      <div>ComponentA : {count}</div>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
    </center>
  );
}
{
  /* Error boundary component will catch javascript errors anywhere in their child component
      tree and display a fallback UI. */
}

export const MainComponent = () => {
  return (
    <ErrorBoundary>
      <ComponentA />
    </ErrorBoundary>
  );
};
