import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogin } from "../State";

export default function Login() {
  const [isUserLogin, setUserLogin] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(
    "logout status",
    useSelector((state) => state.auth.isLogout),
  );

  const handleLogin = () => {
    setUserLogin(!isUserLogin);
    console.log(!isUserLogin);
    dispatch(setLogin({ isLogin: !isUserLogin }));
    navigate("/logout");
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
