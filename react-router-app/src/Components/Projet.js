import React from 'react'
import { useHistory , useParams } from 'react-router'


export default function Projet() {
    const hist = useHistory();
    const {slug} = useParams();
    console.log(slug);

    return (
        <div>
            <h1>Section Projets</h1>
            {(slug !== 'undefined' ) ? <p>Projet N° {slug}</p> : ''} 
            <button onClick={() => { hist.push('/')} }> Go to Home</button>
        </div>
    )
}
