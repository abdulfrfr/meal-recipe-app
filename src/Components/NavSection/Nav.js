import React from 'react';
import {Link} from 'react-router-dom'
import {
    AiFillTwitterCircle, 
    AiFillGithub, 
    AiFillLinkedin,
    AiFillHeart,
} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'

function Nav(){
    return(
    <section className='bg-white w-full px-5 md:px-20 py-3 flex justify-between items-center'>
        <div className='md:hidden'>
            <GiHamburgerMenu className='font-bold text-3xl cursor-pointer'/>
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
            <AiFillTwitterCircle className='mr-5 text-2xl hover:text-orange-700  text-orange-500'/>
            <AiFillGithub className='mr-5 text-2xl hover:text-orange-700  text-orange-500'/>
            <AiFillLinkedin className='mr-5 text-2xl hover:text-orange-700  text-orange-500'/>
        </div>
        
    </section>
    )
}

export default Nav;