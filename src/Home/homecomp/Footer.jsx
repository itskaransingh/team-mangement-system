import React from 'react'
import { BiHomeAlt } from "react-icons/bi";
import { TbListDetails } from "react-icons/tb";
import { AiOutlineUserAdd } from "react-icons/ai";
import {Link} from 'react-router-dom';


const Footer = () => {
  return (
    <div className=' lg:hidden bottom-0 sticky h-12 bg-teal-200 mt-auto '>
      <ul className='flex justify-around text-2xl h-full items-center z-20 '>
      <Link to={"/"}><li><BiHomeAlt/></li></Link> 
      <Link to={"/teamdetails"}> <li><TbListDetails /></li></Link>
      <Link to={"/newemploye"}> <li><AiOutlineUserAdd /></li></Link>
      </ul>
    </div>
  )
}

export default Footer