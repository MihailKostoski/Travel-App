import React, { useEffect, useState } from "react";

import HotelsFiltered from "./HotelsFiltered";
import RentalList from "./RentalList";
import RestaurantList from "./RestaurantList";
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
  const filteredList = [];
  const unfilteredList = [];

  const listFiltered = List?.filter((hotelItem) => {
    const includesSort =
      hotelItem.primaryInfo !== null &&
      sort &&
      hotelItem.primaryInfo.toLowerCase().includes(sort?.toLowerCase());

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

  console.log(filteredList, "check");
  console.log(unfilteredList, "ctwo");

  return (
    <>
      {listFiltered ? (
        <HotelsFiltered
          sort={sort}
          setSort={setSort}
          filteredList={filteredList}
          unfilteredList={unfilteredList}
          filterHotels={filterHotels}
        />
      ) : rest ? (
        <RestaurantList rest={rest} />
      ) : rentalV ? (
        <RentalList sort={sort} setSort={setSort} rentalV={rentalV} />
      ) : null}
    </>
  );
}

export default ListHRV;
