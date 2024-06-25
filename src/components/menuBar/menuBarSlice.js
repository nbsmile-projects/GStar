import { createSlice } from "@reduxjs/toolkit";

const initialState = { isMenuBarActive: false };

const menuBarSlice = createSlice({
    name: 'menuBar',
    initialState,
    reducers: {
        menuBarActive: state => { state.isMenuBarActive = true },
        menuBarInactive: state => { state.isMenuBarActive = false }
    }
});

const { actions, reducer } = menuBarSlice;

export default reducer;
export const {
    menuBarActive,
    menuBarInactive
} = actions;