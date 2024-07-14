import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filtering: false,
    searchTerm: "",
    filter: "morePopular"
}

const catalogFiltersSlice = createSlice({
    name: "catalogFilters",
    initialState,
    reducers: {
        setFiltering: (state, action) => { state.filtering = action.payload },
        setSearchTerm: (state, action) => { state.searchTerm = action.payload },
        setFilter: (state, action) => { state.filter = action.payload }
    }
})

const { actions, reducer } = catalogFiltersSlice;

export const {
    setFiltering,
    setSearchTerm,
    setFilter
} = actions;
export default reducer;