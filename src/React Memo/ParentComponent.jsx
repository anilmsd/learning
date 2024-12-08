//  When a functional component wrapped with React.memo receives new props, React will compare the new props
// with the previous ones. If the props have not changed, React will reuse the memoized rendering result,
//  skipping the re-rendering process for performance optimization.

import React, { useState } from "react";
// import ChildComponent from "./ChildComponent";
import { MemorizedComponent } from "./ChildComponent"; //comment this line to see the difference

export default function ParentComponent() {
  const [value, setValue] = useState(0);

  const [data, setData] = useState(0);

  return (
    <div>
      <button onClick={() => setValue((value) => value + 1)}>
        React.memo Increment
      </button>
      <MemorizedComponent value={value} />
      {/* <ChildComponent value={value}/> */}

      <br />
      <button onClick={() => setData((data) => data + 1)}>
        Noraml Incrememt
      </button>
      {data}
    </div>
  );
}
