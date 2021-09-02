import React from 'react'

export default function Loading() {
   
 
   
    return (
        <>
            <img src={process.env.PUBLIC_URL + `assets/img/loading.gif`} style={{ width:"100px" , height:"100px" , textAlign : "center"}} alt="loading"></img>
        </>
    )
}
