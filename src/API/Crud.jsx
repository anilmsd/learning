import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"; //npm i js-cookie

export default function Crud() {
  const navigate = useNavigate();
  const [registerValue, setRegisterValues] = useState({
    email: "",
    password: "",
    role: "",
  });

  const [loginValues, setLoginvalues] = useState({
    email: "",
    password: "",
  });

  const handleRegister = (event) => {
    const { name, value } = event.target;
    setRegisterValues({
      ...registerValue,
      [name]: value,
    });
  };

  const handleLogin = (event) => {
    const { name, value } = event.target;
    setLoginvalues({
      ...loginValues,
      [name]: value,
    });
  };

  const registeration = async () => {
    console.log(registerValue);
    await axios
      .post("http://localhost:4000/user/register", registerValue)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  const login = async () => {
    console.log(loginValues);
    await axios
      .post("http://localhost:4000/user/login", loginValues)
      .then((res) => {
        console.log(res);
        Cookies.set("token", res.data.token);
        Cookies.set("role", res.data.user.role);
        navigate("/home");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div>
        Register
        <input
          type="text"
          name="email"
          onChange={handleRegister}
          value={registerValue.email}
          placeholder="Email"
        />
        <input
          type="text"
          name="password"
          onChange={handleRegister}
          value={registerValue.password}
          placeholder="Password"
        />
        <select name="role" onChange={handleRegister}>
          <option value="">Select Role</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
        <button onClick={registeration}>Submit</button>
      </div>
      <div>
        Login
        <input
          name="email"
          onChange={handleLogin}
          value={loginValues.email}
          type="text"
          placeholder="email"
        />
        <input
          name="password"
          onChange={handleLogin}
          value={loginValues.password}
          type="password"
          placeholder="password"
        />
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}
