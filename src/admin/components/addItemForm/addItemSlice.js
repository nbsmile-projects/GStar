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
    uploadingStatus: false,
    addItemError: false
};

const addItemSlice = createSlice({
    name: "addItem",
    initialState,
    reducers: {
        setUploadingStatus: (state, action) => { state.uploadingStatus = action.payload },
        setAddItemError: (state, action) => { state.addItemError = action.payload },
        setNewItemData: (state, action) => { state.newItemData = action.payload },
        setNewItemThumbnail: (state, action) => { state.newItemData.thumbnail = action.payload },
        reset: () => initialState
    }
});

const { reducer, actions } = addItemSlice;

export const {
    setUploadingStatus,
    setAddItemError,
    setNewItemData,
    setNewItemThumbnail,
    reset
} = actions;
export default reducer;