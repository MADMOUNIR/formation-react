import React ,{useState} from 'react'
import './Form.css'
import {useDispatch} from  'react-redux'
import { v4 as uuidv4 } from 'uuid';


export default function Form() {
    
    const [article , setArticle] = useState({
        id : "",
        title:"" ,
        body : ""
    })

    const dispatch = useDispatch();

    const handleForm = (e) => {
        e.preventDefault();   
       //add id of article
       const artId =  uuidv4();
       const newObjState = { ...article , id : artId};
       setArticle(newObjState);
       console.log(newObjState);
        dispatch({
            type : 'ADDARTICLE' ,
            payload : newObjState
        })
        //réinitialisation du formulaire
        setArticle({            
            title : "" ,
            body : ""
        })
    }

    const handleInputs = (e) => {
        if(e.target.classList.contains('inp-title'))
        {
            const newObjState = { ...article ,title : e.target.value };
            setArticle(newObjState);
        }
        else if (e.target.classList.contains('inp-body'))
        {
            const newObjState = { ...article , body : e.target.value };
            setArticle(newObjState);
        }

    }
  

    return (
        <div>
            <h1 className="title-form">Write an article :</h1>
            <form  onSubmit={handleForm} className="container-form">
                <label className="title" htmlFor="label">Title</label>
                <input 
                onChange={handleInputs}
                value={article.title}
                type="text" 
                id="title" 
                placeholder="Enter a title" 
                className="inp-title" />

                <label className="content" htmlFor="article">Article</label>
                <textarea 
                onChange={handleInputs}
                value={article.body}
                name="article" 
                id="article" 
                cols="30" rows="10" 
                placeholder="enter a content"
                className="inp-body"></textarea>

                <button  >Submit</button>


            </form>
        </div>
    )
}
