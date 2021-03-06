import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../redux/actions'

function ProductCard({ product }) {
    const dispatch = useDispatch()

    const onAddToCart = () => {
        dispatch(addToCart(product))
    }

    const onRemoveFromCart = () => {
        dispatch(removeFromCart(product.id))
    }

    return (
        <div className="card">
            <div>
                <img src={product.coverImage} alt={product.title} />
            </div>
            <div className="cardTitle"> 
                {product.title}
            </div>
            <div className="cardButtom"> 
                <div className="price">
                    ₩ {product.price.toLocaleString()}
                </div>
                <div className="cart">
                    {product.carted ? 
                        (<span className="inCart" onClick={onRemoveFromCart}>빼기</span>) 
                        : (<span className="outCart" onClick={onAddToCart}>담기</span>)}
                </div>
            </div>
        </div>
    )
}

export default ProductCard