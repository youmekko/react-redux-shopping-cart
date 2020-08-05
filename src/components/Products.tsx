import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Product } from '../types/types'
import Card from './Card'
import Pagination from './Pagination'

function Products({ itemList }) {    
    const [currentPage, setcurrentPage] = useState(1)
    const [productPerPage, setproductPerPage] = useState(5)
    const indexOfLastProduct = currentPage * productPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productPerPage;
    const currentProducts = itemList.sort((a:Product, b:Product) => b.score - a.score)
                            .slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber:number) => setcurrentPage(pageNumber)

    const renderCard = (currentProducts) => currentProducts.map((product:Product, idx) => {
        return <Card product={product} key={idx} />
    })
    
    return (
        <div>
            <div className="cardWrap">
                {renderCard(currentProducts)}
            </div>
            <Pagination itemPerPage={productPerPage} totalItems={itemList.length} paginate={paginate} />
        </div>
    )
}

const mapStateToProps = state => {
    const { products } = state
    const { itemList } = products
    return { itemList }
}

export default connect(mapStateToProps)(Products)
