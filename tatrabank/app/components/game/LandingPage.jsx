import React from 'react'
import GameCard from './cards/GameCard';


const LandingPage = () => {

    const gameItems = [
        {
            name: "Stocks",
            img: "/images/invest.png",

        },
        {
            name: "Mutual Funds",
            img: "/images/mutual_img.jpg"
        },

        {
            name: "Property",
            img: "/images/property.jpg"

        }

        // {

        //     name: "Bonds",
        //     img: "https://cdn.pixabay.com/photo/2016/11/19/14/00/stock-1834791_960_720.jpg"
        // },

        // {
        //     name: "Crypto",
        //     img: "https://cdn.pixabay.com/photo/2018/03/01/09/33/bitcoin-3198326_960_720.jpg"
        // },
        // {
        //     name: "Forex",
        //     img: "https://cdn.pixabay.com/photo/2017/08/01/08/29/people-2563491_960_720.jpg"
        // }
    ];

    return (
        <div className='flex p-2 rounded-md m-3  justify-center place-items-center h-4/5 '>

            {gameItems.map((item, index) => (

                <GameCard key={index} name={item.name} img={item.img} />

            ))}

        </div>
    )
}

export default LandingPage