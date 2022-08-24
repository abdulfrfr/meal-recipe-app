import React from 'react';
import Steps from './Steps';
import Heros from './Heros'
import Popular from './Popular'

function Main({newPopData}){

    // function event (event){
    //      console.log(event);
    // }

    
    return (
    <div>
        <Heros/>
        <Steps/>
        <Popular newPopData={newPopData}/>
    </div>
    )
}

export default Main