import React from "react";
import { Sidebar } from "../componentsIndex";
import { useNavigate } from "react-router-dom";
function HotelsFiltered({
  sort,
  setSort,
  filteredList,
  unfilteredList,
  filterHotels,
}) {
  const navigate = useNavigate();
  const handleOnClick = (hotel, id) => {
    navigate(`/hotelReview/${id}`);
  };
  return (
    <div className=" flex flex-col md:flex-row">
      <div className="h-screen hidden w-1/5 md:grid lg:w-1/6">
        <Sidebar setSort={setSort} sort={sort} filterHotels={filterHotels} />
      </div>
      <div className="flex w-screen flex-row md:hidden ">
        <button className="w-1/4">Filter</button>
        <button className="w-1/4">Maps</button>
      </div>
      <div className="grid">
        <div
          className={`${
            filteredList.length > 0
              ? "p-8 m-auto w-4/5 grid grid-cols-1 gap-8 mt-8 md:mt-16  md:grid-cols-2 lg:grid-cols-3 w-5/6"
              : "hidden"
          }`}
        >
          {filteredList?.map((hotelItem) => (
            <div onClick={() => handleOnClick(hotelItem.id)} key={hotelItem.id}>
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

        <div className="p-8 m-auto w-4/5 grid grid-cols-1 gap-8 mt-8 md:mt-16  md:grid-cols-2 lg:grid-cols-3 w-5/6">
          {unfilteredList?.map((hotelItem) => (
            <div onClick={() => handleOnClick(hotelItem.id)} key={hotelItem.id}>
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
    </div>
  );
}

export default HotelsFiltered;
