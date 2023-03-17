import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CalendarSearch, ListHRV } from "../../components/componentsIndex";
import Navbar from "../../components/Navbar/Navbar";
import { vacation } from "../../components/SearchBar/vacation";
import Tabs from "../../components/Tabs/Tabs";
import useShop from "../../context";

function VacationRentals() {
  const { vacationId } = useParams();
  const [vacationData, setVacationData] = useState();
  const navigate = useNavigate();
  const { category } = useShop();
  const pathName = window.location.pathname;
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
      category === "vacation" &&
      pathName !== "/vacationRentals/274707"
    ) {
      navigate("/vacationRentals/274707");
    }
    // axios
    //   .get(
    //     `https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotels?geoId=${hotelId}&checkIn=${checkIn}&checkOut=${checkOut}`,
    //     optionss
    //   )
    //   .then(function (response) {
    //     setDataY(response.data);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
  }, [vacationId, pathName, category, navigate]);

  return (
    <div>
      <Navbar />
      <Tabs />
      <div className="h-1/4  w-screen border border-solid border-grey flex flex-col justify-center items-center">
        <h1 className="flex justify-center text-3xl p-5">Munich Apartments</h1>

        {/* <CalendarSearch /> */}
        <ListHRV vacationData={vacationData} />
      </div>
    </div>
  );
}

export default VacationRentals;
