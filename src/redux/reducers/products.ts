import { FETCH_PRODUCTS } from '../actionTypes'

const initialState = {
    itemList: []
}

export default function(state = initialState , action) {
    switch (action.type) {
        case FETCH_PRODUCTS: {
            return {
                ...state,
                itemList: action.payload
            }   
        }
        default :
            return state
    }
}