import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ListHRV, Navbar, Sidebar } from "../../components/componentsIndex";
import { useNavigate } from "react-router-dom";
import Tabs from "../../components/Tabs/Tabs";
import { baseUrl, headers } from "../../api/api";
import useTravel from "../../context";
const options = {
  headers,
};

function Restaurants() {
  const [restaurantData, setRestaurantData] = useState();
  const { restaurantId, restaurantName } = useParams();
  const navigate = useNavigate();
  const { category } = useTravel();
  const pathName = window.location.pathname;

  useEffect(() => {
    axios
      .get(
        `${baseUrl}/restaurant/searchRestaurants?locationId=${restaurantId}`,
        options
      )
      .then(function (response) {
        setRestaurantData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });

    if (category !== "restaurant") {
      navigate(`/hotels/${restaurantId}/${restaurantName}`);
    }
  }, [restaurantId, category, navigate]);
  return (
    <>
      <div className="">
        <div>
          <Navbar />
        </div>
        <Tabs />
        <div className="h-1/4  w-screen border border-solid border-grey flex flex-col justify-center items-center">
          <h1 className="flex justify-center text-3xl p-5">
            {restaurantName} Restaurants
          </h1>
        </div>

        <ListHRV restaurantData={restaurantData} />
      </div>
    </>
  );
}

export default Restaurants;
