import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    searchTerm: "",
    filter: "morePopular"
}

const catalogFiltersSlice = createSlice({
    name: "catalogFilters",
    initialState,
    reducers: {
        setLoading: (state, action) => { state.loading = action.payload },
        setSearchTerm: (state, action) => { state.searchTerm = action.payload },
        setFilter: (state, action) => { state.filter = action.payload }
    }
})

const { actions, reducer } = catalogFiltersSlice;

export const {
    setLoading,
    setSearchTerm,
    setFilter
} = actions;
export default reducer;