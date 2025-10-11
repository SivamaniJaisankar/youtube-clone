import React, { useContext, useEffect, useState } from 'react'
import MenuContext from '../utils/MenuContext';

const MobileWarning = () => {

const {isMobile, setIsMobile, setShowSidebar} = useContext(MenuContext);
const [showPopup, setShowPopup] = useState(false);

 useEffect(()=>{
    const userAgent = navigator.userAgent.toLowerCase();
    const mobileCheck = /android|iphone|ipad|ipod|opera mini|iemobile|wpdesktop/.test(userAgent);

    if(mobileCheck) {
        setIsMobile(true);
        setShowPopup(true);
        setShowSidebar(false);
    } else {
        setIsMobile(false)
        setShowSidebar(true)
    }

},[])

 if(!isMobile || !showPopup) return null;


  return (
    <div className='flex justify-center fixed top-2 mx-2 h-32 z-50 bg-sky-50 rounded-xl shadow-md shadow-slate-500'>
        <div className='p-3'>
        <p className='font-roboto text-sm'>For better user experience, please enable <span className='font-semibold'>Desktop Site</span> in your browser</p>
        <button 
         className='text-sm font-roboto bg-sky-500 text-white rounded-md px-2 py-1 my-2'
         onClick={()=> {setShowPopup(false)}}
        >Got It</button>
        </div>
    </div>
  )
}

export default MobileWarning