import React, { useRef, useState } from 'react'
import { AiOutlineSend } from "react-icons/ai";
import { addMessage } from "../utils/slices/chatSlice";
import { useDispatch } from "react-redux";

const ChatMessage = () => {

    const dispatch = useDispatch();
    const [message, setMessage] = useState('');
    const inputRef = useRef();


    const handleSendMessage = () => {
      if(!message.trim()) return;
        dispatch(addMessage({ name: 'Sivamani', message: message }));
        setMessage('');
        inputRef.current?.focus();
    }
    

  return (
    <div className="w-full p-2 text-md flex items-center relative bottom-0">
        <input
          type="text"
          ref={inputRef}
          className="p-1 w-10/12 mx-2 my-2 rounded-md border outline-0"
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
          onKeyDown={(e)=> e.key === 'Enter' && handleSendMessage()}
        />
        <button 
          onClick={handleSendMessage}
          className="w-1/12 py-1 mx-1 h-8 flex items-center justify-center text-md rounded-md border cursor-pointer hover:border-slate-900 hover:text-slate-700"
        >
          <AiOutlineSend className='w-6 h-6'/>
        </button>
        
      </div>
  )
}

export default ChatMessage