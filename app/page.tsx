"use client"
import { CSSProperties } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import pic1 from '../public/images/clear.jpg'
import pic2 from '../public/images/simple.jpg'
import { useState } from 'react'

interface CustomCSSProperties extends CSSProperties {
  '--value'?: string;
  '--size'?: string;
  '--thickness'?: string;
}

export default function Home() {
  const [ activeTab, setActiveTab] = useState('education')
  const projects = [
    {
      title: 'Project One',
      description: 'This is a brief description of Project One. It uses technologies such as React, Node.js, and MongoDB.',
      image: pic1,
      githubLink: 'https://github.com/yourusername/project-one',
      liveLink: 'https://project-one.example.com',
      techStack: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Project Two',
      description: 'This is a brief description of Project Two. It uses technologies such as Next.js, TypeScript, and Tailwind CSS.',
      image: pic2,
      githubLink: 'https://github.com/yourusername/project-two',
      liveLink: 'https://project-two.example.com',
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS']
    }
  ];
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
        <div className="bg-base-200 p-10 rounded-lg shadow-lg pt-20">
        <h1 className="text-5xl font-bold mb-10">Resume</h1>
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/4">
              <ul className="menu bg-base-100 rounded-box p-2">
                <li><button className={`btn btn-ghost ${activeTab === 'education' ? 'text-primary' : ''}`} onClick={() => setActiveTab('education')}>Education</button></li>
                <li><button className={`btn btn-ghost ${activeTab === 'experience' ? 'text-primary' : ''}`} onClick={() => setActiveTab('experience')}>Experience</button></li>
                <li><button className={`btn btn-ghost ${activeTab === 'skills' ? 'text-primary' : ''}`} onClick={() => setActiveTab('skills')}>Skills</button></li>
               
              </ul>
            </div>
            
            <div className="lg:w-3/4 mt-8 lg:mt-0 lg:ml-10">
               {/* {Education} */}
              
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
               {/* {Experience} */}
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
               {/* {Skillset} */}
               {activeTab === 'skills' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="card w-full bg-base-100 shadow-xl">
                      <div className="card-body text-center">
                        <h2 className="card-title">CSS</h2>
                        <div className="radial-progress text-xl text-primary" style={{ "--value": "70", "--size": "12rem", "--thickness": "5px" } as CustomCSSProperties} role="progressbar">70%</div>
                      </div>
                    </div>
                    <div className="card w-full bg-base-100 shadow-xl">
                      <div className="card-body text-center">
                        <h2 className="card-title">HTML</h2>
                        <div className="radial-progress text-xl" style={{ "--value": "70", "--size": "12rem", "--thickness": "5px" } as CustomCSSProperties} role="progressbar">70%</div>
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
                      <div className="card-body text-center">
                        <h2 className="card-title">jQuery</h2>
                        <div className="radial-progress text-xl" style={{ "--value": "70", "--size": "12rem", "--thickness": "5px" } as CustomCSSProperties} role="progressbar">70%</div>
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

        {/* About Me Section */}

        {/* About Me Section */}
        <div className="bg-base-200 p-10 rounded-lg shadow-lg pt-20">
        <h1 className="text-5xl font-bold mb-10">About Me</h1>
          <div className="hero-content flex-col lg:flex-row items-center">
            <div className="flex-shrink-0 lg:mr-10">
              <Image
                src={pic1}
                alt="About Me Image"
                width={400}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              
              <p className="py-6">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                <div>
                  <p className="font-bold">Name:</p>
                  <p>Ronaldo Fredrickson</p>
                </div>
                <div>
                  <p className="font-bold">Address:</p>
                  <p>San Francisco CA 97987 USA</p>
                </div>
                <div>
                  <p className="font-bold">Zip code:</p>
                  <p>1000</p>
                </div>
                <div>
                  <p className="font-bold">Email:</p>
                  <p>ronaldo@gmail.com</p>
                </div>
                <div>
                  <p className="font-bold">Phone:</p>
                  <p>+1-2234-5678-9-0</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-xl"><span className="font-bold">120</span> Project complete</p>
              </div>
              <div className="mt-6">
                <Link href="/resume">
                  <button className="btn btn-primary">Download CV</button>
                </Link>
              </div>
            </div>
          </div>
        </div>


       {/* Projects Section */}
       <div className="bg-base-200 p-10 rounded-lg shadow-lg">
            <h2 className="text-5xl font-bold mb-10">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="card bg-base-100 shadow-xl">
                  <figure className="relative">
                    <Image src={project.image} alt={project.title} layout="responsive" width={400} height={250} className="object-cover"/>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20.5v-2.5h3v2.5c0 .828-.448 1.5-1 1.5H10c-.552 0-1-.672-1-1.5v-2.5h3v2.5M16 3c2.209 0 4 1.791 4 4 0 2.645-2.022 5.255-4.57 7.854-1.031 1.105-2.162 2.146-3.303 3.197l-1.127 1.058A.75.75 0 017 18.75v-2.25a7.504 7.504 0 01-3-2.25c-2.533-2.843-4-5.454-4-8a4 4 0 118 0 4 4 0 018 0z" />
                      </svg>
                    </a>
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{project.title}</h2>
                    <p>{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span key={techIndex} className="badge badge-outline">{tech}</span>
                      ))}
                    </div>
                    <div className="card-actions justify-end mt-4">
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-primary">View Project</button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>



        {/* {Footer Section} */}

        <footer className="footer footer-center p-10 bg-base-100 text-base-content rounded">
  <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    </div>
  </nav> 
  <aside>
    <p>Copyright © 2024 - By Lokosman</p>
  </aside>
</footer>
        

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
