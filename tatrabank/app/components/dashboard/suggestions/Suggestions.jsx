"use client";

import React, { useEffect, useState } from 'react';

import { useCookies } from 'next-client-cookies';
import InfoCard from '../../InfoCard';
import Loading from '../../Loading';


const InvestmentSuggestionPage = () => {

    const [userData, setUserData] = useState(null);

    const [iseLoading, setIsLoading] = useState(false);

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

                }

                console.log("Data", data);
            } catch (error) {
                console.log(error);
                alert("An error occured while fetching user data");
            }

        };

        loadData();

        console.log(userData);
    }, []);

    const [goal, setGoal] = useState('');
    const [risk, setRisk] = useState('');
    const [duration, setDuration] = useState('');

    const [suggestions, setSuggestions] = useState("");

    const goals = [
        "Retirement",
        "Education",
        "Vacation",
        "Emergency Fund",
        "Buying a House",
        "Buying a Car",
        "Starting a Business",
        "Saving for a Wedding",
        "Saving for a Baby",
        "Saving for a Pet",
        "Saving for a Gadget",
        "Saving for a Hobby",
        "Saving for a Sport",
        "Saving for a Cause",
        "Saving for a Charity",
        "Wealth Building",
        "Other"
    ];


    const riskOptions = ["Low", "Medium", "High"];

    const durationOptions = [
        "Short-term (1-3 years)",
        "Medium-term (3-5 years)",
        "Long-term (5+ years)"
    ];



    const handleSubmit = async (e) => {

        setIsLoading(true);
        e.preventDefault();

        console.log('Goal:', goal);
        console.log('Risk:', risk);
        console.log('Duration:', duration);


        try {



            let headersList = {
                "Accept": "*/*",
                "Content-Type": "application/x-www-form-urlencoded"
            }

            console.log(userData);

            let bodyContent = `token=${token}&age=${userData.age}&income=${userData.income}&risk_factor=${risk}&duration=${duration}&goal=${goal}&libilities=${userData.lib}&assets=${userData.assets}&savings=${userData.saving}`;

            let response = await fetch("http://localhost:5000/api/suggest", {
                method: "POST",
                body: bodyContent,
                headers: headersList
            });

            let data = await response.json();

            setSuggestions(data.suggestion);

            console.log(data);

            setIsLoading(false);

        } catch (error) {

            alert("An error occured while fetching investment suggestions");

        }

        // router.push?(`/investment-results?goal=${goal}&risk=${risk}&duration=${duration}`);
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold mb-4">Investment Suggestion</h1>


            <form onSubmit={handleSubmit} className="w-full">
                <div className="mb-4">
                    <label htmlFor="goal" className="block  text-lg  text-gray-700 mb-2 font-bold">Choose your goal:</label>
                    <div className="flex flex-wrap">
                        {goals.map((goalOption, index) => (
                            <div key={index} onClick={() => setGoal(goalOption)} className={`p-4 m-1 border rounded-md cursor-pointer hover:bg-gray-100 ${goal === goalOption ? 'bg-blue-200' : ''}`}>
                                <p className="text-lg ">{goalOption}</p>
                            </div>
                        ))}
                    </div>
                </div>


                <div className="mb-4">
                    <label htmlFor="risk" className="block text-lg   text-gray-700 font-semibold">Select your risk tolerance:</label>
                    <div className="flex flex-wrap">
                        {riskOptions.map((riskOption, index) => (
                            <div key={index} onClick={() => setRisk(riskOption)} className={`p-4 m-1 border rounded-md cursor-pointer hover:bg-gray-100 ${risk === riskOption ? 'bg-blue-200' : ''}`}>
                                <p className="text-lg">{riskOption}</p>
                            </div>
                        ))}
                    </div>
                </div>



                <div className="mb-4">
                    <label htmlFor="duration" className="block text-sm font-medium text-gray-700">Select investment duration:</label>
                    <div className="flex flex-wrap">
                        {durationOptions.map((durationOption, index) => (
                            <div key={index} onClick={() => setDuration(durationOption)} className={`p-4 border rounded-md cursor-pointer hover:bg-gray-100 ${duration === durationOption ? 'bg-blue-200' : ''}`}>
                                <p className="text-lg font-semibold">{durationOption}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {
                    iseLoading && <Loading />
                }


                <button type="submit" className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Get Investment Suggestions</button>

                {suggestions && <div className="mt-4">
                    <InfoCard title="Investment Suggestions" desc={suggestions} />
                </div>}
            </form>
        </div>
    );
};

export default InvestmentSuggestionPage;
