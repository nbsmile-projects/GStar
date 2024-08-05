import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    newItemData: {
        brand: null,
        category: null,
        description: null,
        id: null,
        name: null,
        price: null,
        sold: null,
        thumbnail: null,
        uploadDate: null
    },
    uploading: false,
    addItemError: false
};

const addItemSlice = createSlice({
    name: "addItem",
    initialState,
    reducers: {
        setUploading: (state, action) => { state.uploading = action.payload },
        setAddItemError: (state, action) => { state.addItemError = action.payload },
        setNewItemData: (state, action) => { state.newItemData = action.payload },
        setNewItemThumbnail: (state, action) => { state.newItemData.thumbnail = action.payload }
    }
});

const { reducer, actions } = addItemSlice;

export const {
    setUploading,
    setAddItemError,
    setNewItemData,
    setNewItemThumbnail
} = actions;
export default reducer;