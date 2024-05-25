"use client"
import { CSSProperties } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import pic1 from '../public/images/clear.jpg'
import pic2 from '../public/images/simple.jpg'
import { useState } from 'react'
import { Github } from 'lucide-react';
import Hero from './components/Hero';
import Resume from './components/Resume';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

interface CustomCSSProperties extends CSSProperties {
  '--value'?: string;
  '--size'?: string;
  '--thickness'?: string;
}

export default function Home() {
  const [ activeTab, setActiveTab] = useState('education')
  const projects = [
    {
      title: 'Tuti Hairs',
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
         <Hero/>
        </div>

     {/* {Resume} */}
        <Resume/>

        {/* About Me Section */}

       {/* About Me Section */}
      <About/>


       {/* Projects Section */}
      <Projects/>



        {/* {Footer Section} */}

       <Footer/>
        

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
