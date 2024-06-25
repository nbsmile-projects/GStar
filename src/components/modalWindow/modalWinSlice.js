import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isModalWinActive: false,
    modalWinEl: '',
    selectedItem: { item: {}, type: "" }
}

const modalWinSlice = createSlice({
    name: 'modalWin',
    initialState,
    reducers: {
        modalWinStatus: (state, action) => { state.isModalWinActive = action.payload },
        setModalWinEl: (state, action) => { state.modalWinEl = action.payload },
        setSelectedItem: (state, action) => { state.selectedItem = action.payload }
    }
})

const { actions, reducer } = modalWinSlice;

export const {
    modalWinStatus,
    setModalWinEl,
    setSelectedItem
} = actions;
export default reducer;