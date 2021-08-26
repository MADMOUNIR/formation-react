import { useState , useEffect, Fragment } from "react";

function Timer () 
{

   const [timer , setTimer] =  useState(1);
 
   useEffect(() => {
      const intervalId = setInterval(() => {
         setTimer(timer => timer + 1) 
      }, 1000)
      return () => {
         // alert("Timer detruit !");
          clearInterval(intervalId);
      }

   }, []) 
   
    return (

        <Fragment>
        <h2>Timer : {timer}</h2>      
        <h2>Timer : {timer}</h2>  
        <h2>Timer : {timer}</h2>  
      
        
         </Fragment>
    )
}
export default Timer;