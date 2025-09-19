import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./slices/chatSlice"
import videoSuggestionReducer from "./slices/videoSuggestionSlice"
import searchSuggestionReducer from "./slices/searchSlice"

export const store = configureStore({
    reducer :{
        chat: chatReducer,
        videoSuggestion: videoSuggestionReducer,
        searchSuggestion: searchSuggestionReducer
    }
})