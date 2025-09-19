import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:'searchSuggestion',
    initialState: {},
    reducers:{
        setSearchSuggestions:(state, action) => {
            const {key, value } = action.payload;
            state[key] = value;
        }
    }
})

export const { setSearchSuggestions} = searchSlice.actions;

export default searchSlice.reducer;