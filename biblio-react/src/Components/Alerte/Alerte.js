import React, { useEffect, useState } from 'react'

export default function Alerte(props) {
    const classCss = `alert ${props.typeAlerte}`
    


   
    
    return (
        <>
        
            <div className={classCss} role="alert">
             {props.children}
             </div>
            
        </>
    )
}
