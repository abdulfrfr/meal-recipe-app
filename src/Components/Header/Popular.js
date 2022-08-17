import React, {useState} from 'react';
import PopData from './PopData';
import PopHead from "./PopHead";
import Footer from '../Footer/Footer';

function Popular (){
    
return(
        <section>
            <PopHead/>
            <PopData/>
            

            <Footer/>
        </section>
    )
}

export default Popular;