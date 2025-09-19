import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name:'Chat',
    initialState: {
        chatMessage: []
    },
    reducers: {
        addMessage : (state, action) =>{    
            state.chatMessage.splice(5, 1);
            state.chatMessage.unshift(action.payload);     
        }
    }
})

export const {addMessage} = chatSlice.actions;

export default chatSlice.reducer;