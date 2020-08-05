import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/actions'

function Card({ product }) {
    const dispatch = useDispatch()

    const onClickAddToCart = () => {
        console.log('cart')
        dispatch(addToCart(product))
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
                    <span onClick={onClickAddToCart}>담기</span>
                </div>
            </div>
        </div>
    )
}

export default Card