import { createSlice } from "@reduxjs/toolkit"

const videoSuggestionSlice = createSlice({
    name: 'videoSuggestion',
    initialState: {},
    reducers: {
        setSuggestions: (state, action) =>{
            const {id, items} = action.payload;
            state[id] = items;
        }
    }
})

export const { setSuggestions } = videoSuggestionSlice.actions;

export default videoSuggestionSlice.reducer;