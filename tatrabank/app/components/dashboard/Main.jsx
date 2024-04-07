"use client";

import React, { useEffect, useState } from 'react'
import InputModal from './InputModal';

import { useCookies } from 'next-client-cookies';
import InfoCard from '../InfoCard';

import Link from 'next/link';



const Dashboard = () => {

    const [isModalOpen, setIsModalOpen] = useState(true);
    const [userData, setUserData] = useState(null);

    const handleModalSubmit = (data) => {
        setUserData(data);
        setIsModalOpen(false);
    };

    const token = useCookies().get('token');


    useEffect(() => {

        const loadData = async () => {


            try {
                let headersList = {
                    "Accept": "*/*",
                    "Content-Type": "application/x-www-form-urlencoded"
                }

                let bodyContent = `token=${token}`;

                let response = await fetch("http://localhost:5000/api/auth/user_details", {
                    method: "POST",
                    body: bodyContent,
                    headers: headersList
                });

                let data = await response.json();

                if (data.success && data.user.income) {


                    setUserData(data.user);
                    setIsModalOpen(false);
                }

                console.log("Data", data);

            } catch (error) {
                console.log(error);
                alert("An error occured while fetching user data");
            }
        };

        loadData();

    }, []);






    return (
        <div className="min-h-screen justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">


            <div className="w-full ">
                <h2 className="mt-1 text-center text-3xl font-extrabold text-gray-900">Dashboard</h2>


                {userData ? (
                    <div className='flex-col w-full  '>

                        <div className='flex p-2 justify-between flex-1'>

                            <p className="text-lg font-semibold">Your Current Data</p>


                            <button
                                type="button"
                                onClick={() => setIsModalOpen(true)}
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
                                Update

                            </button>


                        </div>

                        <div className='p-3 rounded-sm flex justify-center flex-1'>

                            <InfoCard title="Income" desc={userData.income} />
                            <InfoCard title="Expenses" desc={userData?.expenses} />
                            <InfoCard title="Savings" desc={userData?.savings} />
                            <InfoCard title="Assets" desc={userData?.assets} />


                        </div>
                    </div>
                ) : (
                    <p className=' p-2 w-full m-2 rounded-sm shadow-sm'>
                        No data available yet.
                    </p>
                )}
            </div>


            <div className="w-full ">
                <Link href="/dashboard/suggestions" className="cursor-pointer space-x-2 font-semibold text-lg  p-2 m-1 hover:text-blue-700  w-full">
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
                        Get Suggestions

                    </button>
                </Link>


                <InputModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleModalSubmit} />
            </div>




            <InputModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleModalSubmit} />
        </div>
    );

}
export default Dashboard;