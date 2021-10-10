import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getUserPaination } from "../../../stores/user";
type PaginationProp = {
  pageMax: number;
  keyword: string
};
export function Pagination({ pageMax, keyword }: PaginationProp) {
  const [active, setActive] = useState(1)
  const dispatch = useDispatch()
  const handlePagination = (page: number) => {
    dispatch(getUserPaination(page, keyword))
    setActive(page)
  }
  let PaginationItem = [];
  for (let i = 1; i <= pageMax; i++) {
    PaginationItem.push(
      <li key={i} className={`paginate_button page-item ${active === i ? "active" : ""}`}>
        <button onClick={()=>handlePagination(i)} className="page-link">{i}</button>
      </li>
    );
  }
  return (
    <div className="col-sm-12 col-md-7">
      <div
        className="dataTables_paginate paging_simple_numbers d-flex justify-content-end"
        id="dataTable_paginate"
      >
        <ul className="pagination">
          <li
            className="paginate_button page-item previous disabled"
            id="dataTable_previous"
          >
            <button className="page-link">Previous</button>
          </li>
          {PaginationItem}
          <li className="paginate_button page-item next" id="dataTable_next">
            <button className="page-link">Next</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
