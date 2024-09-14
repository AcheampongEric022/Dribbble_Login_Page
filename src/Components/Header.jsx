import React from 'react'
import logo from "../images/meLogo.png"
import { FaEnvelopeCircleCheck } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa";
import { IoHeartCircleOutline } from "react-icons/io5";
import formImg from "../images/bg.png"
import bg2 from "../images/bg2.png"
import bg3 from "../images/bg3.png"
import Texts from './Texts';

function Header() {
    return (
        <>

            <div>
                <h1 className='poppins-semibold text-xl mx-[11%]'>Login Page</h1><br />

                <nav className='flex w-full items-center justify-between px-2 md:w-4/5 md:mx-auto lg:w-4/5 xl:px-20'>
                    <div className="w-1/2 flex items-center">
                        <img src={logo} alt="" className='size-9' />
                        <div className='ml-3 '>
                            <h1 className='poppins-bold ml-6'>NETULR</h1>
                            <p className='text-green-500 text-sm flex items-center'>
                                <span className='relative flex w-3 h-3'>
                                    <span className='animate-ping h-full w-full rounded-full bg-green-500 inline-flex absolute'>
                                    </span>
                                    <span className='relative inline-flex w-3 h-3 bg-green-500 rounded-full'></span>
                                </span>
                               <span className='ml-3'> Available for work</span></p>
                        </div>

                    </div>
                    <div className="w-1/2 flex items-center justify-end">
                        <IoHeartCircleOutline className='mr-3' size={30} />
                        <FaRegBookmark className='mr-3' size={25} />
                        <FaEnvelopeCircleCheck size={35} className='mr-3 md:hidden' />
                        <button className='text-sm text-white poppins-regular px-3 py-2 rounded-full bg-slate-900 hidden md:flex hover:bg-slate-600 transition-all'>Get in touch</button>
                    </div>
                </nav>
                <div className='mt-8 flex w-full items-center justify-between px-4   md:w-4/5 md:mx-auto lg:w-4/5 xl:px-20'>
                    <img src={formImg} className='w-full mx-auto' alt="" />
                </div>

                {/* Hey guys stuffs */}
                <div className='mt-10 w-4/5 mx-auto'>
                    <center>
                        <h1 className='poppins-semibold text-2xl'>Hello Guys 👋</h1><br />
                        <p className='poppins-regular text-md mt-2'>Here is my exploration about <strong>Login page</strong> for Mastery Hub Website
                            What do you think about it? I hope you enjoy it!😉</p>
                    </center>

                </div>

                <div className='mt-8 flex w-full items-center justify-between px-4   md:w-4/5 md:mx-auto lg:w-4/5 xl:px-20'>
                    <img src={bg2} className='w-full mx-auto' alt="" />
                </div>


                <div className='mt-10 flex w-full items-center justify-between px-1  md:w-4/5 md:mx-auto'>
                    <img src={bg3} className='w-full mx-auto' alt="" />
                </div>

                <Texts />


            </div>



        </>
    )
}

export default Header