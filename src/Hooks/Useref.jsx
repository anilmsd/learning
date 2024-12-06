import React, { useEffect, useRef, useState } from "react";

export default function Useref(){
    const InputRef=useRef();
    const prevValue=useRef(null)
    const [initialState]=useState(5);
    const count=useRef({current:0});

    useEffect(()=>{
        //Accessing DOM elements
        InputRef.current.focus();
    },[])

    useEffect(()=>{
         //Storing previous values:
         prevValue.current=initialState;
         console.log(prevValue.current)
    },[initialState])

    //Managing mutable values without causing re-renders:
    const handleCount=()=>{
        count.current.current +=1;
        console.log("count value is : ",count.current);
    }

    // Preserving values between renders without causing re-renders:
    const [currentValue , SerCurrentValue]=useState(0);
    const prevCount=useRef();
    useEffect(()=>{
        prevCount.current=currentValue
    },[currentValue]);

    const prevCountValue=prevCount.current;

    return (
        <div>
            <input type="text" ref={InputRef} placeholder="autofocus" />     <br/>             
            {/* {prevValue.current !== null && <div>{prevValue.current}</div>}   */}
            <button onClick={handleCount} >Increment</button>

            <br/><br/>

            current value is : {currentValue}<br/>
            prevous value is : {prevCountValue}
            <button onClick={()=>SerCurrentValue(currentValue+1)} >Increase Count value </button>
            
        </div>
    )
}