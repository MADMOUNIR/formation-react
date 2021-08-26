import { useCallback, useMemo, useState } from 'react';
import './App.css';
import ImageFromApi from './Components/ImageFromApi';
import Timer from './Components/Timer.js'
import Video from './Components/Video'
import Content from './Components/Content'
import  useDimension from './Components/useDimension'


function App() {

  const [toggle , setToggle] = useState([1,2,3]) ;
const changeToggle = () => {
  //Ne jamais modifier le valeur de usestatae directement !!!!
  const newArr = [...toggle];
  newArr.push(4);
  setToggle(newArr);
}

//Use Memo
const tableau = useMemo(() => {return [1,2,3,4]}, [])
//--use memeo avec callback
const foo = useCallback(
  () => {
   console.log('click !!');
  },
  [],
);

// Hooks personnalisé 
const browserWidth = useDimension();
//console.log(dim);
if(browserWidth > 772) console.log('grand écran !');
else console.log('petit écran !');

  return (
    <div className="App">
      <h1>Advanced React</h1>

      <button onClick={changeToggle}>Push 4</button> 

      {/* <ImageFromApi/> */}
      {/* <button onClick={changeToggle}>{toggle ? "Hide" : "Show" } Timer</button> */}
      {/* {toggle && <Timer />} */}
      {/* <Video/> */}
      {/* <Content num={toggle}>
        <h1>Titre de l'article 1</h1>
        <p>Contenu de l'article..</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </Content> */}

      <Content num={tableau} foo={foo}>
    
      </Content>



      
    </div>
  );
}

export default App;
