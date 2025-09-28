import React, { useState } from 'react'
import { AiOutlineSend } from "react-icons/ai";
import { addMessage } from "../utils/slices/chatSlice";
import { useDispatch } from "react-redux";

const ChatMessage = () => {

    const dispatch = useDispatch();
    const [message, setMessage] = useState('');


    const handleSendMessage = () => {
        dispatch(addMessage({ name: 'Sivamani', message: message }));
    }
    

  return (
    <div className="w-12/12 p-2 text-md flex items-center relative bottom-0">
        <input
          type="text"
          className="p-1 w-10/12 mx-2 my-2 rounded-md border outline-0"
          name={message}
          onChange={(e)=>setMessage(e.target.value)}
        />
        <AiOutlineSend 
          className="w-1/12 py-1 mx-1 h-8 text-md rounded-md border cursor-pointer hover:border-slate-900 hover:text-slate-700"
          onClick={handleSendMessage}
        />
      </div>
  )
}

export default ChatMessage