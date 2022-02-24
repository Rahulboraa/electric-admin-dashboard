import React from "react";
import ReactPaginate from "react-paginate";
import './Pagination.scss'

function Pagination({handlePageClick, pageCount}) {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={10}
      pageCount={pageCount}
      previousLabel="< prev"
      renderOnZeroPageCount={null}
      containerClassName="paginate"
      pageClassName="paginate__page"
      activeClassName="paginate__active"
      nextClassName="paginate__next"
      nextLinkClassName="paginate__anchor"
      previousClassName="paginate__prev"
      previousLinkClassName="paginate__anchor"
      disabledClassName="paginate__disabled"
    />
  );
}

export default Pagination;
