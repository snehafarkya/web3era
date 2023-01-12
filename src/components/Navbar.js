import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>

<div className="flex flex-wrap">
  <section className="relative mx-auto">
      {/* <!-- navbar --> */}
    <nav className="flex justify-center  text-white ">
      <div className="px-5 xl:px-12 py-6 gap-48 flex w-full items-center">
        <a className="text-3xl font-bold font-heading" href="#">
          {/* <!-- <img className="h-9" src="logo.png" alt="logo"> --> */}
          Web3Era
        </a>
        {/* <!-- Nav Links --> */}
        <ul className="hidden md:flex px-5 mx-auto font-semibold font-heading space-x-12">
          <li><a className="hover:text-hotpink font-bold" href="#">Home</a></li>
          <li><a className="hover:text-hotpink font-bold" href="#">Build</a></li>
          <li><a className="hover:text-hotpink font-bold" href="#">Community</a></li>
          <li><a className="hover:text-hotpink font-bold" href="#">Wiki</a></li>
        </ul>
        {/* <!-- Header Icons --> */}
        <div className="hidden xl:flex space-x-5 flex-row">
          {/* <!-- Sign In / Register      --> */}
          <button className="get-btn text-white flex flex-row gap-x-2 font-bold uppercase text-sm px-6 py-3 rounded-3xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:bg-hotpink" type="button">
        <a className="flex  hover:text-gray-200"> <Link to="/login">
              </Link>
        </a>Get Started
        </button>
          
        </div>
      </div>
      {/* <!-- Responsive navbar --> */}
      <a className="xl:hidden flex mr-6 items-center" href="#">
        <span className="flex absolute -mt-5 ml-4">
          <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
          </span>
        </span>
      </a>
      <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
      </a>
    </nav>
  </section>
</div>
</div>
  )
}
