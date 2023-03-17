import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ListHRV, Navbar, Sidebar } from "../../components/componentsIndex";
import { restaurants } from "../../components/SearchBar/restaurants";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import Tabs from "../../components/Tabs/Tabs";
import useShop from "../../context";
const options = {
  headers: {
    "X-RapidAPI-Key": "33cd884451msh63e77e0b0e4e5eep1e2adbjsnd4f06e3df30c",
    "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
  },
};

function Restaurants() {
  const [restaurantData, setRestaurantData] = useState();
  const { restaurantId } = useParams();
  const navigate = useNavigate();
  const { category } = useShop();

  const pathName = window.location.pathname;
  useEffect(() => {
    setRestaurantData(restaurants);
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
      pathName !== "/vacationRentals/27470"
    ) {
      navigate("/vacationRentals/274707");
    }
    // axios
    //   .get(
    //     `https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants?locationId=${restaurantId}`,
    //     options
    //   )
    //   .then(function (response) {
    //     setRestaurantData(response.data);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
  }, [restaurantId, pathName, category, navigate]);
  return (
    <>
      <div className="grid">
        <div>
          <Navbar />
        </div>

        <Tabs />
        <Sidebar />
        <ListHRV restaurantData={restaurantData} />
      </div>
    </>
  );
}

export default Restaurants;
