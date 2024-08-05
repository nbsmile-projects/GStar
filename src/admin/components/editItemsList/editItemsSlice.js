import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listOfItems: [],
    category: "bicycles",
    activeSection: "editItemsList",
    modifiedItemData: {
        brand: null,
        description: null,
        name: null,
        price: null,
        sold: null,
        thumbnail: null
    },
    currentThumbnail: null,
    currentID: null,
    editingStatus: false,
    editItemError: false
};

const editItemsSlice = createSlice({
    name: "editItems",
    initialState,
    reducers: {
        setListOfItems: (state, action) => { state.listOfItems = action.payload },
        setCategory: (state, action) => { state.category = action.payload },
        setEditingStatus: (state, action) => { state.editingStatus = action.payload },
        setActiveSection: (state, action) => { state.activeSection = action.payload },
        setEditItemError: (state, action) => { state.editItemError = action.payload },
        setModifiedItemData: (state, action) => { state.modifiedItemData = action.payload },
        setModifiedItemThumbnail: (state, action) => { state.modifiedItemData.thumbnail = action.payload },
        setCurrentThumbnail: (state, action) => { state.currentThumbnail = action.payload },
        setCurrentID: (state, action) => { state.currentID = action.payload }
    }
});

const { reducer, actions } = editItemsSlice;

export const {
    setListOfItems,
    setCategory,
    setEditingStatus,
    setActiveSection,
    setEditItemError,
    setModifiedItemData,
    setModifiedItemThumbnail,
    setCurrentThumbnail,
    setCurrentID
} = actions;
export default reducer;