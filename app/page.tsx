"use client"
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import pic1 from '../public/images/clear.jpg'
import pic2 from '../public/images/simple.jpg'
import { useState } from 'react'

export default function Home() {
  const [ activeTab, setActiveTab] = useState('education')
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
              <motion.div
                initial={{ borderColor: "#000", borderWidth: "2px", borderStyle: "solid" }}
                animate={{ borderColor: ["#000", "#ff0000", "#00ff00", "#0000ff", "#000"], borderWidth: ["2px", "4px", "2px", "4px", "2px"] }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "loop" }}
                className="rounded-full p-2"
              >
                <Image
                  src={pic2}
                  alt="Hero Image"
                  width={500}
                  height={500}
                  className="rounded-full shadow-2xl"
                />
              </motion.div>
              <div className="lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0">
                <h1 className="text-6xl font-bold mb-4">
                  <motion.span
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="inline-block"
                  >
                    Hi,
                  </motion.span>{' '}
                  <motion.span
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="block"
                  >
                    I am{' '}
                    <motion.span
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 1 }}
                      className="text-purple-600 tracking-wide animate-pulse inline-block"
                    >
                      Lokosman
                    </motion.span>
                  </motion.span>
                </h1>
                <p className="text-lg mb-6">
                  Backend Engineer and Cloud Administrator with a passion for developing scalable and efficient backend solutions.
                </p>
                <div className="flex justify-center lg:justify-start space-x-4">
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn btn-primary text-lg py-3 px-6 transition-transform"
                    >
                      Get in touch
                    </motion.button>
                  </Link>
                  <Link href="/resume">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn bg-white text-black border border-black text-lg py-3 px-6 hover:bg-gray-100 transition-transform"
                    >
                      Download CV
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

     {/* {Resume} */}
        <div>
          {/* Timeline Section */}
        <div className="bg-base-200 p-10 rounded-lg shadow-lg">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/4">
              <ul className="menu bg-base-100 rounded-box p-2">
                <li><button className={`btn btn-ghost ${activeTab === 'education' ? 'text-primary' : ''}`} onClick={() => setActiveTab('education')}>Education</button></li>
                <li><button className={`btn btn-ghost ${activeTab === 'experience' ? 'text-primary' : ''}`} onClick={() => setActiveTab('experience')}>Experience</button></li>
                <li><button className={`btn btn-ghost ${activeTab === 'skills' ? 'text-primary' : ''}`} onClick={() => setActiveTab('skills')}>Skills</button></li>
               
              </ul>
            </div>
            <div className="lg:w-3/4 mt-8 lg:mt-0 lg:ml-10">
              {activeTab === 'education' && (
              <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
              <li>
                <div className="timeline-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-start md:text-end mb-10">
                  <time className="font-mono italic">1984</time>
                  <div className="text-lg font-black">First Macintosh computer</div>
                  The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer. It played a pivotal role in establishing desktop publishing as a general office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with integrated carrying handle; it came with a keyboard and single-button mouse.
                </div>
                <hr className="bg-primary"/>
              </li>
              <li>
              <hr className="bg-primary"/>
                <div className="timeline-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-end mb-10">
                  <time className="font-mono italic">1998</time>
                  <div className="text-lg font-black">iMac</div>
                  iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has been the primary part of Apple's consumer desktop offerings since its debut in August 1998, and has evolved through seven distinct forms
                </div>
                <hr className="bg-primary"/>
              </li>
              <li>
              <hr className="bg-primary"/>
                <div className="timeline-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-start md:text-end mb-10">
                  <time className="font-mono italic">2001</time>
                  <div className="text-lg font-black">iPod</div>
                  The iPod is a discontinued series of portable media players and multi-purpose mobile devices designed and marketed by Apple Inc. The first version was released on October 23, 2001, about 8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450 million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At over 20 years, the iPod brand is the oldest to be discontinued by Apple
                </div>
                <hr className="bg-primary"/>
              </li>
            </ul>
              )}
              {activeTab === 'experience' && (
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <li>
                  <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                  </div>
                  <div className="timeline-start md:text-end mb-10">
                    <time className="font-mono italic">1984</time>
                    <div className="text-lg font-black">First Macintosh computer</div>
                    The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer. It played a pivotal role in establishing desktop publishing as a general office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with integrated carrying handle; it came with a keyboard and single-button mouse.
                  </div>
                  <hr className="bg-primary"/>
                </li>
                <li>
                <hr className="bg-primary"/>
                  <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                  </div>
                  <div className="timeline-end mb-10">
                    <time className="font-mono italic">1998</time>
                    <div className="text-lg font-black">iMac</div>
                    iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has been the primary part of Apple's consumer desktop offerings since its debut in August 1998, and has evolved through seven distinct forms
                  </div>
                  <hr className="bg-primary"/>
                </li>
                <li>
                <hr className="bg-primary"/>
                  <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                  </div>
                  <div className="timeline-start md:text-end mb-10">
                    <time className="font-mono italic">2001</time>
                    <div className="text-lg font-black">iPod</div>
                    The iPod is a discontinued series of portable media players and multi-purpose mobile devices designed and marketed by Apple Inc. The first version was released on October 23, 2001, about 8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450 million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At over 20 years, the iPod brand is the oldest to be discontinued by Apple
                  </div>
                  <hr className="bg-primary"/>
                </li>
              </ul>
              )}
              {activeTab === 'skills' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="card w-full bg-base-100 shadow-xl">
                      <div className="card-body">
                        <h2 className="card-title">CSS</h2>
                        <div className="radial-progress text-primary">90%</div>
                        <div className="flex justify-between mt-2">
                          <span>28%</span>
                          <span>Last week</span>
                        </div>
                        <div className="flex justify-between mt-2">
                          <span>60%</span>
                          <span>Last month</span>
                        </div>
                      </div>
                    </div>
                    <div className="card w-full bg-base-100 shadow-xl">
                      <div className="card-body">
                        <h2 className="card-title">HTML</h2>
                        <div className="radial-progress text-primary">80%</div>
                        <div className="flex justify-between mt-2">
                          <span>28%</span>
                          <span>Last week</span>
                        </div>
                        <div className="flex justify-between mt-2">
                          <span>60%</span>
                          <span>Last month</span>
                        </div>
                      </div>
                    </div>
                    <div className="card w-full bg-base-100 shadow-xl">
                      <div className="card-body">
                        <h2 className="card-title">jQuery</h2>
                        <div className="radial-progress text-primary" style={{}}>75%</div>
                        <div className="flex justify-between mt-2">
                          <span>28%</span>
                          <span>Last week</span>
                        </div>
                        <div className="flex justify-between mt-2">
                          <span>60%</span>
                          <span>Last month</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
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
