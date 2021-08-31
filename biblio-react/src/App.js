
import './App.css';
import Title from './Components/Title/Title'
import Button from './Components/Button/Button'
import Tableau from './Components/Tableau/Tableau'
import Livres from './Containers/Livres/Livres'
import { useState } from 'react';


function App() {
  
 const [isAddLivre , setIsAddLivre] = useState(false); 
  
  //----Fonction d'ajout d'un livre 
    const OpenAddLivre = () => {
      console.log("ajout d'un livre");
      setIsAddLivre(!isAddLivre);
  } 
  
  return (
    <div className="container">
    <Title>
        Liste des livres
    </Title>
  
    <Livres ajoutLivre={isAddLivre} fermerAjoutLivre={()=>{setIsAddLivre(false)}} />
    
    {!isAddLivre && <Button texte={isAddLivre ? "Fermer l'ajout" : "Ajouter Livre"}  color="btn-success"  taille="" clic={OpenAddLivre}> </Button> }
   
    </div>
  );
}

export default App;
