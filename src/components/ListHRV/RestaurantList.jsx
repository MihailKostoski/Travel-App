import React from "react";

function RestaurantList({ rest }) {
  return (
    <div className="p-8 m-auto w-4/5 grid grid-cols-1 gap-8 mt-8 md:mt-16  md:grid-cols-2 lg:grid-cols-3 w-5/6">
      {rest?.map((restaurantItem) => (
        <div key={restaurantItem.locationId}>
          <div
            className=""
            // rounded overflow-hidden shadow-lg
          >
            <img className="w-full" src={restaurantItem.heroImgUrl} />
            <div
              className=""
              // px-6 py-4v
            >
              <div
                className=""
                // font-bold text-xl mb-2
              >
                {restaurantItem.name}
              </div>
              {/* <p
              className=""
              // text-gray text-base
            >
              {hotelItem.bubbleRating.rating}/10{" "}
              <span>({hotelItem.bubbleRating.count} ) reviews </span>
            </p> */}
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
  );
}

export default RestaurantList;
