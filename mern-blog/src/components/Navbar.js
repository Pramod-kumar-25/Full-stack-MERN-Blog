import React from 'react'
import { Link } from 'react-router-dom';


 const Navbar = () => {
  return (
    <nav className="border-b-4 border-blue-600 text-center h-24 fixed top-50 bg-blue-500 font-bold w-full text-lg text-white">
        <ul>
            <li className='inline-block mt-4 py-4 px-14'>
                <Link to="/" className="pl-6 pr-8">
                Home
                </Link>
            </li>
            <li className='inline-block py-4 px-14'>
                <Link to='/about' className="pl-6 pr-8">
                About
                </Link>
            </li>
            <li className='inline-block py-4 px-14'>
                <Link to='/articles-list' className="pl-6 pr-8">
                Articles
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
