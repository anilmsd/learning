import React from "react";
import {useLocation} from "react-router-dom";

export default function About(){

    const search=useLocation().search;
    const value1=new  URLSearchParams(search).get("data");
    const value2=new URLSearchParams(search).get("data2")

    return (
        <div>
            About<br/>
            {value1}{" "}{value2}
        </div>
    )
}