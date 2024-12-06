import React, { useState } from 'react'

export default function Task2() {
    const [list1, setList1] = useState([
        { id: 0, title: "List 1", checked: false },
        { id: 1, title: "List 2", checked: false },
        { id: 2, title: "List 3", checked: false },
    ]);
    const [list2, setList2] = useState([
        { id: 0, title: "List A" },
        { id: 1, title: "List B" },
        { id: 2, title: "List C" },
    ])

    //one way to do
    // const idArrays = [];
    // const handleCheckbox = (id) => {
    //     if (idArrays.includes(id)) {
    //         idArrays.splice(id, 1);
    //     } else {
    //         idArrays.push(id)
    //     }
    //     console.log(idArrays);
    // }

    // const handleSwap = () => {
    //     const updatedList1 = [...list1];
    //     const updatedList2 = [...list2]
    //     for (let x of idArrays) {
    //         const temp = updatedList1[x].title
    //         updatedList1[x].title = updatedList2[x].title;
    //         updatedList2[x].title = temp
    //     }

    //     setList2(updatedList2);
    //     setList2(updatedList2);
    // }

    //Another way

    const handleCheckbox=(id)=>{
        const updatedList1=[...list1];
        updatedList1[id].checked= !updatedList1[id].checked;
        setList1(updatedList1)

    }

    const handleSwap=()=>{
        const updatedList1=[...list1];
        const updatedList2=[...list2];
        updatedList1.forEach((item,index)=>{
            if(item.checked){
                console.log(index)
                const temp=updatedList1[index].title;
                updatedList1[index].title=updatedList2[index].title;
                updatedList2[index].title=temp
            }
            updatedList1[index].checked=false;

        })
        setList1(updatedList1);
        setList2(updatedList2);
    }


    return (
        <div>
            <div>
                List 1
                {list1 && list1.map((item) => {
                    return (
                        <div key={item.id}>
                            <ul>
                                <li>{item.title}
                                    {/* <input onChange={() => handleCheckbox(item.id)} type='checkbox' /> */}
                                    <input onChange={() => handleCheckbox(item.id)} type='checkbox' checked={item.checked} />
                                </li>
                            </ul>
                        </div>
                    )
                })}
            </div>
            <button onClick={handleSwap}>Swap</button>
            <div>
                List 2
                {list2 && list2.map((item) => {
                    return (
                        <div key={item.id}>
                            <ul>
                                <li>
                                    {item.title}
                                </li>
                            </ul>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
