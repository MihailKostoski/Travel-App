import React from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Pagination from "../../Paginate/Paginate";
import FLRental from "./FLRental";
import UFRental from "./UFRental";
import { useState } from "react";
function RentalList({
  sort,
  setSort,
  rentalFiltered,
  filterRentals,
  filteredListRental,
  unfilteredListRentals,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    scrollToPosition(400);
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      scrollToPosition(0);
    }
  };
  const nextPage = () => {
    if (
      currentPage !== Math.ceil(unfilteredListRentals.length / postsPerPage)
    ) {
      setCurrentPage(currentPage + 1);
      scrollToPosition(0);
    }
  };

  const setPageNormal = () => {
    setCurrentPage(1);
  };

  const scrollToPosition = (position) => {
    window.scrollTo({
      top: position,
      left: 0,
      behavior: "smooth",
    });
  };

  const pageNumbers = [];

  const arrRentals =
    unfilteredListRentals.length > 0
      ? unfilteredListRentals.slice(indexOfFirstPost, indexOfLastPost)
      : null;

  for (
    let i = 1;
    i <=
    Math.ceil(
      unfilteredListRentals.length > 0
        ? unfilteredListRentals.length / postsPerPage
        : null
    );
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="flex items-center flex-col w-screen px-5 gap-2 md:flex-row  justify-center">
        <div className="hidden relative self-start h-[1460px]  md:flex flex-col items-center w-[260px] lg:w-[300px]">
          <div className="h-full w-full pb-8 absolute  bg-gadient-to-b from-white via-greenLight to-white z-4">
            <Sidebar
              setSort={setSort}
              sort={sort}
              filterRentals={filterRentals}
            />
          </div>
        </div>

        <div className="flex flex-col">
          <FLRental filteredListRental={filteredListRental} />
          <UFRental
            unfilteredListRentals={unfilteredListRentals}
            arrRentals={arrRentals}
          />
          <div className="flex flex-row justify-start items-center mt-7 md:mt-10">
            <Pagination
              className=""
              arr={arrRentals}
              unfilteredList={unfilteredListRentals}
              postsPerPage={postsPerPage}
              paginate={paginate}
              previousPage={previousPage}
              nextPage={nextPage}
              pageNumbers={pageNumbers}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default RentalList;
