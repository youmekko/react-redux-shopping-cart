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
            const product = state.itemList.find((item:Product) => item.id === action.payload.id) || {}
            product['carted'] = true
            product['quantity'] = 1

            return {
                ...state,
                itemList: [...state.itemList]
            }
        }
        case REMOVE_FROM_CART: {
            const product = state.itemList.find((item:Product) => item.id === action.payload) || {}
            product['carted'] = false
            product['quantity'] = 0
            return {
                ...state,
                itemList: [...state.itemList]
            }
       }
        default :
            return state
    }
}