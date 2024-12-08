import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../State";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const isUserLogin = useSelector((state) => state.auth.isLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(
      setLogout({
        isLogout: "true",
      }),
    );
    navigate("/login");
  };

  return (
    <div>
      login value is : {isUserLogin ? "Yes" : "No"}
      <button onClick={handleLogout}>LogOut</button>
    </div>
  );
}
