import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import FLHotels from "./FLHotels";
import UFHotels from "./UFHotels";
import Pagination from "../../Paginate/Paginate";

function HotelsFiltered({
  sort,
  setSort,
  filteredList,
  unfilteredList,
  filterHotels,
}) {
  const [numImg, setNumImg] = useState(0);
  const [currentId, setCurrentId] = useState();
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
    if (currentPage !== Math.ceil(unfilteredList.length / postsPerPage)) {
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

  const arr =
    unfilteredList.length > 0
      ? unfilteredList.slice(indexOfFirstPost, indexOfLastPost)
      : null;

  for (
    let i = 1;
    i <=
    Math.ceil(
      unfilteredList.length > 0 ? unfilteredList.length / postsPerPage : null
    );
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center mt-5 flex-col w-screen px-4 gap-2 md:flex-row  justify-center">
      <div className="hidden relative self-start h-[1460px]  md:flex flex-col items-center w-[260px] lg:w-[300px]">
        <div className="h-full w-full pb-8 absolute  bg-gradient-to-b from-white via-greenLight to-white z-4">
          <Sidebar
            setSort={setSort}
            sort={sort}
            filterHotels={filterHotels}
            currentId={currentId}
            setCurrentId={setCurrentId}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <FLHotels
          filteredList={filteredList}
          setNumImg={setNumImg}
          numImg={numImg}
          currentId={currentId}
          setCurrentId={setCurrentId}
        />

        <UFHotels
          unfilteredList={unfilteredList}
          arr={arr}
          setNumImg={setNumImg}
          numImg={numImg}
        />
        <div className="flex flex-row justify-start items-center mt-7 md:mt-10">
          <Pagination
            className=""
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            arr={arr}
            unfilteredList={unfilteredList}
            postsPerPage={postsPerPage}
            paginate={paginate}
            previousPage={previousPage}
            nextPage={nextPage}
            pageNumbers={pageNumbers}
          />
        </div>
      </div>
    </div>
  );
}

export default HotelsFiltered;
