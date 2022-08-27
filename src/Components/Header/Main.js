import React from 'react';
import Steps from './Steps';
import Heros from './Heros'
import Popular from './Popular'

function Main({popData}){

    // function event (event){
    //      console.log(event);
    // }

    
    return (
    <div>
        <Heros/>
        <Steps/>
        <Popular popData={popData}/>
    </div>
    )
}

export default Main