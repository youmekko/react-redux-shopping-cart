import { FETCH_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART } from '../actionTypes'
import { Product } from '../../types/types'

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

        case ADD_TO_CART: {            
            return {
                ...state,
                itemList: state.itemList.map((item:Product) => 
                    item.id === action.payload.id
                    ? { 
                        ...item,
                        carted: true,
                    } : item )
            }
        }

        case REMOVE_FROM_CART: {
            return {
                ...state,
                itemList: state.itemList.map((item:Product) => 
                    item.id === action.payload
                    ? {
                        ...item,
                        carted: false,
                    } : item)
            }
       }
        default :
            return state
    }
}