import React, { Component } from 'react'
import Button from '../../../Components/Button/Button'

export default class FormulaireModification extends Component {
    
    state = {
        titreSaisi : "" ,
        auteurSaisi : "" ,
        nbPageSaisi : ""
    }
//---fonction lancé après le chargement de la page
    componentDidMount =() => {
        this.setState({
            titreSaisi : this.props.titre ,
            auteurSaisi : this.props.auteur ,
            nbPageSaisi : this.props.nbPages
        })
    }
    
    handleModification = () => {
       
        this.props.validationModification(this.props.id , this.state.titreSaisi , this.state.auteurSaisi , this.state.nbPageSaisi);
    }
    
    render() {
        return (
            <>
                  <td > <input type="texte" className="form-control" value={this.state.titreSaisi}   onChange={(event) => {this.setState({titreSaisi : event.target.value}) }} /> </td>
                  <td>  <input type="texte" className="form-control" value={this.state.auteurSaisi}  onChange={(event) => {this.setState({auteurSaisi : event.target.value}) }}  /></td>
                  <td>  <input type="texte" className="form-control" value={this.state.nbPageSaisi}  onChange={(event) => {this.setState({nbPageSaisi : event.target.value}) }}  /></td>
                  <td>
                    <Button
                      texte="Valider"
                      color="btn-success"
                      taille="btn-sm"
                      clic={this.handleModification}
                    />
                    </td>
                    <td>
                      <Button
                      texte="Annuler"
                      color="btn-primary"
                      taille="btn-sm"
                      clic={this.props.annulerModification}
                    />
                  </td>
            </>
        )
    }
}
