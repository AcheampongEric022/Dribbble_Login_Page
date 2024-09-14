import React from 'react'
import logo from "../images/meLogo.png"
import Moregrid from './Moregrid'

function More() {
  return (
    <div>
        <div className='flex items-center justify-between p-10 w-4/5 mx-auto'>
            <hr className='w-2/5 ' />
           <div className='1/5'><img src={logo} className='w-16' alt="" /></div> 
           <hr className='w-2/5' />
        </div>

        <center>
            <h1 className='text-2xl poppins-medium'>NETULR</h1><br />
            <p className='text-md poppins-regular'>We design and build digital experiences Let's chat 👋 ⤵</p> <br />

            <button className='text-sm transition-all text-white poppins-regular px-3 py-2 rounded-full hover:bg-slate-600 bg-slate-900'>Get in touch</button>
            <Moregrid/>
        </center>
    </div>
  )
}

export default More