import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import {
    AiFillTwitterCircle, 
    AiFillGithub, 
    AiFillLinkedin,
    AiFillHeart,
} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'

function Nav(){
    const [nav, setNav] = useState(false);

    useEffect(()=> setNav(false), [])

    function setTrue() {
        setNav(!nav)
    }
    return(
    <section>
    <section  className='bg-white w-full px-5 md:px-20 py-3 flex justify-between items-center'>
    <div className='md:hidden'>
            <GiHamburgerMenu onClick={setTrue} className='font-bold text-3xl cursor-pointer'/>
        </div>

        <div className='md:flex hidden justify-between items-center '>
            <AiFillHeart className='text-orange-500 text-xl mr-2'/>
            <span className='font-bold'><button>Login</button>/<button>SignUp</button></span>
        </div>
        <div>
            <h1 className='font-bold text-2xl'>@abdulfrfr</h1>
        </div>

        <div className='md:flex justify-center items-center hidden'>
            <span className='mr-1'>Follow:-</span>
            <AiFillTwitterCircle className='cursor-pointer mr-5 text-2xl hover:text-orange-700  text-orange-500'/>
            <AiFillGithub className='cursor-pointer mr-5 text-2xl hover:text-orange-700  text-orange-500'/>
            <AiFillLinkedin className='cursor-pointer mr-5 text-2xl hover:text-orange-700  text-orange-500'/>
        </div>
    </section>
    <section className={nav ? 'flex justify-center items-center text-center py-5 mt-0 transform transition-all -translate-y-0 opacity-[1] duration-700 delay-200' : 'text-center transform -translate-y-7 duration-700 delay-200  mt-[-220px] opacity-0'}>
        <div>
        <p className='mb-2'>Home</p>
        <p className='mb-2'>Get Started</p>
        <p className='mb-2'>Login</p>
        <p className='mb-2'>SignUp</p>
        <p className='mb-2'>Twitter</p>
        <p className='mb-2'>LinkedIn</p>
        <p className='mb-2'>GitHub</p>
        </div>
    </section>    

        
    </section>
    )
}

export default Nav;