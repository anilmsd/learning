import React from "react";

const Child = ({ data , handlePage ,value }) => {
    return (
        <div>
            <input value={value} type="number" onChange={handlePage} placeholder="entere a number"  />
            {data && data.brand}
        </div>
    )
}
export default Child;