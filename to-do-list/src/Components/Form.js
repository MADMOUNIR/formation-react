import { useState } from "react";
import Item from './Item'
import { v4 as uuidv4 } from 'uuid';

function Form()
{

    const [dataArr , setDataArr] = useState ([
        {id : uuidv4() , txt : "Promener le chien"},
        {id : uuidv4() , txt : "Sport"},
        {id : uuidv4() , txt : "Coder avec React"},
        {id : uuidv4() , txt : "Pause café"} 
    ]);

    const [stateInput , setStateInput] = useState();

    const deletElement = id => {
        const filtredArray = dataArr.filter(
            item => item.id !== id
        )
        setDataArr(filtredArray);
     
    }

    const linkedInput = e => {
        setStateInput(e);

    }

    const addTodo = e => {
        e.preventDefault();
       
        const newArr = [...dataArr];
       
        const newTodo = {};
        newTodo.txt = stateInput ;
        newTodo.id = uuidv4();
       
        newArr.push(newTodo);
        setDataArr(newArr);
        setStateInput('');
    }

    return (
        <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">

            <form className="mb-3" onSubmit={e => addTodo(e) } >
                <label htmlFor="todo" className="form-label mt-3">Chose à faire</label>
                <input type="text" 
                value={stateInput} 
                onChange={e => linkedInput(e.target.value)} 
                className="form-control" 
                id="todo" />
                <input type="submit"  className="mt-2 btn btn-primary d-block" text="Envoyer"/>

                <h2>Liste des choses à faire : </h2>
                <ul className="list-group">
                    {dataArr.map( (item , index) => {
                      return (  
                      <Item
                      txt={item.txt}
                      key = {item.id}
                      id={item.id}
                      delFunc = {deletElement}
                      /> 
                      );

                    }) }
                </ul>

            </form>
        </div>

    );
    
}

export default Form ;