"use client";

import React, { useState } from 'react';

import { useCookies } from 'next-client-cookies';

const InputModal = ({ isOpen, onClose, onSubmit }) => {


    const token = useCookies().get('token');


    const [formData, setFormData] = useState({
        income: '',
        expenses: '',
        savings: '',
        lib: '',
        assets: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // API call

        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/x-www-form-urlencoded"
        }

        console.log(formData);

        let bodyContent = `token=${token}&income=${formData.income}&savings=${formData.savings}&expenses=${formData.expenses}&lib=${formData.lib}&assets=${formData.assets}`;

        let response = await fetch("http://localhost:5000/api/auth/update_user", {
            method: "POST",
            body: bodyContent,
            headers: headersList
        });

        let data = await response.json();


        console.log(data);

        onSubmit(formData);
    };

    return (
        <div className={`fixed z-10 inset-0 overflow-y-auto ${isOpen ? 'block' : 'hidden'} `}>
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">

                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 text-center">
                        <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                            Enter your details
                        </h3>

                        <p> we want to know more about you.. </p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">

                            {/* Income */}
                            <div className="mb-4">
                                <label htmlFor="income" className="block text-gray-700 text-sm font-bold mb-2">Income:</label>
                                <input type="text" id="income" name="income" value={formData.income} onChange={handleChange} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your current monthly income" />
                            </div>


                            {/* Savings */}
                            <div className="mb-4">
                                <label htmlFor="savings" className="block text-gray-700 text-sm font-bold mb-2">Savings:</label>
                                <input type="text" id="savings" name="savings" value={formData.savings} onChange={handleChange} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your monthly savings" />
                            </div>

                            {/* Expenses */}
                            <div className="mb-4">
                                <label htmlFor="expenses" className="block text-gray-700 text-sm font-bold mb-2">Expenses:</label>
                                <input type="text" id="expenses" name="expenses" value={formData.expenses} onChange={handleChange} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your monthly expenses" />
                            </div>

                            {/* Liabilities */}
                            <div className="mb-4">
                                <label htmlFor="lib" className="block text-gray-700 text-sm font-bold mb-2">Liabilities:</label>
                                <input type="text" id="lib" name="lib" value={formData.lib} onChange={handleChange} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your ammount of liabilities" />
                            </div>

                            {/* Assets */}
                            <div className="mb-4">
                                <label htmlFor="assets" className="block text-gray-700 text-sm font-bold mb-2">Assets:</label>
                                <input type="text" id="assets" name="assets" value={formData.assets} onChange={handleChange} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your ammount of assets" />
                            </div>

                            {/* Risk Factor */}

                            {/* <div className="mb-4">
                                <label htmlFor="risk_factor" className="block text-gray-700 text-sm font-bold mb-2">Risk Factor:</label>
                                <select id="risk_factor" name="risk_factor" value={formData.risk_factor} onChange={handleChange} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                </select>
                            </div> */}



                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button type="submit" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm">
                                Submit
                            </button>
                            <button onClick={onClose} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default InputModal;
