import React, { useState } from "react";

export default function Usestate() {
  const [value, setValue] = useState("");
  const [enteredValue, setEnteredValue] = useState("");
  const [list, Setlist] = useState([""]);

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
      Usestate Component <br />
      <br />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="enter a number"
      />
      <input type="text" value={value} placeholder="Duplicate" />
      <button onClick={() => setEnteredValue(value)}>Submit</button>
      <button onClick={() => Setlist([...list, value])}>Add To List</button>
      <input type="text" value={enteredValue} placeholder="entered value is" />
      List items are :
      {list &&
        list.map((value, index) => {
          return <div key={index}>{value}</div>;
        })}
    </div>
  );
}
