import { Fragment, useEffect, useRef } from "react";
import NatureVideo from './videoNature.mp4'
import SeaVideo from './SeaVideo.mp4'

function Video () 
{
  
const myRef = useRef();
console.log(myRef);

useEffect(() => {
    console.log(myRef);
    setTimeout(() => {
        myRef.current.pause();
        
    }, 1500);

    return () => {
        
    }
}, [])
 
//Add action Listner
useEffect(() => {
   
    window.addEventListener('resize' , actionResize);
    function actionResize()
    {
        console.log("Window resized !!!");
    }
    return () => {
        window.removeEventListener('resize', actionResize);
    }
}, [])

   
    return (

        <Fragment>
        <h2>Video </h2>      
      <video ref={myRef} width="750px" height="500px" autoPlay controls muted> 
      <source src={SeaVideo} type="video/mp4"></source>
      </video>
    <br/>
      <button onClick={
          () => { if(myRef !== "undifiend") myRef.current.pause();          

      } } >Pause</button>
       <button onClick={
          () => { if(myRef !== "undifiend") myRef.current.play();          

      } } >Play</button>
      
        
         </Fragment>
    )
}
export default Video;