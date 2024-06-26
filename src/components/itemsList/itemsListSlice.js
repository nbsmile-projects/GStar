import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listOfItems: [],
    contentType: ""
}

const itemsListSlice = createSlice({
    name: "itemsList",
    initialState,
    reducers: {
        setListOfItems: (state, action) => { state.listOfItems = action.payload },
        setContentType: (state, action) => { state.contentType = action.payload }
    }
})

const { reducer, actions } = itemsListSlice;

export const {
    setListOfItems,
    setContentType
} = actions;
export default reducer;