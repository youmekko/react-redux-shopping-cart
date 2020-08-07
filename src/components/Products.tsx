import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Product } from '../types/types'
import Card from './Card'
import Pagination from './Pagination'
import queryString from 'query-string'

function Products({ itemList, match }) {    
    const query = queryString.parse(window.location.search)
    const [currentPage, setcurrentPage] = useState<any>(query.page || 1)
    const [itemsPerPage, setItemsPerPage] = useState(5)
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = itemList.sort((a:Product, b:Product) => b.score - a.score)
                            .slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber:number) => setcurrentPage(pageNumber)

    const renderCard = (currentItems) => currentItems.map((product:Product, idx) => {
        return <Card product={product} key={idx} />
    })
    
    return (
        <div>
            <div className="cardWrap">
                {renderCard(currentItems)}
            </div>
            <Pagination itemPerPage={itemsPerPage} 
                        totalItems={itemList.length} 
                        paginate={paginate} 
                        currentPage={currentPage}
                        match={match}
             />
        </div>
    )
}

const mapStateToProps = state => {
    const { products } = state
    const { itemList } = products
    return { itemList }
}

export default connect(mapStateToProps)(Products)
