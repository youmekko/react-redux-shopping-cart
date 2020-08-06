import { ADD_TO_CART, REMOVE_FROM_CART } from '../actionTypes'
import { Product } from '../../types/types'

const initialState = {
    itemList: []
}

export default function(state = initialState , action) {
    switch (action.type) {
        case ADD_TO_CART: {
            const product = action.payload
            return {
                ...state,
                itemList: [...state.itemList, product]
            }   
        }
        case REMOVE_FROM_CART: 
            const productId = action.payload
            return {
                ...state,
                itemList: state.itemList.filter((item:Product) => item.id !== productId)
            }
        default :
            return state
    }
}