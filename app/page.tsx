import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
    <div className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
      <div className="drawer-content flex flex-col">

        {/* Navbar */}
        <div className="fixed top-0 left-0 right-0 z-50 p-4">
          <div className="navbar bg-base-100 rounded-lg shadow-lg overflow-hidden mx-auto">
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
                <li><a>Home</a></li>
                <li><a>Resume</a></li>
                <li><a>About</a></li>
                <li><a>Project</a></li>
              </ul>
            </div>
            <div className="navbar-end">
              <a className="btn">Contact</a>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="hero min-h-screen bg-base-200 pt-20">
          <div className="hero-content flex-col md:flex-row-reverse lg:flex-row-reverse items-center">
            <div className="lg:w-1/2">
              <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Hero Image" width={500} height={500} className="rounded-lg shadow-2xl" />
            </div>
            <div className="lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0">
              <h1 className="text-6xl font-bold mb-4">
                Hi, <span className="block">I am <span className="text-purple-600 tracking-wide animate-pulse">Lokosman</span></span>
              </h1>
              <p className="text-lg mb-6">Backend Engineer and Cloud Administrator with a passion for developing scalable and efficient backend solutions.</p>
              <div className="flex justify-center lg:justify-start space-x-4">
                <Link href="/contact">
                  <button className="btn btn-primary text-lg py-3 px-6 hover:scale-105 transition-transform">Get in touch</button>
                </Link>
                <Link href="/resume">
                  <button className="btn bg-white text-black border border-black text-lg py-3 px-6 hover:bg-gray-100 transition-transform">Download CV</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="drawer-side z-50">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content flex flex-col justify-center items-center space-y-4 no-underline rounded-box">
          {/* Sidebar content here */}
          <li className="text-center">
            <Link href="/home">Home</Link>
          </li>
          <li className="text-center">
            <Link href="/resume">Resume</Link>
          </li>
          <li className="text-center">
            <Link href="/project">Project</Link>
          </li>
          <li className="text-center">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  </main>
  )
}
