// Main Components Wrapper


import React from 'react'
import Header from './Header'
import Hero from './Hero'
import AboutUs from './about'
import WhyShouldInvest from './WhyShouldInvest'
import Footer from './Footer'


const Main = () => {
    return (
        <div className='flex  flex-col items-center justify-between p-3 min-h-screen w-full justify-items-center rounded-md'>

            {/* Hero */}
            <Hero />

            {/* Why should invest */}
            <WhyShouldInvest />

            {/* About  */}
            <AboutUs />



        </div>

    )
}

export default Main