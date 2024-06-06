import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import pic1 from '../../public/images/clear.jpg';
import { motion } from 'framer-motion';
import useAboutMe from '../hooks/useAboutMe';
import imageLoader from '../utils/imageLoader';

const About = () => {
  const { data: aboutMe, error, isLoading } = useAboutMe();
    return (
      <div className="bg-base-200 p-10 rounded-lg shadow-lg pt-20">
      <h1 className="text-5xl font-bold mb-10 text-left">About Me</h1>
      <div className="hero-content flex-col lg:flex-row items-center">
        <div className="hidden lg:block flex-shrink-0 lg:mr-10">
          {aboutMe?.image && aboutMe.image.data && (
            <Image
            loader={imageLoader}
            src={aboutMe.image.data.attributes.formats.large.url}
            alt="About Me Image"
            width={400}
            height={400}
            className="rounded-lg shadow-2xl"
          />
          )}
        </div>
        <div>
          <p className="py-6">{aboutMe?.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
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
              <p className="font-bold">Email:</p>
              <p>{aboutMe?.email}</p>
            </div>
            <div>
              <p className="font-bold">Phone:</p>
              <p>{aboutMe?.phone}</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-xl"><span className="font-bold">{aboutMe?.projectCount}</span> Project complete</p>
          </div>
          <div className="mt-6">
            {aboutMe?.cvUrl ? (
              <Link href={aboutMe.cvUrl}>
                <button className="btn btn-primary">Download CV</button>
              </Link>
            ) : (
              <button className="btn btn-primary" disabled>No CV available</button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About