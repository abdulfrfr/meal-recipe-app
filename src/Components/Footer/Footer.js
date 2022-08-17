import React from 'react';

function Footer() {
    const date = new Date().getFullYear();

    return(
        <section className='bg-green-200'>
            <div className='grid grid-cols-2 md:grid-cols-4 px-10 md:px-20'>
                <div className='text-center md:text-left mr-5 mx-2 my-5 md:my-5 md:mx-2 w-[150px]'>
                    <p className='mt-2'>Search by Nutrient</p>
                    <p className='mt-2'>Search by ID</p>
                    <p className='mt-2'>Max Nutrient</p>
                    <p className='mt-2'>Preparation</p>
                    <p className='mt-2'>APIs</p>
                </div>
                <div className='text-center md:text-left mr-5 mx-2 my-5 md:my-5 md:mx-2 w-[150px]'>
                    <p className='mt-2'>Search by Nutrient</p>
                    <p className='mt-2'>Search by ID</p>
                    <p className='mt-2'>Max Nutrient</p>
                    <p className='mt-2'>Preparation</p>
                    <p className='mt-2'>APIs</p>
                </div>
                <div className='text-center md:text-left mr-5 mx-2 my-5 md:my-5 md:mx-2 w-[150px]'>
                    <p className='mt-2'>Search by Nutrient</p>
                    <p className='mt-2'>Search by ID</p>
                    <p className='mt-2'>Max Nutrient</p>
                    <p className='mt-2'>Preparation</p>
                    <p className='mt-2'>APIs</p>
                </div>
                <div className='text-center md:text-left mr-5 mx-2 my-5 md:my-5 md:mx-2 w-[150px]'>
                    <p className='mt-2'>Search by Nutrient</p>
                    <p className='mt-2'>Search by ID</p>
                    <p className='mt-2'>Max Nutrient</p>
                    <p className='mt-2'>Preparation</p>
                    <p className='mt-2'>APIs</p>
                </div>
            </div>
            <div className='flex justify-center items-center mt-5 pb-2'>
            <div>
                <p>CopyRight {date}. @abdulfrfr </p>
            </div>
            </div>
        </section>
    )
}

export default Footer;