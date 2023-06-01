import React from "react";
import { useState } from "react";
function Pagination({
  pageNumbers,
  paginate,
  previousPage,
  nextPage,
  currentPage,
}) {
  console.log(currentPage, "currentpage");
  return (
    <>
      <div className="flex flex-row">
        <ul className="flex flex-row gap-2">
          <li onClick={previousPage} className="">
            Prev
          </li>
          {pageNumbers?.map((number, index) => (
            <li
              key={number}
              onClick={() => paginate(number)}
              className="bg-gray-100 w-full px-2   rounded-md"
            >
              {number}
            </li>
          ))}
          <li onClick={nextPage} className="page-number">
            Next
          </li>
        </ul>
      </div>{" "}
      <div className="flex flex-row">
        <ul className="flex flex-row gap-2">
          <li onClick={previousPage} className="">
            Prev
          </li>
          {pageNumbers?.map((number, index) => (
            <li
              key={number}
              onClick={() => paginate(number)}
              className={`w-full px-2 rounded-md ${
                number === currentPage ? "bg-gray-300" : "bg-gray-100"
              } `}
            >
              {number}
            </li>
          ))}
          <li onClick={nextPage} className="page-number">
            Next
          </li>
        </ul>
      </div>
    </>
  );
}
export default Pagination;
