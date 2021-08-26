const INITIAL_STATE = {
    count : 999
}


function CounterReducer(state =INITIAL_STATE , action) 
{
    switch (action.type) {
        case 'INCR': return {
            ...state,
            count : state.count + 1
        }
    
        case 'DECR': return {
            ...state,
            count : state.count - 1 
        }
        case 'MULT2': return {
            ...state,
            count : state.count * 2 
        }
        default :
        return state;
    }
    
   
}

export default CounterReducer;