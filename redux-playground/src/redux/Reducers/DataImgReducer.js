const INITIAL_STATE = {
    imgURL : ""
}


function DataImgReducer(state =INITIAL_STATE , action) 
{
    switch (action.type) {
        case 'LOADIMG': return {
            ...state,
            imgURL : action.payload
        }
    
       
        default :
        return state;
    }
    
   
}

export default DataImgReducer;

export const  getCatImg = () => dispatch => {

    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        dispatch({
            type : 'LOADIMG',
            payload : data[0].url
        })
    })
}