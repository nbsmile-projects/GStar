import { configureStore } from "@reduxjs/toolkit";

import menuBar from "../components/menuBar/menuBarSlice";
import modalWin from "../components/modalWindow/modalWinSlice";

const store = configureStore({
    reducer: { menuBar, modalWin },
    devTools: process.env.NODE_ENV !== "production"
})

export default store;