import React, { useState, useEffect } from 'react'
import { Product } from '../types/types'

function Card(props) {
    return (
        <div className="card">
            <div>
                <img src={props.product.coverImage} alt={props.product.title} />
            </div>
            <div className="title"> 
                {props.product.title}
            </div>
            <div className="price">
                 {props.product.price.toLocaleString()}
            </div>
            <div>
                Add to Cart
            </div>
        </div>
    )
}

function Products() {

    const [Products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/data/productItems.json')
            .then(res => res.json())
            .then(res => {
                if (res.data) {
                    setProducts(res.data)
                } else {
                    alert('Failed')
                }
               
            })
    }, [])

    const renderCard = Products.map((product:Product, idx) => {
        return <Card product={product} key={idx} />
    })
    
    return (
        <div>
            <div>
                <h2>Class101</h2>
            </div>
            <div className="cardWrap">
                {renderCard}
            </div>
        </div>
    )
}

export default Products
