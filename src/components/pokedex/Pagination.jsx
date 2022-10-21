import { current } from '@reduxjs/toolkit'
import React from 'react'
import './styles/pagination.css'

const Pagination = ({ page, pagesLength, setPage }) => {

    const pagesPerBlock = 8
    const currentBlock = Math.ceil(page / pagesPerBlock)
    const blockLength = Math.ceil(pagesLength / pagesPerBlock)

    const arrePages = []
    const initialPage = (currentBlock - 1) * pagesPerBlock + 1
    const limitPage = /*initialPage + pagesPerBlock - 1*/ blockLength === currentBlock ? pagesLength : currentBlock * pagesPerBlock
    for (let i = initialPage; i <= limitPage; i++) {
        arrePages.push(i)
    }

    const handlePrev = () => {
        setPage(page - 1)
    }

    const handleNext = () => {
        setPage(page + 1)
    }

    const handlePage = currentPage => {
        setPage(currentPage)
    }
    const handleFirst = () => {
        setPage(1)
    }
    const handleLast = () => {
        setPage(pagesLength)
    }

    return (
        <div className='pagination'>

            {
                page > 1 &&
                <div onClick={handlePrev} className='pagination__prev pagination__active'>&#60;</div>
            }
            {
                page > 1 &&
                <div onClick={handleFirst} className='pagination__page pagination__active'>...</div>
            }
            <ul className='pagination__container'>
                {
                    arrePages.map(e => (
                        <li className={`pagination__page ${page === e && 'pagination__active'}`}
                            onClick={() => handlePage(e)}
                            key={e}>{e}</li>
                    ))
                }
            </ul>
            {
                page < pagesLength &&
                <div onClick={handleLast} className='pagination__page pagination__active'>...</div>
            }
            {
                page < pagesLength &&
                <div onClick={handleNext} className='pagination_next pagination__active'>&#62;</div>
            }
        </div>
    )
}

export default Pagination