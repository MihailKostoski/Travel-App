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
  const { restaurantId } = useParams();
  const navigate = useNavigate();
  const { category } = useTravel();

  const pathName = window.location.pathname;
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
      pathName !== "/vacationRentals/27470"
    ) {
      navigate("/vacationRentals/274707");
    }
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
  }, [restaurantId, pathName, category, navigate]);
  return (
    <>
      <div className="">
        <div>
          <Navbar />
        </div>
        <Tabs />

        <ListHRV restaurantData={restaurantData} />
      </div>
    </>
  );
}

export default Restaurants;
