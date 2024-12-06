import React,{useState,useEffect} from 'react';

function Useeffect(props) {
    const [count,setCount]=useState(0)
    const [name,setName]=useState('')

    // const logMouseMove=()=>{
    //     console.log("Mouse moved")
    // }

    // this one will run after every render
    useEffect(()=>{
        console.log("useEffect will run after every render")
    })

 //example 2  ; [] empty brackets tells its not dependent on anyone , so dont run it on rerenders 
    // useEffect(()=>{
    //     console.log("hello")
    //     // window.addEventListener('mousemove',logMouseMove)
    // },[])

    // if you want to conditionally execute useeffect you should mention [] , 
    // useEffect(()=>{
    //     console.log("count value changed")
    // },[count])
    // only change in count then only it will execute


     
    //eventlistener
    // useEffect(()=>{
    //     // window.addEventListener('mousemove',logMouseMove)
    //     // return () =>{
    //     //     console.log("component unmounted")
    //     //     window.removeEventListener('mousemove',logMouseMove)
    //     // }
    //     const intervalvalue=setInterval(()=>{

    //         console.log("setinterval")
    //     },1000)

    //     return ()=>{
    //         clearInterval(intervalvalue)
    //     }
    // },[])

    return (
        <div>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <button onClick={()=>setCount(count+1)}>click{count} times</button>
            {count}
            
        </div>
    );
}


export default Useeffect;