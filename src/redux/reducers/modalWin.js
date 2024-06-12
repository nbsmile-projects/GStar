

const initialState = {
    isModalActive: false,
    modalWinEl: null,
    selectedItem: { item: {}, type: '' }
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_MODAL_ACTIVE":
            return { ...state, isModalActive: action.payload };
        case "SET_MODAL_WIN_EL":
            return { ...state, modalWinEl: action.payload };
        case "SET_SELECTED_ITEM":
            return { ...state, selectedItem: { item: action.payload.item, type: action.payload.type } };
        default:
            return state;
    }
}