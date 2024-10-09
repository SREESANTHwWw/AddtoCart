import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { FaCartArrowDown, } from "react-icons/fa";
import { MdOutlineAddShoppingCart,MdOutlineAddCircle } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";

const navbarComponent = () => {
  return (
    <>
     <div className=' w-[100%] h-20 bg-main flex justify-between shadow-md items-center scroll-smooth '>
          <img src="" alt="" />
          <input className='w-96 h-12 rounded-lg outline-none placeholder:text px-6   '  type="search" placeholder='Search Your Product'/>
           <div className='w-[30%]  flex justify-around'>
           <Link to="/login" className='font-bold text-base font-serif hover:text-three'>Sign In</Link>
          <Link to="/additem" className='font-bold  text-base font-serif hover:text-three'> Add </Link>
          <Link to="/contact" className='font-bold text-base font-serif  hover:text-three '>Contact</Link>
          <Link to="/Cart" className='font-bold text-2xl hover:text-three'><FaCartArrowDown /></Link>
          
          </div>
          
     </div>
    <Outlet/>
     
     
    </>
   

  )
}

export default navbarComponent