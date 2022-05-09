import React, { useState } from 'react';

function Cityfun({fampla}) {
    // const[City,setCity]=useState('Gandhinagar')

    // const [gdp,setGdp]=useState(1)

    // const ChangeCity=()=>{
    //     setCity('Baroda')
    // }
    return (
        <div>
            {/* <p>City[Function based Component] : {City}</p>
            <button onClick={()=>ChangeCity()}>Change</button>

            <p>GDP:{gdp}</p>
            <button onClick={()=>setGdp(20)}>Change</button> */}

            {
                fampla === 'India' ?<p>Famous City:Taj Mahel</p>:<p>Famous City:London Brije</p>
            }
        </div>
    );
}

export default Cityfun;