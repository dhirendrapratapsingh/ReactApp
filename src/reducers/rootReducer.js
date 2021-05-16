// a central store of data which any component can subscribe to by connecting
import { SET_CARD_LIST } from "../actions/types";

const intialState = {   // all initial values of redux state can be initiallized here
    CardItems : [],
    CardItemsCopy : [], // used for reset to original list
    AllCardItems: [],
    paginationLimit : 9
} 


const rootReducer = (state = intialState ,action) =>
{
    console.log(action);
    
    
    if (action.type === 'GET_CARDS')
    {
        return {
            ...state,
            CardItems: action.payload.slice(0, 21),
            AllCardItems: action.payload,
            CardItemsCopy: action.payload.slice(0, 21)
        };
        
    }
    else if (action.type === 'ADD_CARD') {

        var copy = state.CardItems;
        copy.unshift(action.payload)

        return {
            ...state,
            allowLocalStateManipulation: true,
            CardItems: copy
        };

    }
    else if (action.type === 'DELETE_CARD') 
    {
        
        return {
            ...state,
            allowLocalStateManipulation : true,
            CardItems: state.CardItems.filter(item => item.id !== action.payload),
        };
          
    }
    else if (action.type === 'UPDATE_CARD') {

        console.log(action.payload);
        

        
        var updatedList = state.CardItems.map((item)=>
        {
            if (item.id === action.payload.id) {
                console.log('matched');
                item = action.payload;
            }
            return item;

        });
        console.log(updatedList);
        

        return {
            ...state,
            allowLocalStateManipulation: true,
            CardItems: updatedList
        };

    }
    else if (action.type === 'ALLOW_MANIPULATION')
    {
        return {
            ...state,
            allowLocalStateManipulation: action.payload,
        };
    }
    if (action.type === 'GET_MORE_CARDS') {
        return {
            ...state,
            CardItems: state.CardItems.concat(state.AllCardItems.slice(action.payload, action.payload + state.paginationLimit)),
            allowLocalStateManipulation: true
        };

    }
    else if (action.type === SET_CARD_LIST) {
        return {
            ...state,
            CardItems: action.payload,
        };
    }
    else
    {
        return state;
    }
     
}

export default rootReducer ;