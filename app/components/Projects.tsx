"use client"
import React from 'react'
import Image from 'next/image';
import { FaGithub } from "react-icons/fa";
import LoadingSpinner from './LoadingSpinner';
import ErrorAlert from './ErrorAlert';
import useProjects from '../hooks/useProjects';
import imageLoader from '../utils/imageLoader';

const Projects = () => {
  const { data: projects, error, isLoading } = useProjects();
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

  if(isLoading) return <LoadingSpinner/>
  if(error) return <ErrorAlert />
  
  return (
      
    <div className="bg-base-200 p-10 rounded-lg shadow-lg">
    <h2 className="text-5xl font-bold mb-10">Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects?.map((project, index) => (
        <div key={index} className="card bg-base-100 shadow-xl">
          <figure className="relative">
            {project.attributes.image && project.attributes.image.data && project.attributes.image.data.attributes.formats && project.attributes.image.data.attributes.formats.medium ? (
              <Image
                loader={imageLoader}
                src={project.attributes.image.data.attributes.formats.medium.url}
                alt={project.attributes.title}
                width={300}
                height={200}
                className="object-cover mt-10 rounded-lg"
              />
            ) : (
              <div style={{ width: 300, height: 200, backgroundColor: '#ccc' }} className="object-cover mt-10 rounded-lg">
                <p>No image available</p>
              </div>
            )}
            <a
              href={project.attributes.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-2 left-2 bg-black p-2 rounded-full shadow-lg"
            >
              <FaGithub className='size-4' />
            </a>
          </figure>
          <div className="card-body">
            <h2 className="card-title">{project.attributes.title}</h2>
            <p>{project.attributes.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.attributes.techStack && project.attributes.techStack.length > 0 ? (
                project.attributes.techStack.map((tech, techIndex) => (
                  <span key={techIndex} className="badge badge-outline">{tech}</span>
                ))
              ) : (
                <span>No tech stack available</span>
              )}
            </div>
            <div className="card-actions justify-start mt-4">
              <a href={project.attributes.liveLink} target="_blank" rel="noopener noreferrer">
                <button className="btn btn-primary">View Project</button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
        
  )
}

export default Projects