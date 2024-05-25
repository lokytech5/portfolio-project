import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import pic1 from '../../public/images/clear.jpg';
import { motion } from 'framer-motion';

const About = () => {
    return (
      <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-base-200 p-10 rounded-lg shadow-lg pt-20"
    >
        <div className="bg-base-200 p-10 rounded-lg shadow-lg pt-20">
          <h1 className="text-5xl font-bold mb-10 text-left">About Me</h1>
          <div className="hero-content flex-col lg:flex-row items-center">
            <div className="hidden lg:block flex-shrink-0 lg:mr-10">
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
        </motion.div>
  )
}

export default About