import React from 'react'
// import PropTypes from 'prop-types'

const Pagination = ({totalCount, onPageChange, onPerPageChange, currentPage, perPage}) => {

  const pagesCount = Math.ceil(totalCount / perPage)
  // const allPages = Array(pagesCount).fill(0).map((_, i) => i + 1)
  console.log('currentPage', currentPage, 'perPage', perPage)
  return(
    <div className='pagination'>
      <select onChange={(e) => onPerPageChange(e.target.value)}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
      <button className="pagination__button" disabled={currentPage === 1} onClick={() => onPageChange(currentPage-1)}>prev</button>
      <span className="pagination__info">{currentPage}</span>
      <button className="pagination__button" disabled={currentPage === pagesCount} onClick={() => onPageChange(currentPage+1)}>next</button>
      <span className="pagination__info">pages count: {pagesCount}</span>
    </div>
  )
}

// Pagination.propTypes = {
//   totalCount: PropTypes.number.isRequired,
//   onPageChange: PropTypes.func.isRequired,
// };

export default Pagination