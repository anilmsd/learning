import React, { useCallback, useState } from "react";
import List from "./List";

export default function Usecallback(){

    const [value , setValue]=useState(0);
    const [count , setCount]=useState(1);

    const getItems=useCallback(()=>{
        return [count , count+1 , count+2]
    },[count]);

    
    // const getItems=()=>{
    //     return [count , count+1 , count+2]
    // };


    return (
        <div>
            <input type="number" value={value} onChange={(e)=>setValue(e.target.value)} placeholder="Enter a number " /><br/>
            
            <button value={count} onClick={()=>setCount(count =>count+1)} >Usecallback</button>
            <List getItems={getItems} />
        </div>
    )
}