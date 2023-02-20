import React from 'react'
import { Link } from 'react-router-dom'
import {IoArrowForwardOutline} from 'react-icons/io5'
import ButtonPrimary from './Button'
const Navbar = ({logo,links = []}) => {
    let location = window.location
  return ( 
    <nav className="bg-light px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0">
        <div className="container my-0 flex flex-wrap items-center justify-between mx-auto">
            <a href="/" className="flex items-center">
                <img src={logo} className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
            </a>
            <div className="flex md:order-2">
                <ButtonPrimary>Request Demo <IoArrowForwardOutline size={30} className="h-6 w-6 ml-4 group-hover:text-white text-accent-primary" /></ButtonPrimary>
                <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                <ul className="flex bg-light font-primary flex-col py-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:border-gray-700">
                    {
                        links.map((link,key) => (
                            <li key={key}>
                                <Link to={link.to} className={`block text-base py-2 pl-3 pr-4 text-gray-700 rounded ${location.pathname === link.to ? "bg-gray-100 md:bg-transparent md:text-accent-primary md:p-0 md:dark:text-white dark:bg-gray-700 dark:text-white md:dark:bg-transparent" : "hover:bg-gray-100 md:hover:bg-transparent md:hover:text-accent-primary md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"} dark:border-gray-700`}>{link.text}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar