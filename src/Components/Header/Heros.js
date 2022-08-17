import React, {useEffect, useState} from 'react';
import images from './images'

function Heros(){
    
    const imgUrl = images;
    const [imgIndex, setImgIndex] = useState(0);

    const imgLength = imgUrl.length;

    function increaseIndex(){
        setImgIndex(imgIndex === imgLength -1 ? 0 : imgIndex + 1)
    }

    useEffect(()=> {
        setImgIndex(0);
        }, []);

        const isTrue = true;
        let callInterval;
        const timing = 4000;

        function auto(){
            callInterval = setInterval(increaseIndex, timing)
        }

        useEffect(()=>{
            if(isTrue){
                auto()
        }
        return ()=> clearInterval(callInterval);
        }, [ imgIndex ])



 
    

    return(
        <section className=''>
            <div className='w-full overflow-hidden h-[40vh] opacity md:h-[70vh]'>
                {imgUrl.map((img, index)=> {return (
                <div className={index === imgIndex ? 'w-full transform opacity-0 opacity-[1] -translate-x-[20%] -translate-x-[0] transition-all duration-700' : 'transform opacity-0 -translate-x-[20%]'}>
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