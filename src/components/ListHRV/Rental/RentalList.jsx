import React from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";

import secondSide from "../../../resources/secondSide.jpg";
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
  return (
    <>
      <div className="flex items-center flex-col w-screen px-5 gap-2 md:flex-row  justify-center">
        <div className="hidden relative xl:flex flex-col ml-4 z-10  self-start lg:w-[260px] h-[160px]">
          <img className="w-full h-full" src={secondSide} alt="" />

          <div className="absolute flex flex-col items-center w-full h-[640px] top-40 bg-gradient-to-b from-white via-greenLight to-white">
            <span>Beaches</span>
            <p className="mt-40 text-center bg-gradient-to-r from-white to-green p-4 text-xl  font-semibold font-serif">
              Life is meant for good friends & great adventures
            </p>
          </div>
        </div>

        <div className="hidden relative self-start h-[860px]  md:flex flex-col items-center w-[260px] lg:w-[300px]">
          <div className="h-full w-full pb-8 absolute  bg-gradient-to-b from-white via-greenLight to-white z-10">
            <Sidebar
              setSort={setSort}
              sort={sort}
              filterRentals={filterRentals}
            />
          </div>
        </div>

        <div className="flex flex-col">
          <FLRental filteredListRental={filteredListRental} />
          <UFRental unfilteredListRentals={unfilteredListRentals} />
        </div>
      </div>
    </>
  );
}

export default RentalList;
