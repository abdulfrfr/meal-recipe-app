import React from "react";
import Home from './Home'



function Hero({getPop}){
    return(
        <section>
            <Home getPop={getPop}/>
        </section>
    )
}

export default Hero;