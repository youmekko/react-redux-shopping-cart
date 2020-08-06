import React from 'react'
import { Link } from 'react-router-dom';

function Pagination({ itemPerPage, totalItems, paginate }) {
    const pageNumber:Array<number> = []
                                            
    for (let i:number = 1; i <= Math.ceil(totalItems / itemPerPage); i++) {
        pageNumber.push(i)
    }

    console.log('pageName', paginate)

    return (
        <ul className="pagination">
            {pageNumber.map(pageNum =>{
                return (
                <Link to={`${match.url}?page=${pageNum}`}
                    onClick={() => paginate(pageNum)}
                >
                    <li
                        key={pageNum}
                        onClick={() => paginate(pageNum)}
                    >
                        <a href="#" className={true ? '' : 'active'}>{pageNum}</a>
                    </li>
                </Link>
                )
            })}
        </ul>
    )
}

export default Pagination
