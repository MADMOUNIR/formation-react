import React from 'react'
import './Title.css'

export default function Title(props) {
    return (
        <>
            <h1 className="border border-dark p-2 m-2 bg-primary rounded text-center text-white police-titre">{props.children}</h1>
        </>
    )
}
