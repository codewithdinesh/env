import React from 'react'

import Link from 'next/link'

const GameCard = ({ name, img }) => {
    return (
        <div className=' p-2 rounded-lg m-1 text-white '>


            <Link href='/game/page2'>
                <div className='flex flex-col items-center justify-center'>
                    <p className='text-lg font-semibold'>{name}</p>
                    <img src={img} alt={name} className='w-24 h-24 rounded-full border-r-2' />

                </div>
            </Link>


        </div>
    )
}

export default GameCard