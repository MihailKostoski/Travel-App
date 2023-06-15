import React from "react";

function AboutRestaurant({ singleItem }) {
  return (
    <div className="w-full  pl-6 border mb-10 border-solid border-[2px]">
      <h4 className="font-semibold text-xl text-center">About</h4>
      <div className="flex flex-row gap-16 ">
        <div className="flex  text-gray-500 flex-row justify-between">
          <div className="">
            <h3 className="text-lg font-semibold text-black">
              {singleItem?.location.rating}
            </h3>
            <h4 className="text-sm">{singleItem?.location.ranking}</h4>
          </div>
        </div>
        <div>
          <h2 className="text-black">Food and ambience</h2>
          <span className="text-sm ">{singleItem?.location.description}</span>
        </div>
      </div>
    </div>
  );
}

export default AboutRestaurant;
