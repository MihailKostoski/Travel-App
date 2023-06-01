import React from "react";

function AboutHotel({ singleItem }) {
  return (
    <div className="w-full  pl-6 border border-solid border-[2px]">
      <h4 className="font-semibold text-xl">About</h4>
      <div className="flex  text-gray-500 flex-row justify-between">
        <div className="">
          <h3 className="text-lg font-semibold text-black">
            {singleItem?.rating}
          </h3>
          <h4 className="text-sm">
            {singleItem?.rankingDetails?.replace(/<a\b[^>]*>(.*?)<\/a>/g, "$1")}
          </h4>
        </div>
        <ul className="">
          {singleItem?.amenitiesScreen.slice(0, 10).map((amenity) => (
            <li className="" key={amenity.title}>
              {amenity.title}
            </li>
          ))}
        </ul>
        <ul>
          {singleItem?.amenitiesScreen.slice(10).map((amenity) => (
            <li className="" key={amenity.title}>
              {amenity.title}
            </li>
          ))}
        </ul>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default AboutHotel;
