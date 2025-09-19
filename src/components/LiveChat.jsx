import React, { useEffect, useState } from "react";
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
        dispatch(addMessage({ name: generateRandomName(), message: generateRandomMessage() }));
    }, 5000)

    return () => {
      clearInterval(timer);
    }
  },[])





  return (
    <div className="border border-slate-300 bg-slate-50 text-slate-800 rounded-md shadow-md h-[500px] mx-2 my-5">
      <h3 className="text-xl font-semibold ml-2 my-2">Live Chat...</h3>
      <div className="flex flex-col-reverse h-[400px] overflow-y-scroll hide-scrollbar">
      {chatMessage.map((c, index) => (
        <div key={index} className="border border-slate-300 rounded-md w-11/12 p-2 flex items-center my-1 mx-2">
          <CgProfile className="rounded-3xl bg-slate-100 w-1/12 h-6 mx-1" />
          <p className="w-2/12 p-2 mx-1 text-xs rounded-md font-semibold bg-slate-100 text-slate-700">{c.name}</p>
          <p className="w-9/12 p-2 mx-1 text-xs rounded-md font-semibold bg-slate-100 text-slate-700">{c.message}</p>
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
