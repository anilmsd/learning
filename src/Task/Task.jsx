import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function Task() {
    const navigate=useNavigate();

  return (
    <div>
        <button onClick={()=>navigate("/todolist")}>ToDO List</button>
        <button onClick={()=>navigate("/task2")}>Task 2</button>
    </div>
  )
}
