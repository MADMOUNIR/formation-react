import React from 'react'
import { useLocation } from 'react-router'

export default function Contact() {
    
    const location = useLocation();
    console.log(location);

    
    return (
        <div>
            <h1>Bienvenu Contact</h1>
            <p>{location.state.txt}</p>
        </div>
    )
}
