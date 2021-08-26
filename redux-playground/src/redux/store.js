import {createStore , combineReducers , applyMiddleware} from 'redux';
import CounterReducer from './Reducers/CounterReducer'
import AddCartReducer from './Reducers/AddCartReducer';
import thunk from 'redux-thunk' ;
import DataImgReducer from './Reducers/DataImgReducer';


const rootReducer = combineReducers({
    AddCartReducer,
    CounterReducer ,
    DataImgReducer
});
const customMidelware = store => next => action => {
    console.log(action);
    const addTVA = {
        type : 'ADDCART',
        payload : (action.payload * 1.17).toFixed(2)
    }
    //Continuer l'execution des action
    if(action.type === 'ADDCART')
    {
        next(addTVA);
    }
    else next(action);
    
}
//--------Pour appeler un middelware customiser (apply TVA)
//const store = createStore(rootReducer , applyMiddleware(customMidelware));


//------pour utiliser thunk
const store = createStore(rootReducer , applyMiddleware(thunk));
export default store;