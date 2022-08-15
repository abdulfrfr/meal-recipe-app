import React from "react";
import HeroImg from './hero-img.jpeg'
import {AiOutlineSearch} from 'react-icons/ai'
import {Link} from 'react-router-dom'

function Home(){
    return(
        <section className="w-full">
            <div className="bg-slate-700 w-full h-[91vh] absolute ">
            <img className="mix-blend-overlay w-full h-[91vh] object-cover " src={HeroImg} alt="hero img"/>
            </div>
            <div className="relative w-full flex flex-col justify-center items-center h-[500px]">
                <div className="w-[90%] md:w-[60%]  flex flex-row justify-between items-center rounded-3xl bg-white px-7 py-3">
                    <input className="border-none outline-none text-xl" type='text' placeholder="Search Recipe"/>
                    <AiOutlineSearch className="text-xl font-bold"/>
                </div>
                <div className="relative text-white text-center px-5 md:px-20">
            <p className="md:text-4xl md:w-[50rem] mt-5 w-[20rem]">Get a pecific type of recipe you would love to work with using the above search bar</p>
            </div>
            <div className="mt-10">
                <Link to="/main"><button className="bg-green-400 px-10 py-3 rounded-3xl text-white hover:bg-green-600">Get Started</button></Link>
            </div>
            </div>
            
            
        </section>
    )
}

export default Home;