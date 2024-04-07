"use client";

import React, { useEffect, useState } from 'react'
import InputModal from './InputModal';

import { useCookies } from 'next-client-cookies';

import { Bar } from 'react-chartjs-2';
import InteractiveChart from '../InteractiveChart';


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
        };

        loadData();

    }, []);






    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Dashboard</h2>


                <InteractiveChart data={userData} />


                {userData ? (
                    <div>
                        <p className="text-lg font-semibold">Your Input Data:</p>
                        <p>Income: {userData.income}</p>
                        <p>Liabilities: {userData.lib}</p>
                        <p>Assets: {userData.assets}</p>
                    </div>
                ) : (
                    <p>No data available yet.</p>
                )}
            </div>
            <InputModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleModalSubmit} />
        </div>
    );

}
export default Dashboard;