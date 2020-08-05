import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../redux/actions'

function Card({ product }) {
    const dispatch = useDispatch()
    const [carted, setCarted] = useState(false)

    const onAddToCart = () => {
        setCarted(true)
        dispatch(addToCart(product))
    }

    const onRemoveFromCart = () => {
        setCarted(false)
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
                    {carted ? 
                        (<span onClick={onRemoveFromCart}>빼기</span>) 
                        : (<span onClick={onAddToCart}>담기</span>)}
                </div>
            </div>
        </div>
    )
}

export default Card