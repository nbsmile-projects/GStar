import { configureStore } from "@reduxjs/toolkit";

import menuBar from "../components/menuBar/menuBarSlice";
import modalWin from "../components/modalWindow/modalWinSlice";
import catalogFilters from "../components/catalogFilters/catalogFiltersSlice";
import itemsList from "../components/itemsList/itemsListSlice";
import admin from "../admin/components/admin/adminSlice";
import addItem from "../admin/components/addItemForm/addItemSlice";

const store = configureStore({
    reducer: { menuBar, modalWin, catalogFilters, itemsList, admin, addItem },
    devTools: process.env.NODE_ENV !== "production"
})

export default store;