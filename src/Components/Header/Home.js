import React from "react";
import HeroImg from './hero-img.jpeg'
import {AiOutlineSearch} from 'react-icons/ai'

function Home(){
    return(
        <section className="w-full">
            <div className="bg-slate-700 w-full lg:h-[700px] absolute">
            <img className="mix-blend-overlay w-full sm:h-full md:h-[400px] lg:h-[700px] object-cover " src={HeroImg} alt="hero img"/>
            </div>
            <div className="relative w-full flex flex-row justify-center items-center md:pt-28 pt-20">
                <div className="w-[90%] md:w-[60%]  flex flex-row justify-between items-center bg-white px-7 py-3">
                    <input className="border-none outline-none text-xl" type='text' placeholder="Search Recipe"/>
                    <AiOutlineSearch className="text-xl font-bold"/>
                </div>
            </div>
            <div className="relative text-white text-center px-5 md:px-20">
            <p>Get a pecific type of recipe you would love to work with using the above search bar</p>

            </div>
            
        </section>
    )
}

export default Home;