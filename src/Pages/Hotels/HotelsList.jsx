import React, { useEffect, useState } from "react";

function HotelsList({ hotelId, dataList }) {
  let List = dataList?.[0].data.data;

  console.log(List);
  return (
    <>
      {List?.map((hotelItem) => (
        <div key={hotelItem.id}>
          <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-3 gap-5">
            <div className="rounded overflow-hidden shadow-lg">
              <img
                className="w-full"
                src={hotelItem?.cardPhotos?.[0].sizes.urlTemplate
                  .replace("{width}", "500")
                  .replace("{height}", "500")}
                alt=""
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{hotelItem.title}</div>
                <p className="text-gray text-base">
                  {hotelItem.bubbleRating.rating}/10{" "}
                  <span>({hotelItem.bubbleRating.count} ) reviews </span>
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* <img
            src={hotelItem?.cardPhotos?.[0].sizes.urlTemplate
              .replace("{width}", "500")
              .replace("{height}", "500")}
            classNameName="rounded-t h-72 w-full object-cover"
          /> */}

      {/* <div>
        Item Details for ID: {hotelId}
        <div></div>
      </div> */}
    </>
  );
}

export default HotelsList;
