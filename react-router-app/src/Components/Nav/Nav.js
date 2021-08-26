import React from 'react'
import './Nav.css'
import { NavLink , Link } from 'react-router-dom'

export default function Nav() {
    return (
        <ul className="nav-list">
            <NavLink exact activeClassName="current" to="/">
                <li>Accueil</li>
            </NavLink>

            <NavLink exact  activeClassName="current" to="/projet">
                <li>Projet</li>
            </NavLink>

            <NavLink exact activeClassName="current" to="/contact">
                <li>Contact</li>
            </NavLink>

        </ul>
    )
}
