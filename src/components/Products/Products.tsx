import React, { useState, useEffect } from 'react'
import { Product } from '../types/types'

function Card(props) {
    return (
        <div>
            <div>
                <img src={props.product.coverImage} alt={props.product.title} />
            </div>
            <div>
                {props.product.title}
            </div>
            <div>
                 {props.product.price}
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
            <div>
                {renderCard}
            </div>
        </div>
    )
}

export default Products
