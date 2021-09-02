import React, { Component, useState } from "react";
import Livre from "./Livre/Livre";
import FormulaireAjout from "./FormulaireAjout/FormulaireAjout";
import FormulaireModification from "./FormulaireModification/FormulaireModification";
import Alerte from "../../Components/Alerte/Alerte";
import axios from "axios";
import Loading from "../../Components/Loading/Loading";
import { v4 as uuidv4 } from 'uuid';

export default class Livres extends Component {
  state = {
    livres: null,
    lastIdLivre: 4,
    idLivreAModifier: 0,
    alerteMessage: null,
    loading: false,
  };
 //-------------------------------------------------------------------------//
  //----function de suppression d'un livre (without DB)
   //-------------------------------------------------------------------------//
  deleteLivre = (id) => {
    console.log("suppression : " + id);
    const newLivres = this.state.livres.filter((item) => item.id !== id);
    //console.log(newLivres);
    this.setState({
      livres: newLivres,
      alerteMessage: {
        message: "Livre supprimé !",
        typeAlerte: "alert-danger",
      },
    });
  };
   //-------------------------------------------------------------------------//
  ///--------------Suppression d'un livre from server
   //-------------------------------------------------------------------------//
  deleteLivreFromServer = (id) => {
    //get the id from server
    const objToDelete = this.state.livres.filter(item => item.id === id)
 
    console.log(objToDelete[0].key);

    axios.delete(`https://livres-react-default-rtdb.europe-west1.firebasedatabase.app/biblio/livres/${objToDelete[0].key}.json`)
    .then(response => {
        this.loadLivresFromServer();
        this.setState({
            alerteMessage: {
              message: "Livre supprimé !",
              typeAlerte: "alert-danger",
            },
          });
    })
    .catch(error => {
        console.log(error);
    })

  }
 //-------------------------------------------------------------------------//
  // ---Function d'ajout de livre------------------------------------------//
   //-------------------------------------------------------------------------//
  handleAjoutLivre = (pTitre, pAuteur, pNbPages) => {
    const newLivresAdd = [...this.state.livres];
    newLivresAdd.push({
      id: uuidv4(),
      titre: pTitre,
      auteur: pAuteur,
      nbPages: +pNbPages,
    });

    this.setState((oldState) => {
      return {
        livres: newLivresAdd,
        lastIdLivre: oldState.lastIdLivre + 1,
        alerteMessage: {
          message: "Livre ajouté !",
          typeAlerte: "alert-success",
        },
      };
    });

    //this.props.fermerAjoutLivre();
    this.handleFermerAjout();
  };

  //Ajouter un livre dans le server
  AddLivreToServer = (pTitre, pAuteur, pNbPages) => {
    const newLivre = {
      id: uuidv4(),
      titre: pTitre,
      auteur: pAuteur,
      nbPages: +pNbPages,
    };
   

    axios.post("https://livres-react-default-rtdb.europe-west1.firebasedatabase.app/biblio/livres.json", newLivre )
      .then((response) => {        
        //incrémenter last Id       
        this.loadLivresFromServer();
        this.setState((oldState) => {
            return {         
            alerteMessage: {
                message: "Livre ajouté !",
                typeAlerte: "alert-success",
            },
            };
        });
        this.handleFermerAjout();

      })
      .catch((error) => {
        console.log(error);
      });

    
  };



  //---fermer ajout livre
  handleFermerAjout = () => {
    this.props.fermerAjoutLivre();
  };
  //-------------------------------------------------------------------------//
  //------------effectuer la modification------------------------------------//
  //-------------------------------------------------------------------------//
  handleModificationLivre = (id, titre, auteur, nbPages) => {
    const caseLivre = this.state.livres.findIndex((l) => {
      return l.id === id;
    });

    const newLivre = { id, titre, auteur, nbPages };

    const newList = [...this.state.livres];
    newList[caseLivre] = newLivre;
    this.setState({
      livres: newList,
      idLivreAModifier: 0,
      alerteMessage: {
        message: "Livre modifié !",
        typeAlerte: "alert-warning",
      },
    });
  };
  sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

   //-------------------------------------------------------------------------//
  //------------effectuer la modification dans le server----------------------//
  //-------------------------------------------------------------------------//

  updateLivreFromServer = (id, titre, auteur, nbPages) => {
   
    this.setState({ loading: true });
    const objToUpdate = this.state.livres.filter(item => item.id === id);
    const newLivre = { id : id, titre : titre  , auteur : auteur , nbPages : nbPages , key : objToUpdate[0].key };
    console.log(newLivre);
 
   // console.log(objToUpdate[0].key);

    axios.put(`https://livres-react-default-rtdb.europe-west1.firebasedatabase.app/biblio/livres/${objToUpdate[0].key}.json` ,newLivre )
    .then(response => {
        this.loadLivresFromServer();
        this.setState({
            alerteMessage: {
                message: "Livre modifié !",
                typeAlerte: "alert-warning",
              },
              loading : false ,
              idLivreAModifier: 0
          });
    })
    .catch(error => {
        console.log(error);
        this.setState({
            alerteMessage: {
                message: "Erreur detecté  !"+ error,
                typeAlerte: "alert-danger",
              },
            loading: false,
            idLivreAModifier: 0
          });
    })

   
   
   //---------
   
  }



 //-------------------------------------------------------------------------//
  //---Chargement des données depuis firebase--------------------------------
  //-------------------------------------------------------------------------//
  loadLivresFromServer = () => {
    
    this.setState({ loading: true });
    axios
      .get(
        "https://livres-react-default-rtdb.europe-west1.firebasedatabase.app/biblio.json"
      )
      .then((response) => {
        
        const fetchedData = [];
        for (let key in response.data.livres) {
            fetchedData.push({
                ...response.data.livres[key],
                key: key
            });
        }
        console.log(fetchedData);
        this.setState({
          livres: fetchedData,          
          loading: false,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          loading: false,
        });
      });
  };

  componentDidMount = () => {
    this.setState({ loading: true });
    //---simulation du chargement
    const interval = setInterval(() => {
      this.loadLivresFromServer();
      clearInterval(interval);
    }, 1000);
  };

  render() {
      
      //-------------------------------------------------------------------------//
      //---------------------RENDER----------------------------------------------------//
      //-------------------------------------------------------------------------//
  
  
    return (
      <>
        {this.state.alerteMessage && (
          <Alerte typeAlerte={this.state.alerteMessage.typeAlerte} show="true">
            {this.state.alerteMessage.message}
          </Alerte>
        )}
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
            {this.state.loading && (
              <tr>
                <td colSpan="5">
                  <Loading />
                </td>
              </tr>
            )}
            {this.state.livres &&
              !this.state.loading &&
              this.state.livres.map((livre) => {
                if (livre.id !== this.state.idLivreAModifier) {
                  return (
                    <tr key={livre.id}>
                      <Livre
                        titre={livre.titre}
                        auteur={livre.auteur}
                        nbPages={livre.nbPages}
                        suppFunc={() => this.deleteLivreFromServer(livre.id)}
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
                        id={livre.id}
                        titre={livre.titre}
                        auteur={livre.auteur}
                        nbPages={livre.nbPages}
                        validationModification={this.updateLivreFromServer}
                      />
                    </tr>
                  );
                }
              })}
          </tbody>
        </table>

        {this.props.ajoutLivre && (
          <FormulaireAjout
            validation={this.AddLivreToServer}
            fermerAjout={this.handleFermerAjout}
          />
        )}
      </>
    );
  }
}
