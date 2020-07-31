import React from 'react'

function Card({ product }) {
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
                    담기
                </div>
            </div>
        </div>
    )
}

export default Card