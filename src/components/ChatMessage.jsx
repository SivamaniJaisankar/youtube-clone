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
    <div className="w-12/12 text-md flex items-center relative bottom-0">
        <input
          type="text"
          className="p-1 w-10/12 mx-2 my-2 rounded-md border border-slate-400 bg-slate-50 text-slate-900 outline-0"
          name={message}
          onChange={(e)=>setMessage(e.target.value)}
        />
        <AiOutlineSend 
          className="w-2/12 p-1 mx-1 h-8 text-xl rounded-md border border-slate-400 bg-slate-50 text-slate-900 cursor-pointer"
          onClick={handleSendMessage}
        />
      </div>
  )
}

export default ChatMessage