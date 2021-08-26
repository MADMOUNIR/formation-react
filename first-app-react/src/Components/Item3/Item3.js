import { useState } from "react";
import './Item3.css'

function Item3 (props) {

    const [toggle , setToggle] = useState(true);
    const Datarray = [ {nom : "Juliette"} , 
                    {nom : "John"} , 
                    {nom : "Jonathan"}]

    const changeToggle = () => {
        setToggle(!toggle);
    }

    let toogleContenu ;
    let txtButton ;

    if(toggle === true) 
    {
        toogleContenu =   <img src={process.env.PUBLIC_URL + '/images/amp-a.png'} style={{ width:"64px" , height:"64px"}} alt="true"></img>     
    }
    else 
    {
        toogleContenu =   <img src={process.env.PUBLIC_URL + `/images/amp-e.png`} style={{ width:"64px" , height:"64px"}} alt="true"></img>      
    }
    txtButton = toggle ? "Eteindre" : "Allumer" ;

  
      return ( 
        <div>
        <h1>Item N° 3 : les condition</h1>
         {toogleContenu}
         <br/>
        <button onClick={changeToggle}> {txtButton} </button>
        <div className={toggle ? "box animated" : "box"}></div>
        <h1>Item N° 3 : les Listes</h1>

        {Datarray.map( (item , index) => {
            console.log(index);
            return <p key={index}>Nom : {item.nom}</p>
        })}
        </div>
        );
        
        

}
export default Item3;