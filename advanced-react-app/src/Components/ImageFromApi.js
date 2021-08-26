import { useState , useEffect } from "react";

function ImageFromApi () 
{

   const [dataImg , setDataImg] =  useState();
   const ChangeImage = () => {
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => {
        return response.json();

    })
    .then(data => {
        console.log(data);
       return(data[0].url);
    })

   }
   useEffect(() => {
       fetch('https://api.thecatapi.com/v1/images/search')
       .then(response => {
           return response.json();

       })
       .then(data => {
           console.log(data);
           setDataImg(data[0].url)
       })

   }, []) 
   
    return (

        <div>
        <h2>Image from API using : useeffect</h2>
       {dataImg && <img src={dataImg} alt="cat" style={{width:"500px" }}></img>}
       <button onClick={ChangeImage}> Change State from Parent</button>
        
      </div>
    )
}

function   GetCatImage()
{
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => {
        return response.json();

    })
    .then(data => {
        console.log(data);
       return(data[0].url);
    })


}
export default ImageFromApi;