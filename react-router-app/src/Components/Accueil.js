import React from 'react'
import { Link } from 'react-router-dom'

export default function Accueil() {
    return (
        <div>
            <h1>Bienvenu Acceuil</h1>

            <Link to={{
                pathname: '/contact',
                state: { txt: "voila des données !" }
            }}>
                Aller à la page contact !
            </Link>
        </div>
    )
}
