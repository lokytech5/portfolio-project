import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import pic2 from '../../public/images/simple.jpg';

const Hero = () => {
    return (

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
  )
}

export default Hero