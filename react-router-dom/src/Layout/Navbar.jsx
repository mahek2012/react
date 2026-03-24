import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <section className='flex items-center justify-center mt-8'>
            <nav className='w-[80%] bg-black/80 backdrop-blur-sm shadow-2xl flex items-center text-white justify-between rounded-full px-4 py-2 fixed'>
            <h1>Company Name</h1>
            <ul className='flex items-center justify-between gap-x-4'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/product">Product</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="contact">Contact</Link></li>
            </ul>
            <button>Login</button>
        </nav>
        </section>
    </>
  )
}

export default Navbar