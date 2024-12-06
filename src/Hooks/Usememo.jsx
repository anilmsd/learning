// useMemo is a hook provided by React that allows you to memoize the result of a function so
//  that it is only recomputed when one of its dependencies changes. This can be useful for 
//  optimizing performance in situations where you have expensive computations or calculations
//   inside a component that don't need to be recalculated on every render.


import React, {useMemo, useState } from "react";
import { UsersList } from "../CRUD/Users";
import Users from "./Users";

export default function Usememo() {
  const [list, setList] = useState(UsersList);

  const [count, setCount] = useState(0);

  const userDetails=useMemo(()=>list.map((user,index)=>{
    console.log("useMemo")
    return(
        <div key={user.id}>
            <Users  data={user} />
        </div>
    )
  }),[list])

//   const userDetails=list.map((user,index)=>{
//     console.log("re-render");
//     return(
//         <div key={user.id}>
//             <Users  data={user} />
//         </div>
//     )
//   })

  return (
    <div>
      count value is : {count} <br />
      <button onClick={() => setCount((count) => count + 1)}>
        Count Increment
      </button>
      {userDetails}
    </div>
  );
}
