import React from 'react'
import { smoothScrollTo } from '../utils/smoothScroll'
import ContactFormModal from './ContactFormModal'

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="navbar bg-accent rounded-lg shadow-lg overflow-hidden mx-auto">
        <label htmlFor="my-drawer-3" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </label>
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">Lokosman</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li><a className="cursor-pointer" onClick={() => smoothScrollTo('home')}>Home</a></li>
          <li><a className="cursor-pointer" onClick={() => smoothScrollTo('resume')}>Resume</a></li>
          <li><a className="cursor-pointer" onClick={() => smoothScrollTo('about')}>About</a></li>
          <li><a className="cursor-pointer" onClick={() => smoothScrollTo('projects')}>Projects</a></li>
          <li><a href="/blog">Blog</a></li>
          </ul>
        </div>
        <div className="navbar-end">
        <ContactFormModal variant="navbar" />
        </div>
      </div>
    </div>
  )
}

export default Navbar