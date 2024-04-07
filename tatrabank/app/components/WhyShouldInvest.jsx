"use client";

import React from 'react'
import InfoCard from './InfoCard'

import { motion } from 'framer-motion';

const WhyShouldInvest = () => {

    const data = [
        {
            "title": "Asset Growth and Income Achievement",
            "description": "Investing with FinWiz is your pathway to the growth of assets and the attainment of income. We focus on maximizing your investment returns to help you achieve your financial goals efficiently."
        },
        {
            "title": "Inflation Protection",
            "description": "Safeguard your savings against the eroding effects of inflation. FinWiz ensures that your wealth retains its purchasing power over time, allowing you to maintain your standard of living and financial security."
        },
        {
            "title": "Diversification through Mutual Funds",
            "description": "Simplify your investment journey with mutual funds, the easiest way to access the financial markets. InvestoMate spreads your investment across multiple assets, reducing risk by not relying solely on one 'card'."
        },
        {
            "title": "Stability and Liquidity",
            "description": "Enjoy peace of mind knowing that your investments with FinWiz offer both stability and liquidity. We understand the importance of having access to your funds when you need them, providing you with the flexibility to manage your finances effectively."
        }
    ]

    return (
        <div className='flex sm:flex-col sm:w-full lg:flex-row shadow-lg m-2  p-12 bg-gray-50 min-h-screen items-center rounded-md bg-[url("/images/hero.png")]'>

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl font-extrabold "
            >
                Why Should Invest?
            </motion.h2>

            {
                data.map((item, index) => {
                    return (
                        <InfoCard key={index} title={item.title} desc={item.description} />
                    )
                })
            }
        </div>
    )
}

export default WhyShouldInvest