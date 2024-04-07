"use client"


import React from 'react'

// Show avatar , when user clicks on the avatar, it will start walking, on next click it will stop walking he will get hammer, on next click he will start hitting the hammer, on next click he will stop hitting the hammer, on next click he will get a key/ defination, on next click he will open the door and go to next page
const Page3 = () => {
    const [showSecondImage, setShowSecondImage] = React.useState(false);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setShowSecondImage(true);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='flex w-full min-h-screen '>
            <div className='flex flex-col items-center justify-center w-1/2'>
                <img src="/images/avatar.jpg" alt="avatar" className='w-36 h-36 rounded-full border-r-2 avatar bg-transparent ' />
            </div>

            <div>
                <img src="/images/box.jpg" alt="Box" className='w-36 h-36 rounded-full border-r-2 bg-transparent box ' />

                {showSecondImage && (
                    <img src='/images/box1.jpg' alt="Box" className='w-36 h-36 rounded-full border-r-2 bg-transparent opened_box fixed left-[400px]' />
                )}
            </div>
        </div>
    );
}

export default Page3