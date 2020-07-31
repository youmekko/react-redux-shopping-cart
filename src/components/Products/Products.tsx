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
                ₩ {props.product.price.toLocaleString()}
            </div>
            <div className="cart">
               장바구니 담기
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
                    res.data.sort((a:Product, b:Product) => {
                        if (a.score > b.score) return -1
                        if (a.score < b.score) return 1
                        return 0
                    })
                    setProducts(res.data)
                } else {
                    alert('클래스 목록 가져오기에 실패 했습니다.')
                }
               
            })
    }, [])

    const renderCard = Products.map((product:Product, idx) => {
        return <Card product={product} key={idx} />
    })
    
    return (
        <div>
            <div>
                <h2>CLASS101</h2>
            </div>
            <div className="cardWrap">
                {renderCard}
            </div>
        </div>
    )
}

export default Products
