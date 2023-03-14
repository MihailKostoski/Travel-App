import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { hotels } from "../../components/SearchBar/hotels";
import { restaurant } from "../../restuarant";

const options = {
  headers: {
    "X-RapidAPI-Key": "33cd884451msh63e77e0b0e4e5eep1e2adbjsnd4f06e3df30c",
    "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
  },
};

function Restaurants() {
  const [dataY, setDataY] = useState();
  const { restaurantId } = useParams();
  useEffect(() => {
    setDataY(restaurant);
    // axios
    //   .get(
    //     `https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants?locationId=${restaurantId}`,
    //     options
    //   )
    //   .then(function (response) {
    //     setDataY(response.data);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
  }, [restaurantId]);
  console.log(restaurantId);
  console.log(dataY);
  return (
    <div>
      Item Details for ID: {restaurantId}
      <div></div>
    </div>
  );
}

export default Restaurants;
