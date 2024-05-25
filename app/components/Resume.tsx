import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { CSSProperties } from 'react';

interface CustomCSSProperties extends CSSProperties {
    '--value'?: string;
    '--size'?: string;
    '--thickness'?: string;
  }

const Resume = () => {
    const [activeTab, setActiveTab] = useState('education');

    return (
      <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-base-200 p-10 rounded-lg shadow-lg pt-20"
    >
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
          </motion.div>
    );
}

export default Resume