import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import secondSide from "../../../resources/secondSide.jpg";
import sideImg from "../../../resources/side.jpg";
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
    scrollToPosition(0);
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      scrollToPosition(0);
    }
  };

  const setPageNormal = () => {
    setCurrentPage(1);
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(filteredList.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
      scrollToPosition(0);
    }
  };

  const scrollToPosition = (position) => {
    window.scrollTo({
      top: position,
      left: 0,
      behavior: "smooth",
    });
  };

  const pageNumbers = [];
  const array = filteredList.concat(unfilteredList);
  console.log(array, "arr");
  const arrayConcated =
    array.length > 0 ? array.slice(indexOfFirstPost, indexOfLastPost) : null;

  for (
    let i = 1;
    i <=
    Math.ceil(
      filteredList.length > 0
        ? filteredList.length / postsPerPage
        : unfilteredList.length > 0
        ? unfilteredList.length / postsPerPage
        : null
    );
    i++
  ) {
    pageNumbers.push(i);
  }

  console.log(unfilteredList, "unf");
  return (
    <div className="flex items-center mt-5 flex-col w-screen px-4 gap-2 md:flex-row  justify-center">
      <div className="hidden relative xl:flex flex-col ml-4 z-10  self-start lg:w-[260px] h-[160px]">
        <img className="w-full h-full" src={secondSide} alt="" />

        <div className="absolute flex flex-col items-center w-full h-[1100px] top-40 bg-gradient-to-b from-white via-greenLight to-white">
          <span>Beaches</span>
          <p className="mt-40 text-center bg-gradient-to-r from-white to-green  text-xl  font-semibold font-serif">
            Life is meant for good friends & great adventures
          </p>
        </div>
      </div>
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
          arrayConcated={arrayConcated}
          setNumImg={setNumImg}
          numImg={numImg}
          currentId={currentId}
          setCurrentId={setCurrentId}
        />
        <span>{}</span>
        <UFHotels
          unfilteredList={unfilteredList}
          setNumImg={setNumImg}
          numImg={numImg}
          arrayConcated={arrayConcated}
        />
        <Pagination
          className="flex"
          filteredList={filteredList}
          unfilteredList={unfilteredList}
          postsPerPage={postsPerPage}
          paginate={paginate}
          previousPage={previousPage}
          nextPage={nextPage}
          pageNumbers={pageNumbers}
        />
      </div>
    </div>
  );
}

export default HotelsFiltered;
