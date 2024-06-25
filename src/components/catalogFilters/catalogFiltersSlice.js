import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false
}

const catalogFiltersSlice = createSlice({
    name: "catalogFilters",
    initialState,
    reducers: {
        setLoading: (state, action) => { state.loading = action.payload }
    }
})

const { actions, reducer } = catalogFiltersSlice;

export const { setLoading } = actions;
export default reducer;