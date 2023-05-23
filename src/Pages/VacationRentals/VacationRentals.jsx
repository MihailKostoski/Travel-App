import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CalendarSearch, ListHRV } from "../../components/componentsIndex";
import Navbar from "../../components/Navbar/Navbar";
import { vacation } from "../../components/SearchBar/vacation";
import Tabs from "../../components/Tabs/Tabs";
import useShop from "../../context";
import axios from "axios";
const options = {
  params: {
    //  geoId: "274707",
    // checkIn: "2023-03-17",
    // checkOut: "2023-03-17",
    // pageNumber: "1",
    // currencyCode: "USD",
  },
  headers: {
    "X-RapidAPI-Key": "33cd884451msh63e77e0b0e4e5eep1e2adbjsnd4f06e3df30c",
    "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
  },
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
  const [demo, setDemo] = useState();
  //   useEffect(() => {
  //     setFilterHotels(hotelFilter);
  //   });
  console.log(vacation);

  useEffect(() => {
    setVacationData(vacation);
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
    // axios
    //   .get(
    //     `https://tripadvisor16.p.rapidapi.com/api/v1/rentals/rentalSearch?geoId=${"274707"}&arrival=${checkIn}&departure=${checkOut}&sortOrder=${popularity}`,
    //     options
    //   )
    //   .then(function (response) {
    //     setVacationData(response.data);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
  }, [vacationId, pathName, category, navigate]);
  ///console.log(vacationData, "demo");
  return (
    <div className="flex flex-col items-center w-full ">
      <Navbar />
      <Tabs />
      <div className="flex flex-col px-4 items-center md:gap-10">
        <h1 className="flex justify-center text-2xl md:text-3xl ">
          Munich Apartments
        </h1>

        {/* <CalendarSearch /> */}
        <ListHRV vacationData={vacationData} />
      </div>
    </div>
  );
}

export default VacationRentals;
