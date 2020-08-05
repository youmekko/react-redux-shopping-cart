import { ADD_TO_CART } from '../actionTypes'
import { Product } from '../../types/types'

const initialState = {
    itemList: []
}

export default function(state = initialState , action) {
    switch (action.type) {
        case ADD_TO_CART: {

            const product = action.payload

            //이미 카트에 있다면?
            if (state.itemList.some((item:Product) => item.id === product.id)) {
                return {
                    ...state
                }
            } else {
                if (state.itemList.length >= 3) {
                    return {
                        ...state,
                        errMsg: '장바구니에는 세 개만 담을 수 있습니다.'
                    }
                }
            }

            //카트에 없다면
            
        

            return {
               ...state,
               itemList: [...state.itemList, action.payload]
            }   
        }
        default :
            return state
    }
}