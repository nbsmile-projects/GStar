import { createSlice } from "@reduxjs/toolkit";

const initialState = { isMenuBarActive: false };

const menuBarSlice = createSlice({
    name: 'menuBar',
    initialState,
    reducers: {
        menuBarStatus: (state, action) => { state.isMenuBarActive = action.payload }
    }
});

const { actions, reducer } = menuBarSlice;

export const { menuBarStatus } = actions;
export default reducer;