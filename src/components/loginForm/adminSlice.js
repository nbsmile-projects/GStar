import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    token: null,
    id: null,
    loginError: false
};

const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        setAdminData: (state, action) => {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
        removeAdminData: (state) => {
            state.email = null;
            state.token = null;
            state.id = null;
        },
        setLoginError: (state, action) => {
            state.loginError = action.payload;
        }
    }
})

const { reducer, actions } = adminSlice;

export const {
    setAdminData,
    removeAdminData,
    setLoginError
} = actions;
export default reducer;