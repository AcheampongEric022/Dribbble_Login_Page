import React, { useState } from 'react'
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import logo from "../images/dribbble_logo.png"
import { BiSearch } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { RxCaretDown } from "react-icons/rx";

function Navbar() {

  const [isOpen, setIsopen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  function hover() {
    setIsHovered(!isHovered);
  }


  function clickOpen() {
    setIsopen(!isOpen);
  }

  return (
    <>
      <nav className='w-full flex items-center justify-between py-8'>
        <div className='flex items-center lg:w-2/3'>
          <button onClick={clickOpen} className='ml-5 cursor-pointer lg:hidden'>
            <HiOutlineMenuAlt2 size={30} className={`${isOpen ? "hidden" : ""}`} />
            <FaTimes size={30} className={`${isOpen ? "block" : "hidden"}`} />
          </button>

          <img src={logo} alt="" className='w-24 ml-5 xl:hidden' />

          {/* Drop down list */}
          <div className={`absolute space-y-5 bg-white dropnav top-24 text-sm poppins-medium pl-8 py-10 border-t-2 border-gray-200 flex-col ${isOpen ? "flex" : "hidden"}`}>
            <a className='' href="">Find Designers</a>
            <div className='border-l-2 pl-8'>
              <a href="">
                <h1>Designer Search</h1>
                <p>Quickly find your next designer</p>
              </a><br />
              <a href="">
                <h1>Post a job</h1>
                <p>The #1 job board for design talent</p>
              </a>
            </div><br />

            <a href="">Inspiration</a>
            <a href="">Jobs</a>
            <a href="">Go Pro</a>
           
            <hr />
            <a href="">Log in</a>
          </div>


          {/* Nav for large screen */}
          {/* Nav for large screen */}
          {/* Nav for large screen */}
          <div className={`text-sm poppins-medium items-center justify-between w-2/3 ml-5 hidden lg:flex`}>
            <div className='relative'>
              <button onMouseOver={hover} className='flex items-center hover:text-slate-400' href=""><span>Find Designers</span> <RxCaretDown /></button>
              <div className={`bg-white absolute w-[310px] p-6 border-2 border-slate-100 rounded-xl mt-3 ${isHovered ? "block" : "hidden"}`} >
                <a href="" className='hover:text-slate-400'>
                  <h1>Designer Search</h1>
                  <p>Quickly find your next designer</p>
                </a><br />
                <a href="" className='hover:text-slate-400'>
                  <h1>Post a job</h1>
                  <p>The #1 job board for design talent</p>
                </a>
              </div>

            </div>
            <a className='hover:text-slate-400' href="">Inspiration</a>
            <a className='hover:text-slate-400' href="">Jobs</a>
            <a className='hover:text-slate-400' href="">Go Pro</a>
          </div>
        </div>

        <div className='hidden xl:flex w-40'>
          <img src={logo} alt="" className='w-24' />
        </div>
        <div className='flex items-center w-2/5 justify-end mr-8 lg:w-3/5'>
          <div className='hidden lg:flex items-center bg-slate-300 mr-5 px-2 py-2 rounded-full hover:bg-white transition-all duration-200 border-2 border-slate-300 shadow-sm hover:border-red-100'>
            <BiSearch size={30} className='mr-5 cursor-pointer' />
            <input className='h-7 bg-transparent poppins-medium border-none outline-none' type="text" placeholder='Search...' />
          </div>

          <BiSearch size={30} className='mr-5 cursor-pointer lg:hidden' />
          <button className='text-md text-slate-900 hover:text-slate-400 poppins-medium mr-5 hidden lg:flex'>Log in</button>
          <button className='text-sm text-white poppins-regular px-5 py-3 rounded-full bg-slate-900 hover:bg-slate-600 transition-all'>Sign Up</button>
        </div>
      </nav>
      <br />
    </>
  )
}

export default Navbar