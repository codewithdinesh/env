"use client"

import Link from 'next/link'
import React from 'react'

import Head from 'next/head';
import { motion } from 'framer-motion';

const Hero = () => {
    return (

        <div className='flex sm:flex-col md:flex-row shadow-lg  p-12 bg-gray-100 min-h-screen items-center'>

            <motion.main
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center   rounded-lg  "
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to FinWiz</h1>
                <p className="text-lg text-gray-700 mb-8">
                    Your personalized investment advisor that fits your style and goals.
                </p>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <Link href="/dashboard">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                            Get Started
                        </button>
                    </Link>
                </motion.div>
            </motion.main>


            <div className=' w-full md:w-2/5'>
                <img src="images/invest.png" alt="hero" className="object-cover rounded-md" />

            </div>

        </div>



    )
}

export default Hero