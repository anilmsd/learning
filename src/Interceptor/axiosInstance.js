import axios from "axios";

// Create an instance of Axios with custom configurations
const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com/", // Replace with your API base URL
});

// Add an interceptor to add JWT token to every request
axiosInstance.interceptors.request.use(
  (config) => {
    console.log("Interceptor");
    const token = localStorage.getItem("jwtToken"); // Assuming you store the token in localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
