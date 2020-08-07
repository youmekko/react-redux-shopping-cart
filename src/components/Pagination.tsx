import React from 'react'
import { Link } from 'react-router-dom';

function Pagination({ itemPerPage, totalItems, paginate, currentPage, match }) {
    const pageNumber:Array<number> = []
                                            
    for (let i:number = 1; i <= Math.ceil(totalItems / itemPerPage); i++) {
        pageNumber.push(i)
    }

    return (
        <ul className="pagination">
            {pageNumber.map(pageNum =>{
                return (
                <li key={pageNum}>
                    <Link to={`${match.url}?page=${pageNum}`}
                        onClick={() => paginate(pageNum)}
                        className={currentPage === pageNum ? 'active' : ''}
                    >
                        {pageNum}
                    </Link>
                </li>
                )
            })}
        </ul>
    )
}

export default Pagination
