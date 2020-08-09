import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { Product } from '../types/types'
import ProductCard from './ProductCard'
import Pagination from './Pagination'
import queryString from 'query-string'
// import { addToCart } from '../redux/actions'

function Products({ products, match }) {    
    const dispatch = useDispatch()

    const query = queryString.parse(window.location.search)
    const [currentPage, setcurrentPage] = useState<any>(query.page || 1)
    const [itemsPerPage, setItemsPerPage] = useState(5)
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = products.itemList.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber:number) => setcurrentPage(pageNumber)

    const renderCard = (currentItems) => currentItems.map((product:Product, idx) => {
        return <ProductCard product={product} key={idx} />
    })
    
    return (
        <div>
            <div className="cardWrap">
                {renderCard(currentItems)}
            </div>
            <Pagination itemPerPage={itemsPerPage} 
                        totalItems={products.itemList.length} 
                        paginate={paginate} 
                        currentPage={currentPage}
                        match={match}
             />
        </div>
    )
}

const mapStateToProps = state => {
    const { products } = state
    return { products }
}

export default connect(mapStateToProps)(Products)
