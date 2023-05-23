import React from "react";
import demoImg from "../../../resources/demoImg.png";

function FLRental({ filteredListRental }) {
  return (
    <div>
      <div
        className={`${
          filteredListRental.length > 0
            ? "flex flex-col h-full gap-10  w-[400px] sm:w-[440px]  md:w-[580px] lg:w-[720px] px-4"
            : "hidden"
        }`}
      >
        {filteredListRental?.map((vacationItem) => (
          <div
            className="flex flex-col items-start gap-5  md:flex-row justify-center"
            key={vacationItem.id}
          >
            <div className="w-full md:w-2/4">
              <img className="w-full" src={demoImg} alt="" />
            </div>
            <div className="w-full md:w-1/4 whitespace-normal">
              <div className="w-full">{vacationItem.rental.name}</div>
              <p className="w-full">
                {vacationItem.rental.averageRatingNumber}/10{" "}
                <span>({vacationItem?.rental.userReviewCount} ) reviews </span>
              </p>
            </div>
            <div className="w-full md:w-1/4">
              <div className="flex-col w-full items-start">
                <span className="">#photography</span>
                <span className="">#travel</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FLRental;
