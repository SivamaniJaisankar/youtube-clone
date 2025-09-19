import React from 'react'
import { useRouteError, useLocation } from 'react-router-dom'

const HandleError = () => {

    const err = useRouteError();
    const location = useLocation();
  
    return (
    <div className='w-6/12 h-72 mx-auto my-10 shadow-md flex items-center justify-center'>
        <h2 className='text-xl text-red-400 font-semibold'>{err?.status || location.state?.errStatus} - {err?.statusText || location.state?.errMessage}</h2>
    </div>
  )
}

export default HandleError