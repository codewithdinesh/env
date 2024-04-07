
"use client";

import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { useCookies } from 'next-client-cookies';

const NavBar = () => {


    const cookies = useCookies();

    const login_token = cookies.get('token');

    const [navbarOpen, setNavbarOpen] = useState(false);


    const handleToggle = () => {
        setNavbarOpen(!navbarOpen);
    };



    return (
        <div className='hidden md:block'>

            <nav className='     
            relative
                w-full
                flex flex-wrap
                items-center
                justify-between
                py-2
                bg-gray-100
                text-gray-500
                hover:text-gray-700
                focus:text-gray-700
                shadow-lg
                navbar navbar-expand-lg navbar-light '>

                <div className="container-fluid w-full flex flex-wrap items-center justify-between px-2 md:px-6">

                    <div className='cursor-pointer'>
                        <h1 className=' text-blue-800 font-semibold text-2xl'>
                            <Link href={"/"}>
                                FinWiz
                            </Link>
                        </h1>
                    </div>

                    <div className="bg-opacity-10 backdrop-blur-md backdrop-filter bg-red-50 p-3 px-6 rounded-full">

                        <Link href="/blogs" className="cursor-pointer space-x-2 font-semibold text-lg  p-2 m-1 hover:text-blue-700 w-full">
                            Blogs
                        </Link>
                        <Link href="/explore" className="cursor-pointer space-x-2 font-semibold text-lg  p-2 m-1 hover:text-blue-700  w-full">
                            Game
                        </Link>


                        {
                            login_token ?

                                <div className="inline-flex" role="group">
                                    <Link href="/dashboard" className="cursor-pointer space-x-2 font-semibold text-lg  p-2 m-1 hover:text-blue-700  w-full">
                                        <button
                                            type="button"
                                            className="rounded-lg
                                                        px-6
                                                        py-2
                                                        border-2 border-blue-600
                                                        text-blue-600
                                                        font-medium
                                                        text-xs
                                                        leading-tight
                                                        uppercase
                                                        hover:bg-black hover:bg-opacity-5
                                                        focus:outline-none focus:ring-0
                                                        transition
                                                        duration-150
                                                        ease-in-out
                                                        m-1"
                                        >
                                            Dashboard

                                        </button>


                                    </Link>


                                    <button
                                        onClick={
                                            () => {
                                                removeToken()
                                                window.location.reload();
                                            }

                                        }
                                        type="button"
                                        className="rounded-lg
                                    px-6
                                    py-2
                                    border-2 border-red-600
                                    text-red-600
                                    font-medium
                                    text-xs
                                    leading-tight
                                    uppercase
                                    hover:bg-black hover:bg-opacity-5
                                    focus:outline-none focus:ring-0
                                    transition
                                    duration-150
                                    ease-in-out
                                                        m-1" >
                                        Logout
                                    </button>
                                </div>

                                :

                                <div className="inline-flex" role="group">

                                    <Link href="/account/login">
                                        <button
                                            type="button"
                                            className="rounded-lg
                                                        px-6
                                                        py-2
                                                        border-2 border-blue-600
                                                        text-blue-600
                                                        font-medium
                                                        text-xs
                                                        leading-tight
                                                        uppercase
                                                        hover:bg-black hover:bg-opacity-5
                                                        focus:outline-none focus:ring-0
                                                        transition
                                                        duration-150
                                                        ease-in-out
                                                        m-1" >
                                            Login
                                        </button>
                                    </Link>

                                    <Link href="/account/register">
                                        <button
                                            type="button"
                                            className="rounded-lg
                                                    px-6
                                                    py-2
                                                    border-2 border-blue-600
                                                    text-blue-600
                                                    font-medium
                                                    text-xs
                                                    leading-tight
                                                    uppercase
                                                    hover:bg-black hover:bg-opacity-5
                                                    focus:outline-none focus:ring-0
                                                    transition
                                                    duration-150
                                                    ease-in-out
                                                    m-1">
                                            Register
                                        </button>
                                    </Link>
                                </div>
                        }


                    </div>



                </div>
            </nav >


        </div >
    )
}

export default NavBar