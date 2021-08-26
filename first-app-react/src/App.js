import { useState } from 'react';
import './App.css';
import Item from './Components/Item/Item';
import Item2 from './Components/Item2/Item2';
import Item3 from './Components/Item3/Item3';


function App() {
  
 //console.log("MISE A JOUR DU COMPOSANT !!!");
  const [monState , setState] = useState(10);

 
  const ChangeState = (data) => {
   setState(data) 
   // console.log(data);
  };
  
  return (
    <div className="App">   
        
        <h1>  hello react !</h1>   
       {/* <p> Lorem, ipsum dolor sit amet co  </p>          
        {5 +6 }
        <br />
        <input type="text" />
         <Item txt={"Hello World "}/>    
       
 

        <p>State initiale : {monState}</p> 
        <button onClick={ChangeState}> Change State from Parent</button>
       <p>les props </p> */}
        {/* <Item func={ChangeState}/> */}

      

        <Item3/>

    </div>
  );
}

export default App;
