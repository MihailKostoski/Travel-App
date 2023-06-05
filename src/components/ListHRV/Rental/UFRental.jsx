import React from "react";
import demoImg from "../../../resources/demoImg.png";
import { useNavigate } from "react-router-dom";
function UFRental({ unfilteredListRentals, arrRentals }) {
  const navigate = useNavigate();
  const handleOnClick = (id) => {
    navigate(`/rentalsReview/${id}`);
  };
  return (
    <div>
      <div className="flex flex-col h-full gap-10  w-[400px] sm:w-[440px]  md:w-[580px] lg:w-[720px] px-4">
        {arrRentals?.map((vacationItem) => (
          <div
            className="flex flex-col items-start gap-5  md:flex-row justify-center"
            key={vacationItem.id}
          >
            <div className="col-span-full flex  rounded  flex-row justify-between  lg:col-start-1 lg:col-end-4">
              <button
                className="bg-[rgb(45,167,144)] rounded text-xs px-4 py-1"
                onClick={() => handleOnClick(vacationItem.id)}
              >
                View
              </button>
            </div>
            <div className="w-full md:w-2/4">
              <img className="w-full" src={demoImg} alt="" />
            </div>
            <div className="w-full md:w-1/4 whitespace-normal">
              <div className="w-full">{vacationItem.rental.name}</div>
              <div className="w-full">
                {vacationItem.rental.averageRatingNumber}/10{" "}
                <span>({vacationItem?.rental.userReviewCount} ) reviews </span>
              </div>
            </div>
            <div className="w-full md:w-1/4">
              <div className="flex flex-col w-full items-start">
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

export default UFRental;
