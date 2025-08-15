import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { CSSProperties } from 'react';
import useResumeData from '../hooks/useResumeData';
import LoadingSpinner from './LoadingSpinner';
import ErrorAlert from './ErrorAlert';
import imageLoader from '../utils/imageLoader';
import Image from 'next/image';

interface CustomCSSProperties extends CSSProperties {
    '--value'?: string;
    '--size'?: string;
    '--thickness'?: string;
  }

const Resume = () => {
    const [activeTab, setActiveTab] = useState('education');
    const { data: resumeData, isLoading, isError } = useResumeData();

    if(isLoading) return <LoadingSpinner/>
    if(isError) return <ErrorAlert />
  
    return (
      <div className="bg-base-200 p-10 rounded-lg shadow-lg pt-20">
          <h1 className="text-5xl font-bold mb-10">Resume</h1>
          <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/4">
                  <ul className="menu bg-base-100 rounded-box p-2">
                      <li><button className={`btn btn-ghost ${activeTab === 'education' ? 'text-primary' : ''}`} onClick={() => setActiveTab('education')}>Education</button></li>
                      <li><button className={`btn btn-ghost ${activeTab === 'experience' ? 'text-primary' : ''}`} onClick={() => setActiveTab('experience')}>Experience</button></li>
                      <li><button className={`btn btn-ghost ${activeTab === 'programming' ? 'text-primary' : ''}`} onClick={() => setActiveTab('programming')}>Programming Languages</button></li>
                      <li><button className={`btn btn-ghost ${activeTab === 'framework' ? 'text-primary' : ''}`} onClick={() => setActiveTab('framework')}>Framework</button></li>
                      <li><button className={`btn btn-ghost ${activeTab === 'database' ? 'text-primary' : ''}`} onClick={() => setActiveTab('database')}>Database</button></li>
                      <li><button className={`btn btn-ghost ${activeTab === 'cloud' ? 'text-primary' : ''}`} onClick={() => setActiveTab('cloud')}>Cloud Technology</button></li>
                  </ul>
              </div>
              <div className="lg:w-3/4 mt-8 lg:mt-0 lg:ml-10">
                  {activeTab === 'education' && (
                      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                          {resumeData.educations?.map((edu) => (
                              <li key={edu.id} className="mb-4 lg:mb-0">
                                  <div className="timeline-middle">
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                      </svg>
                                  </div>
                                  <div className="timeline-start md:text-end mb-10">
                                      <time className="font-mono italic">{edu.attributes.year}</time>
                                      <div className="text-lg font-black">{edu.attributes.title}</div>
                                      {edu.attributes.description}
                                  </div>
                                  <hr className="bg-primary mt-5 lg:mt-0" />
                              </li>
                          ))}
                      </ul>
                  )}
                  {activeTab === 'experience' && (
                      <div className="space-y-4">
                          {resumeData.experiences?.map((exp) => (
                              <div key={exp.id} className="collapse collapse-arrow bg-base-200">
                                  <input type="checkbox" className="peer" />
                                  <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                                      {exp.attributes.jobTitle}
                                  </div>
                                  <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                                      <p>{exp.attributes.details}</p>
                                  </div>
                              </div>
                          ))}
                      </div>
                  )}
                  {activeTab === 'programming' && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                          {resumeData.programmingLanguages?.map((lang) => (
                              <div key={lang.id} className="card w-full bg-base-100 shadow-xl">
                                  <div className="card-body text-center">
                                      <h2 className="card-title">{lang.attributes.name}</h2>
                                      <div className="radial-progress text-xl text-primary" style={{ "--value": `${lang.attributes.percentage}`, "--size": "12rem", "--thickness": "5px" } as CustomCSSProperties} role="progressbar">{lang.attributes.percentage}%</div>
                                  </div>
                              </div>
                          ))}
                      </div>
                  )}
                  {activeTab === 'framework' && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                          {resumeData.frameworks?.map((framework) => (
                              <div key={framework.id} className="card w-full bg-base-100 shadow-xl">
                                  <figure className="w-full">
                                  {framework.attributes.image?.data?.attributes?.formats?.medium?.url ? (
            <Image
              loader={imageLoader}
              src={framework.attributes.image.data.attributes.formats.medium.url}
              alt={framework.attributes.name}
              width={400}
              height={200}
              className="object-cover w-full"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-48 bg-gray-200">
              <span>No image available</span>
            </div>
          )}
                                  </figure>
                                  <div className="card-body text-left">
                                      <h2 className="card-title">{framework.attributes.name}</h2>
                                  </div>
                              </div>
                          ))}
                      </div>
                  )}
                  {activeTab === 'database' && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                          {resumeData.databases?.map((db) => (
                              <div key={db.id} className="card w-full bg-base-100 shadow-xl">
                                  <div className="card-body text-center">
                                      <h2 className="card-title">{db.attributes.name}</h2>
                                      <div className="radial-progress text-xl text-primary" style={{ "--value": `${db.attributes.percentage}`, "--size": "12rem", "--thickness": "5px" } as CustomCSSProperties} role="progressbar">{db.attributes.percentage}%</div>
                                  </div>
                              </div>
                          ))}
                      </div>
                  )}
                  {activeTab === 'cloud' && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                          {resumeData.cloudTechnologies?.map((cloud) => (
                              <div key={cloud.id} className="card w-full bg-base-100 shadow-xl">
                                  <figure className="w-full">
                                  {cloud.attributes.image?.data?.attributes?.formats?.medium?.url ? (
            <Image
              loader={imageLoader}
              src={cloud.attributes.image.data.attributes.formats.medium.url}
              alt={cloud.attributes.name}
              width={400}
              height={200}
              className="object-cover w-full"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-48 bg-gray-200">
              <span>No image available</span>
            </div>
          )}
                                  </figure>
                                  <div className="card-body text-left">
                                      <h2 className="card-title">{cloud.attributes.name}</h2>
                                  </div>
                              </div>
                          ))}
                      </div>
                  )}
              </div>
          </div>
      </div>
    );
}

export default Resume