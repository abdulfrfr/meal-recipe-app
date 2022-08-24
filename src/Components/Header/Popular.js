import React from 'react';
import PopData from './PopData';
import PopHead from "./PopHead";
import Footer from '../Footer/Footer';

function Popular ({newPopData}){
    
return(
        <section>
            <PopHead/>
            <PopData newPopData={newPopData}/>
            

            <Footer/>
        </section>
    )
}

export default Popular;