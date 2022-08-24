import React from "react";
import Home from './Home'



function Hero({setSearch}){
    return(
        <section>
            <Home setSearch={setSearch}/>
        </section>
    )
}

export default Hero;