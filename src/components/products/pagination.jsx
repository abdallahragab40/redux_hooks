import React from "react";
import _ from "lodash";

const Pagination = props => {
  const pages = _.range(1, props.pageCount + 1);
  return (
    /* paging */
    <div className="paging">
      {/* left arrow */}
      <div className="paging__arrow">
        <i className="fas fa-angle-left" />
      </div>
      {/* page number */}
      {pages.map(page => (
        <div
          style={{ cursor: "pointer" }}
          key={page}
          className={
            props.activePage === page
              ? "paging__number active"
              : "paging__number"
          }
        >
          <span onClick={() => props.onPageChange(page)} className="page-link">
            {page}
          </span>
        </div>
      ))}

      {/* right arrow */}
      <div className="paging__arrow">
        <i className="fas fa-angle-right" />
      </div>
    </div>
  );
};

export default Pagination;
