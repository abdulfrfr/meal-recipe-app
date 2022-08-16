import React, {useEffect, useState} from 'react';
import {FaListAlt} from 'react-icons/fa'
import {ImPriceTags} from 'react-icons/im'
import {GiCampCookingPot, GiMeal} from 'react-icons/gi'
import images from './images'

function Step(){
    
    const [imgUrl, setImgUrl] = useState(images);
    const [imgIndex, setImgIndex] = useState(0);

    const imgLength = imgUrl.length;

    function increaseIndex(){
        setImgIndex(imgIndex === imgLength -1 ? 0 : imgIndex + 1)
    }

 
    

    return(
        <section className=''>
            <div className='w-full overflow-hidden h-[40vh] md:h-[70vh]'>
                {imgUrl.map((img, index)=> {return (
                    <div>
                       {index === imgIndex && 
                       <img 
                       onClick={increaseIndex} 
                       key={img.key} 
                       className={index === imgIndex ? 'w-full transform translate-0 transition-all delay-200 duration-200' : 'w-full -translate-6'}  
                       src={img.url} 
                       alt="img"/>
                       } 
                    </div>
                )} )}
            </div>
                
            

            <div className='mt-10'>
            <div className='text-center'>
                <h1 className='font-bold text-5xl pb-3'>STEP-BY-STEP</h1>
                <p className='text-xl'>we will offer you guidiance to preparation to various meals!</p>
            </div>
                
            <div className='md:flex md:justify-center items-center mt-14 '>
                <div className='flex flex-col justify-between mb-10 md:mb-0 items-center'>
                    <div className='text-center bg-slate-900 text-white flex  justify-center items-center h-48 w-48 text-8xl '><FaListAlt/></div>
                    <p className='text-center text-bold text-2xl'>Ingredients</p>
                </div>
                <div className='flex flex-col justify-between mb-10 md:mb-0 items-center'>
                    <div className='text-center bg-slate-900 text-white flex  justify-center items-center h-48 w-48 text-8xl'><ImPriceTags/></div>
                    <p className='text-center text-bold text-2xl'>Prices</p>
                </div>
                <div className='flex flex-col justify-between items-center mb-10 md:mb-0'>
                    <div className='text-center bg-slate-900 text-white flex  justify-center items-center h-48 w-48 text-8xl'><GiCampCookingPot/></div>
                    <p className='text-center text-bold text-2xl'>Preparation</p>
                </div>
                <div className='flex flex-col justify-between mb-10 md:mb-0 items-center'>
                    <div className='text-center bg-slate-900 text-white flex  justify-center items-center h-48 w-48 text-8xl'><GiMeal/></div>
                    <p className='text-center text-bold text-2xl'>Food is Ready</p>
                </div>
                <div>
                    <div></div>
                    <p></p>
                </div>
                
            </div>
            </div>
        </section>
    );
}

export default Step;