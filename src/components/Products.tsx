import React, { useState, useEffect } from 'react'
import { Product } from '../types/types'
import Card from './Card'
import Pagination from './Pagination'

function Products() {
    const [Products, setProducts] = useState([])
    const [currentPage, setcurrentPage] = useState(1)
    const [productPerPage, setproductPerPage] = useState(5)

    const indexOfLastProduct = currentPage * productPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productPerPage;
    const currentProducts = Products.slice(indexOfFirstProduct, indexOfLastProduct);

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

    const renderCard = (currentProducts) => currentProducts.map((product:Product, idx) => {
        return <Card product={product} key={idx} />
    })
    
    const paginate = (pageNumber:number) => setcurrentPage(pageNumber)

    return (
        <div>
            <div className="cardWrap">
                {renderCard(currentProducts)}
            </div>
            <Pagination itemPerPage={productPerPage} totalItems={Products.length} paginate={paginate} />
        </div>
    )
}

export default Products
