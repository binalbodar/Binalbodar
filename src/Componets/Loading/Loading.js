import React from 'react';

function Loading(Componet) {
    return function WithLodingAnyComponent({isLoading, data}){
        console.log(isLoading, data);
        if(isLoading){
            return(
                <h3>Loading...</h3>
            )
        }
        else{
            return(
                <Componet data={data}/>
            )
        }
    }
}

export default Loading;