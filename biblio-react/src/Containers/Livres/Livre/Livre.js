import React from 'react'
import Button from "../../../Components/Button/Button";


export default function Livre(props) {
    return (
        <>
                 <th scope="row">{props.titre}</th>
                  <td>{props.auteur}</td>
                  <td>{props.nbPages}</td>
                  <td>
                    <Button
                      texte="Modifier"
                      color="btn-warning"
                      taille="btn-sm"
                      clic={props.modification}
                    />
                  </td>
                  <td>
                    <Button
                      texte="Supprimer"
                      color="btn-danger"
                      taille="btn-sm"                     
                      clic={props.suppFunc}
                    />                      
                   
                  </td>
            
        </>
    )
}
