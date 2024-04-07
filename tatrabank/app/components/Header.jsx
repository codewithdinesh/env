"use client";
import React from 'react';
import { motion } from 'framer-motion';
import NavBar from './Header/Navbar';

const Header = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            Hello
        </motion.div>
    );
};

export default Header;
