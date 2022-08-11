import React from "react";
import HeroImg from './hero-img.jpeg'
import {AiOutlineSearch} from 'react-icons/ai'

function Home(){
    return(
        <section>
            <div className="bg-slate-600 w-full md:h-[500px] lg:h-[full] overflow-hidden absolute">
            <img className="mix-blend-overlay w-full " src={HeroImg} alt="hero img"/>
            </div>
            <div className="relative flex justify-center items-center w-full pt-10 md:pt-[80px]">
            <div className="flex justify-start items-center bg-white w-[300px] md:w-[600px] md:h-[100px] py-5 px-5">
                <AiOutlineSearch className="md:font-bold md:text-4xl text-xl mr-3"/>
                <input className="outline-none border-none md:text-2xl text-xl" type='text' placeholder="Serach Recipe"/>
            </div>
                
            </div>
            <div className="relative text-center text-white pt-5 md:pt-10">
                <h1 className="font-bold text-2xl md:text-6xl">GET THE MOST OUT OF US</h1>
                <h5 className="text-xl md:text-4xl">EAT GOOD</h5>
            </div>
        </section>
    )
}

export default Home;