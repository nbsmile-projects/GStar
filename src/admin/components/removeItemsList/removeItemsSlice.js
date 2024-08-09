import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listOfItems: [],
    selectedItem: { id: "", category: "", thumbnailName: "" },
    category: "bicycles",
    removingStatus: false
};

const removeItemsSlice = createSlice({
    name: "removeItems",
    initialState,
    reducers: {
        setListOfItems: (state, action) => {
            state.listOfItems = action.payload;
        },
        setSelectedItem: (state, action) => {
            state.selectedItem = action.payload;
        },
        setCategory: (state, action) => {
            state.category = action.payload;
        },
        setRemovingStatus: (state, action) => {
            state.removingStatus = action.payload;
        }
    }
});

const { reducer, actions } = removeItemsSlice;

export const {
    setListOfItems,
    setSelectedItem,
    setCategory,
    setRemovingStatus
} = actions;
export default reducer;