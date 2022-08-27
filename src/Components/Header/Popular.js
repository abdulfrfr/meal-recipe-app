import React from 'react';
import PopData from './PopData';
import PopHead from "./PopHead";
import Footer from '../Footer/Footer';

function Popular ({popData}){
    
return(
        <section>
            <PopHead/>
            <PopData popData={popData}/>
            

            <Footer/>
        </section>
    )
}

export default Popular;