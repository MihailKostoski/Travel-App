import React, { useEffect, useState } from "react";
import { Sidebar } from "../componentsIndex";
function ListHRV({
  hotelId,
  dataList,
  filterHotels,
  restaurantData,
  vacationData,
}) {
  const [sort, setSort] = useState();
  const [data, setData] = useState();

  let rest = restaurantData?.data?.data;
  let rentalV = vacationData?.data.rentals.rentals;
  console.log(dataList);
  let List = dataList?.data.data;
  console.log(List);
  let listFiltered = List?.filter((hotelItem) => {
    // when i start working with api i need to remove split from this filter
    return hotelItem.primaryInfo !== null &&
      hotelItem.primaryInfo.toLowerCase().includes(sort?.toLowerCase())
      ? hotelItem.primaryInfo !== null && hotelItem.primaryInfo.toLowerCase()
      : !sort
      ? hotelItem
      : null;
  });
  console.log(listFiltered, "check");

  return (
    <>
      {listFiltered ? (
        <div className=" flex flex-col md:flex-row">
          <div className="h-screen hidden w-1/5 md:grid lg:w-1/6">
            <Sidebar
              setSort={setSort}
              sort={sort}
              filterHotels={filterHotels}
            />
          </div>
          <div className="flex w-screen flex-row md:hidden ">
            <button className="w-1/4">Filter</button>
            <button className="w-1/4">Maps</button>
          </div>
          <div className="p-8 m-auto w-4/5 grid grid-cols-1 gap-8 mt-8 md:mt-16  md:grid-cols-2 lg:grid-cols-3 w-5/6">
            {listFiltered?.map((hotelItem) => (
              <div key={hotelItem.id}>
                <div
                  className=""
                  // rounded overflow-hidden shadow-lg
                >
                  <img
                    className="w-full"
                    src={hotelItem?.cardPhotos?.[0].sizes.urlTemplate
                      .replace("{width}", "500")
                      .replace("{height}", "500")}
                    alt=""
                  />
                  <div
                    className=""
                    // px-6 py-4v
                  >
                    <div
                      className=""
                      // font-bold text-xl mb-2
                    >
                      {hotelItem.title}
                    </div>
                    <p
                      className=""
                      // text-gray text-base
                    >
                      {hotelItem.bubbleRating.rating}/10{" "}
                      <span>({hotelItem.bubbleRating.count} ) reviews </span>
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
      ) : rest ? (
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
      ) : rentalV ? (
        <div className=" flex flex-col md:flex-row">
          <div className="h-screen hidden w-1/5 md:grid lg:w-1/6">
            <Sidebar
              setSort={setSort}
              sort={sort}
              filterHotels={filterHotels}
            />
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
      ) : null}
    </>
  );
}

export default ListHRV;
