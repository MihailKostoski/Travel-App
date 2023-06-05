import React from "react";
import { useState } from "react";
import { Pagination } from "../componentsIndex";
function RestaurantList({ rest }) {
  console.log(rest, "rest");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    scrollToPosition(200);
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      scrollToPosition(0);
    }
  };
  const nextPage = () => {
    if (currentPage !== Math.ceil(rest.length / postsPerPage)) {
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

  const array =
    rest.length > 0 ? rest.slice(indexOfFirstPost, indexOfLastPost) : null;

  for (
    let i = 1;
    i <= Math.ceil(rest.length > 0 ? rest.length / postsPerPage : null);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full px-20 grid grid-cols-1 items-center justify-center gap-8 mt-8 md:mt-16  md:grid-cols-2 lg:grid-cols-3">
        {array?.map((restaurantItem) => (
          <div key={restaurantItem.locationId}>
            <div className="bg-gray-300 px-1 rounded-md py-2">
              <img
                className="w-full h-[300px]"
                src={restaurantItem.heroImgUrl}
              />
              <div className="">
                <div className="flex flex-row gap-4  items-center">
                  <span className="text-[15px] font-semibold">
                    {restaurantItem.name}
                  </span>
                  <span
                    className={`text-xs mt-[1.3px] ${
                      restaurantItem.currentOpenStatusText.charAt(0) === "C"
                        ? "text-red-500"
                        : "text-green-500"
                    }`}
                  >
                    {restaurantItem.currentOpenStatusText}
                  </span>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                {restaurantItem?.establishmentTypeAndCuisineTags?.join(",  ")}
              </div>
              <div className="flex flex-row gap-2">
                <span className="">#travel</span>
                <span className="">#restaurants</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="my-4">
        <Pagination
          className=""
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          array={array}
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

export default RestaurantList;
