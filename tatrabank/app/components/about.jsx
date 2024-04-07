"use client"

import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
    return (
        <div className="flex sm:flex-col md:flex-row shadow-lg m-2  p-12 bg-gray-100 min-h-screen items-center rounded-md">
            <div className=" text-justify">



                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-5xl font-extrabold "
                >
                    About Us
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="mt-4 text-lg text-gray-600"
                >
                    Your personalized investment guide. Our app uses advanced algorithms to tailor investment strategies to your unique style and goals. With interactive features, games, and personalized advice, we make investing engaging and educational. Get to know yourself better financially and level up your investment game with FinWiz!
                </motion.p>

            </div>
        </div>
    );
};

export default AboutUs;
