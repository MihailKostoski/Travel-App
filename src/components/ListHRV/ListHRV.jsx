import { all } from "axios";
import React, { useEffect, useState } from "react";

import HotelsFiltered from "./Hotels/HotelsFiltered";
import RentalList from "./Rental/RentalList";
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
  let rentalV = vacationData?.data.rentals?.rentals;
  let filterRentals = vacationData?.data?.filters;

  let List = dataList?.data.data;
  const filteredList = [];
  const unfilteredList = [];

  const filteredListRental = [];
  const unfilteredListRentals = [];

  const rentalFiltered = rentalV?.filter((rentalItem) => {
    let r = rentalItem?.rental.quickView.amenities.map((i) => {
      return i.value.localizedText;
    });
    let maped = r.map((i) => {
      return i.toLowerCase();
    });

    const includes = sort && maped?.includes(sort?.toLowerCase());
    if (includes) {
      filteredListRental.push(rentalItem);
    } else if (!maped?.includes(sort?.toLowerCase()) || !sort) {
      return unfilteredListRentals.push(rentalItem);
    }
  });
  console.log(rentalFiltered);
  console.log(filteredListRental, "first");
  console.log(unfilteredListRentals, "second unfiltered");

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
        <HotelsFiltered
          sort={sort}
          setSort={setSort}
          filteredList={filteredList}
          unfilteredList={unfilteredList}
          filterHotels={filterHotels}
        />
      ) : rest ? (
        <RestaurantList rest={rest} />
      ) : rentalFiltered ? (
        <RentalList
          sort={sort}
          filteredListRental={filteredListRental}
          unfilteredListRentals={unfilteredListRentals}
          setSort={setSort}
          // rentalFiltered={rentalFiltered}
          filterRentals={filterRentals}
        />
      ) : null}
    </>
  );
}

export default ListHRV;
