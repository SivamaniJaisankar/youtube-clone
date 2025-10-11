import React, { useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/slices/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";
import ChatMessage from "./ChatMessage";


const LiveChat = () => {
  
  const dispatch = useDispatch();
  const chatMessage = useSelector((state) => state.chat.chatMessage);

  useEffect(()=>{
    const timer = setInterval(()=> { 
        dispatch(addMessage({  id: Date.now(), name: generateRandomName(), message: generateRandomMessage() }));
    }, 5000)

    return () => {
      clearInterval(timer);
    }
  },[])

  return (
    <div className="rounded-md shadow-sm h-[475px] mx-2 my-5">
      <h3 className="text-xl font-semibold font-roboto ml-2 my-1">Live Chat...</h3>
      <div className="flex flex-col-reverse h-[375px] overflow-y-scroll hide-scrollbar">
      {chatMessage.map((c) => (
        <div key={c.id} className="border border-slate-200 rounded-md w-11/12 p-2 flex items-center my-1 mx-2">
          <CgProfile className="rounded-3xl w-1/12 h-6 mx-1" />
          <p className="w-2/12 p-2 mx-1 text-xs rounded-md font-semibold font-roboto">{c.name}</p>
          <p className="w-9/12 p-2 mx-1 text-xs rounded-md font-semibold font-roboto">{c.message}</p>
        </div>
      ))}
      </div>
      <div>
        <ChatMessage />
      </div>
    </div>
  );
};

export default LiveChat;
