import React from "react";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1",
      );
      setUser(data);
      setLoading(false);
    } catch {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <span className="user">{user.name}</span>
      <form>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={!username || !password} onClick={handleClick}>
          {loading ? "please wait" : "Login"}
        </button>
        <span
          data-testid="error"
          style={{ visibility: error ? "visible" : "hidden" }}
        >
          Something went wrong!
        </span>
      </form>
    </div>
  );
};

export default Login;

// // Login.jsx
// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = () => {
//   const [name, setName] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get('https://api.example.com/login');
//       const userData = response.data;
//       setName(userData.name);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error logging in:', error);
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleLogin} disabled={loading}>
//         {loading ? 'Logging in...' : 'Login'}
//       </button>
//       {name && <p>Welcome, {name}!</p>}
//     </div>
//   );
// };

// export default Login;
