import React, {useState} from 'react';
import PopData from './PopData';

function Popular (){
    
return(
        <section>
            <h1 className='font-bold  text-2xl'>Popular Recipes</h1>
            <hr className='mb-10 mt-2  text-black h-5'/>
            <div>
                <PopData/>
            </div>
        </section>
    )
}

export default Popular;