import React, { useState , useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import {getCatImg} from '../redux/Reducers/DataImgReducer';

export default function Counter() {
    
 
   
    const [cartData , setCartData] = useState(0);

    const {cart , count , imgURL} = useSelector( state => ({
        ...state.AddCartReducer ,
        ...state.CounterReducer,
        ...state.DataImgReducer

    }));

    const dispatch = useDispatch();

    const incrFunc = () => {
        dispatch({type : 'INCR'})
    }
    const decrFunc = () => {
        dispatch({type : 'DECR'})
    }

    const addToCart = () => {
        dispatch({
            type :'ADDCART',
            payload : cartData
        })
    };

    useEffect(() => {
        dispatch(getCatImg())       
    }, [])
    
    return (
        <div>
            <h1>votre Panier (avec TVA): {cart}</h1>
            
            {/* <button onClick={incrFunc}>Add 1</button>
            <button onClick={decrFunc}>Minus 1</button>
             */}
             <input 
             type="number"
             value={cartData}
             onInput={e=>setCartData(e.target.value)}
             ></input>
             <br/>
             <button onClick={addToCart}>Ajouter au panier</button>
             <br/>
             <h1>votre Compteur : {count}</h1>
             <br/>
             <button onClick={incrFunc}>Add 1</button>
            <button onClick={decrFunc}>Minus 1</button>

            <br/>
            <h2>Call Asynchrone API with dispatch</h2>
           {imgURL &&  <img src={imgURL} style={{width:'300px'}} alt='cat' />}

        </div>
    )
}
