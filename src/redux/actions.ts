import { 
    FETCH_PRODUCTS,
    ADD_TO_CART
} from './actionTypes'

export const fetchProducts = () => async (dispatch) => {
    const products =  await fetch('http://localhost:3001/data/productItems.json')
        .then(res => res.json())
        .then(res => res.data)
         
    dispatch ({
        type: FETCH_PRODUCTS,
        payload: products
    })
}

export const addToCart = proudct => {
    console.log('actioncart')
    return ({
        type: ADD_TO_CART,
        payload: proudct
    })
}


   
