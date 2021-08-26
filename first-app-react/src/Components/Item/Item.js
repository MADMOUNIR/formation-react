import { useState } from 'react';
import Nature from '../../assets/img/nature.jpg'
import imageSVG from '../../assets/img/image.svg'



function Item (props) 
{
    const [monState , setState] = useState("item state of child");
    let toggle = true ;
    const styleCss = {  color:toggle ?"green" : "red" }
   
   

    return ( 
    <div>
        <h1>state : {props.number} !</h1> 
        <button onClick={() =>  props.func(monState)}> Change State from Item</button>

        <h1 style={styleCss}>Hello CSS from Item</h1>
        <img src={Nature} alt="nature" style={{ width:"400px" , height:"300px"}}></img>
        <br/>
        <h2>Image from Item Comp</h2>
        <img src={imageSVG} alt="nature" style={{ width:"150px" , height:"100px"}} ></img>
        <h2>Image from Public </h2>
        <img src={process.env.PUBLIC_URL + `/images/hill.jpg`} style={{ width:"250px" , height:"150px"}} alt="hill"></img>
    </div>
    );
}
export default Item;