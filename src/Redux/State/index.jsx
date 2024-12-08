//redux toolkit will make it easy to use redux
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  isLogout: false,
};

// all these are actions
//name refers the name of the slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.isLogin = action.payload.isLogin;
    },

    setLogout: (state, action) => {
      state.isLogout = action.payload.isLogout;
    },
  },
});

export const { setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;
