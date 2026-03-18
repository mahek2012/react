import React from 'react'
import {Focus, Search} from "lucide-react";

const Navbar = () => {
  return (
    <>
    <div>
        <div className='px-2 py-1 bg-gray-200 rounded-full '>
            <Search/>
            <input type="text" placeholder='Search Photos and illustrations'/>
            <Focus/>
        </div>
    </div>
    <nav></nav>
    </>
  )
}

export default Navbar
