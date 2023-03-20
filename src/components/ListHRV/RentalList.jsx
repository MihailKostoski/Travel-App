import React from "react";
import { Sidebar } from "../componentsIndex";

function RentalList({ sort, setSort, rentalV }) {
  return (
    <div className=" flex flex-col md:flex-row">
      <div className="h-screen hidden w-1/5 md:grid lg:w-1/6">
        <Sidebar setSort={setSort} sort={sort} />
      </div>
      <div className="flex w-screen flex-row md:hidden ">
        <button className="w-1/4">Filter</button>
        <button className="w-1/4">Maps</button>
      </div>
      <div className="p-8 m-auto w-4/5 grid grid-cols-1 gap-8 mt-8 md:mt-16  md:grid-cols-2 lg:grid-cols-3 w-5/6">
        {rentalV?.map((vacationItem) => (
          <div key={vacationItem.id}>
            <div
              className=""
              // rounded overflow-hidden shadow-lg
            >
              {/* <img
              className="w-full"
              src={vacationItem?.thumbnail.photoSizeDynamic.urlTemplate
                .replace("{width}", "500")
                .replace("{height}", "500")}
              alt=""
            /> */}
              <div
                className=""
                // px-6 py-4v
              >
                <div
                  className=""
                  // font-bold text-xl mb-2
                >
                  {vacationItem.rental.name}
                </div>
                <p
                  className=""
                  // text-gray text-base
                >
                  {vacationItem.rental.averageRatingNumber}/10{" "}
                  <span>
                    ({vacationItem?.rental.userReviewCount} ) reviews{" "}
                  </span>
                </p>
              </div>
              <div
                className=""

                // px-6 pt-4 pb-2
              >
                <span className="">#photography</span>
                <span className="">#travel</span>
                <span className="">#winter</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RentalList;
