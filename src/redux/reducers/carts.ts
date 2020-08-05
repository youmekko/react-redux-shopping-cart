import { ADD_TO_CART, REMOVE_FROM_CART } from '../actionTypes'
import { Product } from '../../types/types'

const initialState = {
    itemList: []
}

export default function(state = initialState , action) {
    switch (action.type) {
        case ADD_TO_CART: {
            const product = action.payload

            //이미 장바구니에 있을 때
            if (state.itemList.some((item:Product) => item.id === product.id)) {
                return {
                    ...state
                }
            //장바구니에 없을 때    
            } else {
                //장바구니에 3개 이상 추가 할 때
                if (state.itemList.length >= 3) {
                    return {
                        ...state,
                        errMsg: '장바구니에는 세 개만 담을 수 있습니다.'
                    }
                } else {
                    return {
                        ...state,
                        itemList: [...state.itemList, product]
                     }   
                }
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