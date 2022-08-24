import React from 'react';
import {Link} from 'react-router-dom';


function PopData({newPopData}){
    
    return(
        <section className='overflow-x-hidden grid grid-cols-2 md:grid-cols-8 gap-10 justify-around items-center text-center'>
            {newPopData.map((pop, index)=>{return(
                <div className='flex flex-col justify-center items-center ' key={index} id={index}>
                    <div className='bg-gray-00 w-[150px] h-[150px]'>
                        <img className='w-[150px] h-[150px] mb-5 mix-blend-overlay' src={pop.image} alt='popImage'/>
                    </div>
                    <Link to='/chosen'><p className='mb-5'>{pop.title.slice(0, 20)}...</p></Link>
                </div>
            )})}
        </section>
    )
}

export default PopData;