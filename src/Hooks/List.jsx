import React, { useEffect, useState } from "react";

export default function List({ getItems }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("child component rendered")
    setData(getItems());
  }, [getItems]);
  return (
    <div>
      {data &&
        data.map((value, index) => {
          return <div key={index}>{value}</div>;
        })}
    </div>
  );
}
