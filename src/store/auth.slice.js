import { createSlice } from "@reduxjs/toolkit";
// import { setAuthorizationToken } from "../api/instance";

const initialState = {
  isAuthenticated:true
};

export const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    
  },
});

// export const { login, logOut } = slice.actions;

export default slice.reducer;
