import React from "react";
import {useNavigate} from "react-router-dom";
// import "./../../src/global.css";


export default function Home(){

    const navigate=useNavigate();

    const name="You navigated from Home to Dashboard";

    return (
        <div>
               <h2>Home page</h2> 
               <button onClick={()=>navigate(`/dashboard/${name}`)} >Go To Dashboard Using Path Params</button>
               <button onClick={()=>navigate("/crud")} >Crud Operations</button> 
               <button onClick={()=>navigate("/usestate")}>UseState</button>
               <button onClick={()=>navigate("/useeffect")} >UseEffect</button>
               <button onClick={()=>navigate("/useref")} >UseRef</button>
               <button onClick={()=>navigate("/usememo")}>UseMemo</button>
               <button onClick={()=>navigate("/usecallback")}>UseCallback</button>
               <button onClick={()=>navigate("/usecontext")}>UseContext</button>
               <button onClick={()=>navigate("/login")}>Redux</button>
               <button onClick={()=>navigate("/authentication")}>API</button>
               <button onClick={()=>navigate("/reactmemo")}>React.Memo</button>
               <button onClick={()=>navigate("/alltasks")}>Task</button>
               <button onClick={()=>navigate("/parenttochild")}>ParentToChild ChildToParent</button>
               <button onClick={()=>navigate("/jesttestinglibrary")}>JestTestLogin</button>
               <button onClick={()=>navigate("/errorBoundary")}>ErrorBoundary</button>
               <button onClick={()=>navigate("/interceptor")}>Interceptor</button>
               <button onClick={()=>navigate("/throttle_debounce")}>Throttle_debounce</button>
               <button onClick={()=>navigate("/formValidation")}>Form Validation</button>
        </div>
    )
}


