import { 
    FETCH_PRODUCTS,
    ADD_TO_CART,
    REMOVE_FROM_CART
} from './actionTypes'
import { Product } from '../types/types'
import products from './reducers/products'

export const fetchProducts = () => async (dispatch, getState) => {
    const products =  await fetch('http://localhost:3001/data/productItems.json')
        .then(res => res.json())
        .then(res => res.data)
         
    dispatch ({
        type: FETCH_PRODUCTS,
        payload: products
    })
}

export const addToCart = product => (dispatch, getState)=> {

    const { cart } = getState()
    const itemList = cart.itemList

    if (!itemList.some((item:Product) => item.id === product.id)) {
        if (itemList.length >=3 ) {
            alert ('장바구니에는 3개까지만 담을 수 있습니다!')
        } else {
            dispatch ({
                type: ADD_TO_CART,
                payload: product
            })
        }
    }
}

export const removeFromCart = productId => {
    return ({
        type: REMOVE_FROM_CART,
        payload: productId
    })
}


   
