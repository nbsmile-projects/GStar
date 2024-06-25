import { configureStore } from "@reduxjs/toolkit";

import menuBar from "../components/menuBar/menuBarSlice";

const store = configureStore({
    reducer: { menuBar },
    devTools: process.env.NODE_ENV !== "production"
})

export default store;