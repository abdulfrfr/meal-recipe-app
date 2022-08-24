import React from 'react';

function Footer() {
    const date = new Date().getFullYear();

   

    return(
        <section className='bg-green-200 pt-5'>
        <div className='flex flex-col justify-between items-center'>
        <div className='mt-6 flex flex-col md:flex-row justify-center items-center '>
            <input className='border-none outline-none h-[30px] w-[300px] p-5' type="text" placeholder='Email' />
            <button className='hover:bg-green-400  bg-green-700 p-3 mt-5 md:mt-0 md:ml-6  '>Subscribe</button>
        </div>
            <div className='grid grid-cols-2 md:grid-cols-4'>
                <div className=' md:text-left mr-5 mx-2 my-5 md:my-5 md:mx-2 w-[150px]'>
                    <p className='mt-2'>Search by Nutrient</p>
                    <p className='mt-2'>Search by ID</p>
                    <p className='mt-2'>Max Nutrient</p>
                    <p className='mt-2'>Preparation</p>
                    <p className='mt-2'>APIs</p>
                </div>
                <div className=' md:text-left mr-5 mx-2 my-5 md:my-5 md:mx-2 w-[150px]'>
                    <p className='mt-2'>Home</p>
                    <p className='mt-2'>About</p>
                    <p className='mt-2'>Contact</p>
                    <p className='mt-2'>Blog</p>
                    <p className='mt-2'>Menus</p>
                </div>
                <div className=' md:text-left mr-5 mx-2 my-5 md:my-5 md:mx-2 w-[150px]'>
                    <p className='mt-2'>Search</p>
                    <p className='mt-2'>Recipes</p>
                    <p className='mt-2'>Max Nutrient</p>
                    <p className='mt-2'>Min Nutrient</p>
                    <p className='mt-2'>Docs</p>
                </div>
                <div className=' md:text-left mr-5 mx-2 my-5 md:my-5 md:mx-2 w-[150px]'>
                    <p className='mt-2'>APIs</p>
                    <p className='mt-2'>Education</p>
                    <p className='mt-2'>Careers</p>
                    <p className='mt-2'>Documentation</p>
                    <p className='mt-2'>Training</p>
                </div>
            </div>
            <div className='flex justify-center items-center mt-5 pb-2'>
            <div>
                <p className='text-gray-400'>CopyRight {date}. @abdulfrfr </p>
            </div>
            </div>
        </div>
        
        </section>
    )
}

export default Footer;