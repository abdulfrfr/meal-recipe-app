import React, {useEffect, useState} from 'react';
import axios from 'axios'

function PopData(){

    const [popData, setPopData] = useState([]);

    useEffect(
    ()=>{
      axios.get('https://api.spoonacular.com/recipes/findByNutrients?minCarbs=100&apiKey=ddc6712f398a4c4299854fe8b47cb04c', {
          Headers:{
              'Content-Type': 'application/json'   
          }
      })
      .then((res)=> setPopData(res.data))
      .then((err)=> console.log(err))
      console.log('working');
      console.log(popData);
    }, [])

    
    return(
        <section className='flex flex-col md:flex-row'>
            {popData.map((pop, index)=>{return(
                <div key={index} id={index}>
                    <img src={pop.image} alt='popImage'/>
                    <p>{pop.title}</p>
                </div>
            )})}
        </section>
    )
}

export default PopData;