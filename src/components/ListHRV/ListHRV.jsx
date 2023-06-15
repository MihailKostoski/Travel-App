import React, { lazy, Suspense, useState } from "react";

import HotelsFiltered from "./Hotels/HotelsFiltered";
const HotelsLazyFiltered = lazy(() => import("./Hotels/HotelsFiltered"));
import RestaurantList from "./RestaurantList";
function ListHRV({ dataList, filterHotels, restaurantData }) {
  const [sort, setSort] = useState();

  let rest = restaurantData?.data?.data;

  let List = dataList?.data.data;
  const filteredList = [];
  const unfilteredList = [];

  ///////////////////////////////////////////

  const listFiltered = List?.filter((hotelItem) => {
    const includesSort =
      hotelItem?.primaryInfo !== null &&
      sort &&
      hotelItem?.primaryInfo.toLowerCase().includes(sort?.toLowerCase());

    if (includesSort) {
      filteredList.push(hotelItem);
    } else if (
      hotelItem.primaryInfo === null ||
      !hotelItem.primaryInfo?.toLowerCase().includes(sort?.toLowerCase()) ||
      !sort
    ) {
      unfilteredList.push(hotelItem);
    }

    return includesSort;
  });

  return (
    <>
      {listFiltered ? (
        <Suspense fallback={<div>Loadingg</div>}>
          <HotelsLazyFiltered
            sort={sort}
            setSort={setSort}
            filteredList={filteredList}
            unfilteredList={unfilteredList}
            filterHotels={filterHotels}
          />
        </Suspense>
      ) : rest ? (
        <RestaurantList rest={rest} />
      ) : null}
    </>
  );
}

export default ListHRV;
