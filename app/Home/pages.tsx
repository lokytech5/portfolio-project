import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Resume from '../components/Resume'
import About from '../components/About'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import { smoothScrollTo } from '../utils/smoothScroll'

const HomePage = () => {

  const closeDrawer = () => {
    const drawerToggle = document.getElementById('my-drawer-3') as HTMLInputElement;
    if (drawerToggle) {
      drawerToggle.checked = false;
    }
  };

  const handleClick = (sectionId: string) => {
    smoothScrollTo(sectionId);
    closeDrawer();
  };

  return (
    <main>
    <div className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
                    <Navbar />
                    <section id="home">
                        <Hero />
                    </section>
                    <section id="resume">
                        <Resume />
                    </section>
                    <section id="about">
                        <About />
                    </section>
                    <section id="projects">
                        <Projects />
                    </section>
                    <Footer />
      </div>
      <div className="drawer-side z-50">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content flex flex-col justify-center items-center space-y-4 no-underline rounded-box">
          {/* Sidebar content here */}
         <li className="text-center">
              <a className="cursor-pointer" onClick={() => handleClick('home')}>Home</a>
            </li>
            <li className="text-center">
              <a className="cursor-pointer" onClick={() => handleClick('resume')}>Resume</a>
            </li>
            <li className="text-center">
              <a className="cursor-pointer" onClick={() => handleClick('projects')}>Projects</a>
            </li>
            <li className="text-center">
              <a className="cursor-pointer" onClick={() => handleClick('about')}>About</a>
            </li>
        </ul>
      </div>
    </div>
  </main>
  )
}

export default HomePage