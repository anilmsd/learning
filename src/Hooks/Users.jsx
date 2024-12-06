import React, { useEffect } from "react";

export default function Users({data}){
    useEffect(()=>{
       console.log("Child componet cause re-render") 
    })
    return(
        <div>
            {data.name}
        </div>
    )
}