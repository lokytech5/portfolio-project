import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import pic2 from '../../public/images/simple.jpg';
import ContactFormModal from './ContactFormModal';


const Hero = () => {
    return (

<div className="hero min-h-screen bg-base-200 pt-20 relative">
      <div className="hero-content flex-col md:flex-row-reverse lg:flex-row-reverse items-center">
        <motion.div
          initial={{ borderColor: "#000", borderWidth: "2px", borderStyle: "solid" }}
          animate={{ borderColor: ["#000", "#ff0000", "#00ff00", "#0000ff", "#000"], borderWidth: ["2px", "4px", "2px", "4px", "2px"] }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "loop" }}
          className="rounded-full p-2 relative"
        >
          <Image
            src={pic2}
            alt="Hero Image"
            width={500}
            height={500}
            className="rounded-full shadow-2xl"
          />
          <div className="absolute bottom-4 left-4 bg-white p-2 rounded-md shadow-md">
            <span className="text-xl font-bold text-purple-600">3+</span>
            <p className="text-xs text-gray-600">Years of Experience</p>
          </div>
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
          <ContactFormModal variant="hero" />

            <Link href="/blog">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn bg-white text-black border border-black text-lg py-3 px-6 hover:bg-accent transition-transform"
              >
                Read My Blog
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero