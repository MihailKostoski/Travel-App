import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CalendarSearch, ListHRV } from "../../components/componentsIndex";
import Navbar from "../../components/Navbar/Navbar";
import Tabs from "../../components/Tabs/Tabs";
import useShop from "../../context";
import axios from "axios";
import { baseUrl, headers } from "../../api/api";
const options = {
  headers,
};

function VacationRentals() {
  const { vacationId } = useParams();
  const [vacationData, setVacationData] = useState();
  const navigate = useNavigate();
  const { category, date } = useShop();
  const pathName = window.location.pathname;

  let checkIn = date[0]?.startDate.toISOString().slice(0, 10);
  let checkOut = date[0]?.endDate.toISOString().slice(0, 10);

  let popularity = "POPULARITY";

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
        `${baseUrl}/rentals/rentalSearch?geoId=${vacationId}&arrival=${checkIn}&departure=${checkOut}&sortOrder=${popularity}`,
        options
      )
      .then(function (response) {
        setVacationData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [vacationId, pathName, category, navigate]);

  return (
    <div className="flex flex-col items-center w-full ">
      <Navbar />
      <Tabs />
      <div className="h-1/4  w-screen border border-solid border-grey flex flex-col justify-center items-center">
        <h1 className="flex justify-center text-3xl p-5">
          Munich Vacation Rentals and Places to Stay
        </h1>
        <hr className="bg-grey w-3/4" />
        <span className="flex justify-center text-lg p-4">
          Enter dates to find the best prices
        </span>
        <CalendarSearch />
      </div>
      <div className="flex flex-col px-4 items-center md:gap-10">
        {/* <CalendarSearch /> */}
        <ListHRV vacationData={vacationData} />
      </div>
    </div>
  );
}

export default VacationRentals;
