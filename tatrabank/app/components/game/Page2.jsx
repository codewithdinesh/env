"use client"

import React, { useEffect } from 'react';

import Loading from '../Loading';
import { useRouter } from 'next/navigation';


const Page2 = () => {

    const router = useRouter();



    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("/game/page3");
        }, 3000);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className='flex items-center rounded-md bg-red-200 py-5 justify-items-center align-middle'>
            <div className='flex flex-col justify-center items-center'>
                <div
                    className='p-2 m-1 font-semibold uppercase game text-3xl'
                    style={{
                        fontFamily: 'Press Start 2P',
                    }}
                >
                    Quest🔍
                    <Loading />
                    <br />
                </div>
            </div>
        </div>
    );
};

export default Page2;