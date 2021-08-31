import React from 'react'

export default function Button(props) {
   
    let cssClass = `btn  ${props.color}  ${props.taille}` ;
    
  //---les bouton modif et suppression
    return (
        <>
         <button type="button"  className={cssClass} onClick={props.clic} >{props.texte}</button>
        </>
    )
}
