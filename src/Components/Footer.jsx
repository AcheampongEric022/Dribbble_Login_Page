import React from 'react'
import logo from "../images/dribbble_logo.png"
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaPinterest } from "react-icons/fa6";

function Footer() {
    return (
        <>
        <div className='w-full py-14 md:px-5 gap-4 flex flex-col items-center md:justify-between'>
           
            <img className='w-20' src={logo} alt="" />
            <div className='grid grid-cols-3 md:flex gap-4 items-center text-center justify-between text-sm poppins-medium'>
                <a href="">For Designers</a>
                <a href="">Hire Talent</a>
                <a href="">Inspiration</a>
                <a href="">Advertising</a>
                <a href="">Blog</a>
                <a href="">About</a>
                <a href="">Carrers</a>
                <a href="">Support</a>
            </div>
            <div className='flex justify-evenly w-1/2'>
                <a href=""><FaTwitter size={20} /></a>
                <a href=""><FaFacebookSquare size={20} /></a>
                <a href=""><BsInstagram size={20} /></a>
                <a href=""><FaPinterest size={20} /></a>
            </div>

        
           
        </div>
        <div className='w-full py-12 md:px-5 flex flex-col md:flex-row gap-4 items-center justify-between'>
            <div className='flex justify-between text-sm poppins-regular text-slate-400'>
                <p>&copy; 2024 Dribbble</p>
                <a className='md:ml-2' href="">Terms</a>
                <a className='md:ml-2' href="">Privacy</a>
                <a className='md:ml-2' href="">Cookies</a>
            </div>
            <div className='flex justify-between text-sm poppins-regular text-slate-400 w-full md:w-1/2'>
                <a href="">Jobs</a>
                <a href="">Designers</a>
                <a href="">Freelancers</a>
                <a href="">Tags</a>
                <a href="">Places</a>
                <a href="">Resources</a>
            </div>

        </div>
        </>
    )
}

export default Footer