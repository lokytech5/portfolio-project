import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useAboutMe from '../hooks/useAboutMe';
import imageLoader from '../utils/imageLoader';
import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  const { data: aboutMe, error, isLoading } = useAboutMe();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const handleDownload = async (url: string) => {
    setIsDownloading(true);
    setShowToast(false);
    try {
      const a = document.createElement('a');
      a.href = url;
      a.download = 'CV.pdf'; // You can change the file name as needed
      document.body.appendChild(a);
      a.click();
      a.remove();
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const renderDescription = () => {
    if (!aboutMe?.description) return null;

    const paragraphs = aboutMe.description.split('\n').map((paragraph, index) => (
      <p key={index} className="mb-4">{paragraph}</p>
    ));

    if (isExpanded) {
      return (
        <>
          {paragraphs}
          <button onClick={handleReadMore} className="btn btn-link">Read Less</button>
        </>
      );
    }

    const shortDescription = paragraphs.slice(0, 2);

    return (
      <>
        {shortDescription}
        <button onClick={handleReadMore} className="btn btn-link">Read More</button>
      </>
    );
  };

  useEffect(() => {
    if (contentRef.current && imageRef.current) {
      imageRef.current.style.height = `${contentRef.current.clientHeight}px`;
    }
  }, [aboutMe, isExpanded]);

  return (
    <div className="bg-base-200 p-10 rounded-lg shadow-lg pt-20">
      <h1 className="text-5xl font-bold mb-10 text-left">About Me</h1>
      <div className="hero-content flex-col lg:flex-row items-center">
        <div className="hidden lg:block flex-shrink-0 lg:mr-10 lg:mb-32">
          <div ref={imageRef} className="relative w-72">
            {aboutMe?.image && aboutMe.image.data && (
              <Image
                loader={imageLoader}
                src={aboutMe.image.data.attributes.formats.large.url}
                alt="About Me Image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-2xl"
              />
            )}
          </div>
        </div>
        <div className="w-full lg:w-1/2" ref={contentRef}>
          <div className="card bg-base-300 shadow-md p-5 mb-6">
            <div className="flex flex-col w-full border-opacity-50">
              <div className="grid h-auto card bg-base-300 rounded-box place-items-center">
                {renderDescription()}
              </div>
              <div className="divider"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">          
                <div>
                  <p className="font-bold">Name:</p>
                  <p>{aboutMe?.name}</p>
                </div>

                <div>
                  <p className="font-bold">Address:</p>
                  <p>{aboutMe?.address}</p>
                </div>

                <div>
                  <p className="font-bold">Zip code:</p>
                  <p>{aboutMe?.zipCode}</p>
                </div>

                <div>
                  <p className="font-bold">Phone:</p>
                  <p>{aboutMe?.phone}</p>
                </div>

                <div>
                  <p className="font-bold">Email:</p>
                  <p>{aboutMe?.email}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="stats shadow mt-4 bg-neutral text-white">
            <div className="stat flex items-center justify-between">
              <div>
                <div className="stat-title text-white">Completed Projects</div>
                <div className="stat-value">{aboutMe?.projectCount}</div>
              </div>
              <FaCheckCircle className="text-green-500 text-2xl"/>
            </div>
          </div>
          <div className="mt-6">
            {aboutMe?.cvUrl ? (
              <>
                <button
                  className="btn btn-primary"
                  onClick={() => handleDownload(aboutMe.cvUrl)}
                  disabled={isDownloading}
                >
                  {isDownloading ? 'Downloading...' : 'Download CV'}
                </button>
                {isDownloading && (
                  <div className="mt-2">
                    <span className="loading loading-dots loading-md"> Download in progress...</span>
                  </div>
                )}
              </>
            ) : (
              <button className="btn btn-primary" disabled>No CV available</button>
            )}
          </div>
        </div>
      </div>
      {showToast && (
        <div className="toast toast-end">
          <div className="alert alert-success">
            <span>Download completed successfully.</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
