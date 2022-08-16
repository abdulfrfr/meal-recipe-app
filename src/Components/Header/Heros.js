import React, {useEffect, useState} from 'react';
import images from './images'

function Heros(){
    
    const [imgUrl, setImgUrl] = useState(images);
    const [imgIndex, setImgIndex] = useState(0);

    const imgLength = imgUrl.length;

    function increaseIndex(){
        setImgIndex(imgIndex === imgLength -1 ? 0 : imgIndex + 1)
    }

    // useEffect(()=> {setImgIndex(0);
    //      clearInterval()}, [])

    // setInterval(() => {
    //     increaseIndex();
    // }, 5000);

 
    

    return(
        <section className=''>
            <div className='w-full overflow-hidden h-[40vh] opacity md:h-[70vh]'>
                {imgUrl.map((img, index)=> {return (
                <div className={index === imgIndex ? 'w-full transform opacity-0 opacity-[1] -translate-x-[20%] -translate-x-[0] transition-all duration-300' : 'transform opacity-0 -translate-x-[20%]'}>
                       {index === imgIndex && 
                       <img 
                       onClick={increaseIndex} 
                       key={img.key} 
                       className='w-full'  
                       src={img.url} 
                       alt="img"/>
                       } 
                    </div>
                )} )}
            </div>
                
            

           
        </section>
    );
}

export default Heros;