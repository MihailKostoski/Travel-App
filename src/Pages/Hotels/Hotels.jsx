import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { hotels } from "../../components/SearchBar/hotels";

import { CalendarSearch } from "../../components/componentsIndex";
import HotelsList from "./HotelsList";
// const options = {
//   // method: "GET",
//   // url: "https://tripadvisor16.p.rapidapi.com/api/v1/hotels/getHotelsFilter",

//   headers: {
//     "X-RapidAPI-Key": "33cd884451msh63e77e0b0e4e5eep1e2adbjsnd4f06e3df30c",
//     "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
//   },
// };

function Hotels() {
  const { hotelId } = useParams();
  const [dataList, setDataList] = useState();

  useEffect(() => {
    setDataList(hotels);
    // axios
    //   .get(
    //     `https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotels?geoId=${hotelId}&checkIn=${checkIn}&checkOut=${checkOut}`,
    //     options
    //   )
    //   .then(function (response) {
    //     setDataY(response.data);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
  }, [hotelId]);

  return (
    <>
      <CalendarSearch />
      <HotelsList hotelId={hotelId} dataList={dataList} />
    </>
  );
}

export default Hotels;
