import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    token: null,
    id: null,
    loginError: false,
    activeSection: "add-item",
    loading: false
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
        },
        setActiveSection: (state, action) => {
            state.activeSection = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    }
})

const { reducer, actions } = adminSlice;

export const {
    setAdminData,
    removeAdminData,
    setLoginError,
    setActiveSection,
    setLoading
} = actions;
export default reducer;