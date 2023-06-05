import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CalendarSearch } from "../../components/componentsIndex";
import ListHRV from "../../components/ListHRV/ListHRV";
import { hotelFilter } from "../../components/SearchBar/hotelsFilter";
import Tabs from "../../components/Tabs/Tabs";
import { Navbar } from "../../components/componentsIndex";
import { useNavigate } from "react-router-dom";
import useTravel from "../../context";
import { baseUrl, headers } from "../../api/api";

const options = {
  headers,
};

function Hotels() {
  const { hotelId } = useParams();
  const [dataList, setDataList] = useState();
  const [filterHotels, setFilterHotels] = useState();
  const { category, date } = useTravel();
  const navigate = useNavigate();
  const pathName = window.location.pathname;

  let checkIn = date[0]?.startDate.toISOString().slice(0, 10);
  let checkOut = date[0]?.endDate.toISOString().slice(0, 10);

  useEffect(() => {
    setFilterHotels(hotelFilter);
  });

  useEffect(() => {
    if (
      pathName !== "/" &&
      category === "restaurant" &&
      pathName !== "/restaurants/274707"
    ) {
      navigate("/restaurants/274707");
    }
    if (
      pathName !== "/" &&
      category === "hotels" &&
      pathName !== "/hotels/274707"
    ) {
      navigate("/hotels/274707");
    }
    if (
      pathName !== "/" &&
      category === "rentals" &&
      pathName !== "/vacationRentals/274707"
    ) {
      navigate("/vacationRentals/274707");
    }

    axios
      .get(
        `${baseUrl}/hotels/searchHotels?geoId=${hotelId}&checkIn=${checkIn}&checkOut=${checkOut}`,
        options
      )
      .then(function (response) {
        setDataList(response.data);
      })

      .catch(function (error) {
        console.error(error);
      });
  }, [hotelId, pathName, category, navigate, date]);

  return (
    <>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        <Navbar />

        <Tabs />
        <div className="h-1/4  w-screen border border-solid border-grey flex flex-col justify-center items-center">
          <h1 className="flex justify-center text-3xl p-5">
            Munich Hotels and Places to Stay
          </h1>
          <hr className="bg-grey w-3/4" />
          <span className="flex justify-center text-lg p-4">
            Enter dates to find the best prices
          </span>
          <CalendarSearch />
        </div>

        <ListHRV
          hotelId={hotelId}
          dataList={dataList}
          filterHotels={filterHotels}
        />
      </div>
    </>
  );
}

export default Hotels;
