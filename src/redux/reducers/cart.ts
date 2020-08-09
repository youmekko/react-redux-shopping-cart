import { 
    ADD_TO_CART, 
    REMOVE_FROM_CART, 
    CHANGE_SELECTED,
    CHANGE_SELECTED_ALL,
    CHANGE_QUANTITY
} from '../actionTypes'
import { Product } from '../../types/types'

const initialState = {
    itemList: [],
    selectedAll: true
}

export default function(state = initialState , action) {
    switch (action.type) {
        case ADD_TO_CART: {           
            const product = {
                ...action.payload,
                quantity: 1,
                selected: true
            }
            return {
                ...state,
                itemList: [...state.itemList, product]
            }   
        }
        case REMOVE_FROM_CART: 
            const productId = action.payload
            return {
                ...state,
                itemList: state.itemList.filter((item:Product) => 
                            item.id !== productId)
            }

        case CHANGE_SELECTED: 
            const { id, selected } = action.payload
            return {
                ...state,
                itemList: state.itemList.map((item:Product) => 
                    item.id === id
                    ? {
                        ...item,
                        selected: selected,
                    } : item),    
            }   
            
        case CHANGE_SELECTED_ALL: 
            const selectedAll = action.payload

            return {
                ...state,
                itemList: state.itemList.map((item:Product) => {
                    return {
                        ...item,
                        selected: selectedAll
                    }
                }),
                selectedAll: selectedAll
            }

        case CHANGE_QUANTITY:
            const { quantity } = action.payload
            return {
                ...state,
                itemList: state.itemList.map((item:Product) => 
                        item.id === action.payload.id
                        ? {
                            ...item,
                            quantity: quantity,
                        } : item)      
            }    

        default :
            return state
    }
}