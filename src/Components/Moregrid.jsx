import React, { useState } from 'react'
import grid1 from "../images/grid1.png"
import grid2 from "../images/grid2.png"
import grid3 from "../images/grid3.png"
import grid4 from "../images/grid4.png"
import { IoHeartCircleOutline } from "react-icons/io5";
import { MdBookmarkBorder } from "react-icons/md";

function Moregrid() {

    const [isHovered, setIsHovered] = useState(false);

    function hoverDisplay() {
        setIsHovered(!isHovered);

    }
    return (
        <div className='my-20 mt-8  w-full items-center justify-between  md:w-4/5 px-4 md:mx-auto lg:w-4/5'>
            <nav className='flex justify-between w-full'>
                <h2 className='text-md poppins-bold'>More by NETULR</h2>
                <p className='poppins-regular'><a href="">View Profile</a></p>
            </nav><br />

            <div className='grid md:grid-cols-2 gap-8 w-full xl:grid-cols-4'>

                {/* Grid one */}
                <div className=''>
                    <a className='relative mylink' href="">
                    <img className={`rounded-md`} src={grid1} alt="" />
                        <div className={`z-10 hover-bg flex items-center justify-between opacity-0 transition-all absolute w-full  bottom-0 pt-7 px-3 pl-5`}>
                            <h1 className='text-md poppins-semibold text-white'>DR-ADS WEBSITE</h1>
                            <div className='flex items-center'>
                                <IoHeartCircleOutline className='text-white mr-5' size={30} />
                                <MdBookmarkBorder className='text-white' size={30} />
                            </div>
                        </div>
                       
                    </a>
                </div>

                {/* grid 2 */}
                <div className=''>
                    <a className='relative mylink' href="">
                    <img className={`rounded-md`} src={grid2} alt="" />
                        <div className={`z-10 hover-bg flex items-center justify-between opacity-0 transition-all  absolute w-[355px]  bottom-0 pt-7 px-3 pl-5`}>
                            <h1 className='text-md poppins-semibold text-white'>Kids School Website</h1>
                            <div className='flex items-center'>
                                <IoHeartCircleOutline className='text-white mr-5' size={30} />
                                <MdBookmarkBorder className='text-white' size={30} />
                            </div>
                        </div>
                       
                    </a>
                </div>

                {/* grid 3 */}
                <div className=''>
                    <a className='relative mylink' href="">
                    <img className={`rounded-md`} src={grid3} alt="" />
                        <div className={`z-10 hover-bg flex items-center justify-between opacity-0 transition-all  absolute w-[355px]  bottom-0 pt-7 px-3 pl-5`}>
                            <h1 className='text-md poppins-semibold text-white'>Travel Login Page</h1>
                            <div className='flex items-center'>
                                <IoHeartCircleOutline className='text-white mr-5' size={30} />
                                <MdBookmarkBorder className='text-white' size={30} />
                            </div>
                        </div>
                       
                    </a>
                </div>

                {/* grid 4 */}
                <div className=''>
                    <a className='relative mylink' href="">
                    <img className={`rounded-md`} src={grid4} alt="" />
                        <div className={`z-10 hover-bg flex items-center justify-between opacity-0 transition-all  absolute w-[355px]  bottom-0 pt-7 px-3 pl-5`}>
                            <h1 className='text-md poppins-semibold text-white'>Deep Water Website 💧</h1>
                            <div className='flex items-center'>
                                <IoHeartCircleOutline className='text-white mr-5' size={30} />
                                <MdBookmarkBorder className='text-white' size={30} />
                            </div>
                        </div>
                       
                    </a>
                </div>
                
            </div>
        </div>
    )
}

export default Moregrid