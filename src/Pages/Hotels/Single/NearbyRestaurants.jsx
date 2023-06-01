import React from "react";

function NearbyRestaurants({ singleItem }) {
  return (
    <div className="border border-solid mb-10 border-[2px]">
      <ul className="flex flex-row flex-wrap gap-5">
        {singleItem?.restaurantsNearby.content
          ?.slice(0, 6)
          .map((restaurant) => (
            <li>
              <div className="flex flex-col gap-4 justify-center items-center">
                <span>{restaurant.title}</span>
                <img
                  src={restaurant?.cardPhoto?.urlTemplate
                    .replace("{width}", "200")
                    .replace("{height}", "100")}
                  alt=""
                />
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default NearbyRestaurants;
