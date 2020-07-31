import React from 'react'

function Pagination({ itemPerPage, totalItems, paginate }) {
    const pageNumber:Array<number> = []
                                            
    for (let i:number = 1; i <= Math.ceil(totalItems / itemPerPage); i++) {
        pageNumber.push(i)
    }

    return (
        <ul>
            {pageNumber.map(pageNum =>{
                return (
                    <li
                        key={pageNum}
                        onClick={() => paginate(pageNum)}
                    >
                        {pageNum}
                    </li>
                )
            })}
        </ul>
    )
}

export default Pagination
