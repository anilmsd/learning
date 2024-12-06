import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default function ToDoList() {

    const [list, setList] = useState([]);
    const [item, setItem] = useState()

    useEffect(() => {
        fetchData();
    }, [])

    const changeStatus = (id) => {
        const updateList=[...list]
        updateList[id-1].status=updateList[id-1].status==="failed"?"success":"failed";
        setList(updateList);
    }

    const addToLocalStorage=()=>{
        localStorage.setItem("products",JSON.stringify(list));
    }

    const fetchData = async () => {
        //we wrote axios in an asynchronous way , so it wont block the flow of execution , first it will console and then come back to axios
        axios.get("https://dummyjson.com/products").then(
            res => {
                console.log(res);
                res.data.products.forEach(product => {
                    product.status = "failed"
                })
                setList(res.data.products);

            }
        ).catch(error => {
            console.log(error)
        })

        console.log("before axios");
    }

    const handleDelete = (id) => {
        setList(list.filter(product => product.id !== id))
    }

    const addProduct = () => {
        setList([...list, { brand: item, status: "failed" }])
    }

    return (
        <div>
            ToDolist
            <div>
                {list && list.map((product, index) => {
                    return (                    
                            <div style={{display:"flex",justifyContent:"space-around"}} key={product.id}>
                                <h3>{product.brand}</h3>
                                <h3>{product.status}</h3>
                                <input onChange={()=>changeStatus(product.id)} type="checkbox" />
                                <button onClick={() => handleDelete(product.id)}>Delete</button>
                            </div>                        
                    )
                })}
                <div>
                    Add product
                    <input type="text" onChange={(e) => setItem(e.target.value)} placeholder="Enter product" />
                    <button onClick={addProduct}>Add</button>
                </div>

                <div>
                    
                    <button onClick={addToLocalStorage}>addToLocalStorage</button>
                </div>
            </div>
        </div>
    )
}