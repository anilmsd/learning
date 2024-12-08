import React from "react";

const ChildComponent = ({ value }) => {
  console.log("child component rendered");
  return <div>{value}</div>;
};

const MemorizedComponent = React.memo(ChildComponent); //comment this line to see the difference

export { MemorizedComponent, ChildComponent };
// export default ChildComponent;
