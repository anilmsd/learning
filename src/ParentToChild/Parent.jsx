import React, { useEffect, useState } from "react";
import axios from "axios";
import Child from "./Child";

const Parent = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData();
  }, [page]);

  const handlePage = (e) => {
    setPage(e.target.value);
  };

  const fetchData = () => {
    axios
      .get(`https://dummyjson.com/products/${page}`)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Child value={page} data={data} handlePage={handlePage} />
    </div>
  );
};

export default Parent;
