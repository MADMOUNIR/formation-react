import React, { useState , useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth);

    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
    }

    useEffect(() => {
        
        const changeWidth = () => {
            setLargeur(window.innerWidth);
        }
        window.addEventListener('resize' , changeWidth);
      
      
        return () => {
           window.removeEventListener('resize' , changeWidth);
        }
    }, [])

    return (
        <nav>
            {(toggleMenu || largeur >500) &&
                <ul className="liste">
                    <li className="items">Acceil </li>
                    <li className="items">Service </li>
                    <li className="items">Contact </li>
                    <li className="items">Credits </li>
                </ul>
            }

            <button className="btn" onClick={toggleNav}>BTN</button>
        </nav>
    )
}
