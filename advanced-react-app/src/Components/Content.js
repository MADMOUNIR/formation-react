import React from 'react'
//----UseMeo marche avec tous les props sauf les children
  function Content(props) {
    console.log("mise à jour !");
    return (
        <div className="content">
            
           <p>Tableau de parametre : {props.num} </p> 
        </div>
    )
}

export default React.memo(Content);
