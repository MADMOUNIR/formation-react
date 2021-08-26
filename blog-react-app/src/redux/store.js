import {createStore , combineReducers , applyMiddleware} from 'redux';
import articleReducer from './articles/articleReducer'
import thunk from 'redux-thunk'



const rootReducer = combineReducers({
    articleReducer,
    
});
//------pour utiliser thunk
const store = createStore(rootReducer , applyMiddleware(thunk));
export default store;