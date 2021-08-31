import React, { Component, useState } from "react";
import Livre from "./Livre/Livre";
import FormulaireAjout from "./FormulaireAjout/FormulaireAjout";
import FormulaireModification from './FormulaireModification/FormulaireModification'
import Alerte from '../../Components/Alerte/Alerte'

export default class Livres extends Component {
  state = {
    livres: [
      {
        id: 1,
        titre: "Algorithme H2MPL",
        auteur: "Mathieu Gaston",
        nbPages: 65,
      },
      {
        id: 2,
        titre: "Histoire de la France",
        auteur: "Franck Gérard",
        nbPages: 500,
      },
      {
        id: 3,
        titre: "Le Mode de l'aliment",
        auteur: "Hinrique Htya",
        nbPages: 654,
      },
      {
        id: 4,
        titre: "l'asie du 19eme siecle",
        auteur: "Mathieu Gaston",
        nbPages: 654,
      },
    ],
    lastIdLivre: 4,
    idLivreAModifier: 0,    
    alerteMessage : null
  };

  //----function de suppression d'un livre
  deleteLivre = (id) => {
    console.log("suppression : " + id);
    const newLivres = this.state.livres.filter((item) => item.id !== id);
    //console.log(newLivres);
    this.setState({ livres: newLivres ,
                alerteMessage : {message : "Livre supprimé !" , 
                                    typeAlerte : "alert-danger"}
                                });
  };

  // ---Function d'ajout de livre
  handleAjoutLivre = (pTitre, pAuteur, pNbPages) => {
    const newLivresAdd = [...this.state.livres];
    newLivresAdd.push({
      id: this.state.lastIdLivre + 1,
      titre: pTitre,
      auteur: pAuteur,
      nbPages: +pNbPages,
    });

    
    this.setState((oldState) => {
      return {
        livres: newLivresAdd,
        lastIdLivre: oldState.lastIdLivre + 1,
        alerteMessage : {message : "Livre ajouté !" , 
        typeAlerte : "alert-success"}
      };
    });

    //this.props.fermerAjoutLivre();
    this.handleFermerAjout();
  };

  //---fermer ajout livre
  handleFermerAjout = () => {
    this.props.fermerAjoutLivre();
  };

  //---effectuer la modification
  handleModificationLivre = (id , titre , auteur , nbPages) => {
   

    const caseLivre = this.state.livres.findIndex(l => {
        return l.id === id
    }) ;
    

    const newLivre = {id , titre , auteur ,nbPages} ;

   

    const newList = [...this.state.livres] ;
    newList[caseLivre] = newLivre ;
    this.setState({
        livres : newList ,
        idLivreAModifier : 0 ,
        alerteMessage : {message : "Livre modifié !" , 
        typeAlerte : "alert-warning"}
    })

  }

  render() {
    return (
      <>
       
       {this.state.alerteMessage && <Alerte typeAlerte={this.state.alerteMessage.typeAlerte}>{this.state.alerteMessage.message}</Alerte>}
        <table className="table text-center my-5">
          <thead>
            <tr className="bg-dark text-white">
              <th scope="col">Titre</th>
              <th scope="col">Auteur</th>
              <th scope="col">Nombre Pages</th>
              <th colSpan="2" scope="col">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.livres.map((livre) => {
              if (livre.id !== this.state.idLivreAModifier) {
                return (
                  <tr key={livre.id}>
                    <Livre
                      titre={livre.titre}
                      auteur={livre.auteur}
                      nbPages={livre.nbPages}
                      suppFunc={() => this.deleteLivre(livre.id)}
                      modification={() =>
                        this.setState({ idLivreAModifier: livre.id })
                      }
                    />
                  </tr>
                );
              } else {
                return (  
            <tr key={livre.id}>  
                <FormulaireModification 
                id ={livre.id}
                titre={livre.titre}
                auteur={livre.auteur}
                nbPages={livre.nbPages}
                validationModification = {this.handleModificationLivre}    
                />
            </tr>
                ) ;
               ;
              }
            })}
          </tbody>
        </table>

        {this.props.ajoutLivre && (
          <FormulaireAjout
            validation={this.handleAjoutLivre}
            fermerAjout={this.handleFermerAjout}
          />
        )}
      </>
    );
  }
}
