import React from 'react'

const InfoCard = ({ title, desc }) => {
    return (

        <div className='block  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 m-1 cursor-pointer h-full'>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">{desc}</p>

        </div>
    )
}

export default InfoCard