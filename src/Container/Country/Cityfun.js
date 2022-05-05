import React, { useState } from 'react';

function Cityfun(props) {
    const[City,setCity]=useState('Gandhinagar')

    const [gdp,setGdp]=useState(1)

    const ChangeCity=()=>{
        setCity('Baroda')
    }
    return (
        <div>
            <p>City[Function based Component] : {City}</p>
            <button onClick={()=>ChangeCity()}>Change</button>

            <p>GDP:{gdp}</p>
            <button onClick={()=>setGdp(20)}>Change</button>
        </div>
    );
}

export default Cityfun;