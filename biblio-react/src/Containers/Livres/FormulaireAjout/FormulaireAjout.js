import React, { Component } from 'react'
import Button from '../../../Components/Button/Button'
import './FormulaireAjout.css'
import {withFormik} from 'formik'
import * as Yup from 'yup'

  class FormulaireAjout extends Component {
    
    // state = {
    //     titreSaisi : "" ,
    //     auteurSaisi : "" ,
    //     nbPageSaisi : ""
    // }
    // //-----envoyer les information aux composant Livres
    // handleValidationEvent = (event) => {
    //     event.preventDefault();
    //     this.props.validation(this.state.titreSaisi , this.state.auteurSaisi , this.state.nbPageSaisi) ;
    //     this.setState({
    //         titreSaisi : "" ,
    //         auteurSaisi : "" ,
    //         nbPageSaisi : ""
    //     });
    // }
    
    render() {
        return (
            <>
            <h2 className=" text-center text-primary text-h2">Formulaire d'ajout</h2>

            <form>
                <div className="mb-3">
                    <label htmlFor="titre" className="form-label">Titre du livre</label>
                    <input type="text" className="form-control" id="titre" 
                    name='titre'
                    onChange={this.props.handleChange }
                    value={this.props.values.titre}   
                    onBlur={this.props.handleBlur} 
                    />
                    {this.props.touched.titre && this.props.errors.titre  
                    && <span style={{color:'red'}}>{this.props.errors.titre}</span>}
                   
                </div>
                <div className="mb-3">
                    <label htmlFor="auteur" className="form-label">Auteur</label>
                    <input type="text" className="form-control" id="auteur"
                    name='auteur'
                    onChange={this.props.handleChange }
                    value={this.props.values.auteur}    
                    onBlur={this.props.handleBlur} 
                     />
                       {this.props.touched.auteur && this.props.errors.auteur 
                       && <span style={{color:'red'}}>{this.props.errors.auteur}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="nbPages" className="form-label">Nombre de pages</label>
                    <input type="number" className="form-control" id="nbPages" required
                    name ='nbPages'
                    onChange={(event) => {this.props.setFieldValue('nbPages' , +event.target.value)} }
                    value={this.props.values.nbPages}  
                    onBlur={this.props.handleBlur}   
                     />
                         {this.props.touched.nbPages && this.props.errors.nbPages 
                       && <span style={{color:'red'}}>{this.props.errors.nbPages}</span>}
                </div>
               
                <Button texte="Valider" color="btn-primary mx-2 "  taille="" clic={this.props.handleSubmit} > </Button>

                <Button texte="Annuler" color="btn-danger mx-2 "  taille="" clic={this.props.fermerAjout} > </Button>
            
            </form>
            <br/>
            </>
        )
    }
}

export default  withFormik({
    mapPropsToValues : () => ({
        titre : '' ,
        auteur : '' ,
        nbPages : ''
    }) ,
    //----Validation avec YUP
    validationSchema : Yup.object().shape({
        titre : Yup.string()
        .min(3 , 'Le titre doit contenir au moins 3 caractères !')
        .max(20 , "Le titre doit contenir moins de 20 caractères !")
        .required("le titre est obligatoire") ,
        auteur : Yup.string()
        .min(3 , 'L\'Auteur doit contenir au moins 3 caractères !')
        .max(20 , "L'Auteur doit contenir moins de 20 caractères !")
        .required("L'auteur est obligatoire") ,
        nbPages : Yup.number()
        .lessThan(1000 , 'Nombre de page doit etre inférieur à 1000 !')
        .moreThan(50 ,'Nombre de page doit etre supérieur à 50 !' )
        .required("le nombre de page est obligatoire")

    }) ,
    //----La validation avec Formik
    // validate : values => {
    //     const errors = {} ;
    //     if(values.titre.length < 3) {
    //         errors.titre = "Le titrte doit contenir au moins 3 caractères !"
    //     }
    //     if(values.titre.length > 20) {
    //         errors.titre = "Le titrte doit contenir moins de 20 caractères !"
    //     }
    //     if(!values.auteur) {
    //         errors.auteur = "Le champ auteur est obligatoire !"
    //     }
    //     if(!values.nbPages  || values.nbPages  < 10) {
    //         errors.nbPages = "Le nombre de page doit etre supérieur à 10 !"
    //     }

    //     return errors ;

    // } ,
    handleSubmit :(values , {props}) => {
        props.validation(values.titre , values.auteur , values.nbPages) ;
    }
}) (FormulaireAjout);
