import React, { useEffect, useState } from "react";
import axiosInstance from "./axiosInstance"; // Import the axiosInstance

const FetchData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/products/1"); // Use axiosInstance instead of axios
        setData(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return <div>{/* Render your component */}</div>;
};

export default FetchData;
