import React from "react";
import { useState, useEffect } from "react";
import { Navbar } from "../../../components/componentsIndex";
import axios from "axios";
import { useParams } from "react-router-dom";
import { baseUrl, headers } from "../../../api/api";
import AboutRestaurant from "./AboutHotel";

function SingleResaurant() {
  const [singleData, setSingleData] = useState();
  const { reviewId } = useParams();
  const options = {
    headers,
  };

  useEffect(() => {
    axios
      .get(
        `${baseUrl}/restaurant/getRestaurantDetails?restaurantsId=${reviewId}&currencyCode='USD`,
        options
      )
      .then(function (response) {
        setSingleData(response.data);
      })

      .catch(function (error) {
        console.error(error);
      });
  }, []);

  let singleItem = singleData?.data;
  console.log(singleItem, "ress");
  return (
    <div>
      <div className="h-screen w-screen">
        <Navbar />

        <div className="flex flex-col rounded-sm gap-4 justify-center items-center mt-5 mb-10 mx-10 md:mx-40">
          <div className="flex flex-col rounded-sm items-center bg-[rgb(45,167,144)] px-2 py-1">
            <h3>{singleItem?.overview.name}</h3>
          </div>
          <div className="flex flex-row  rounded-md text-sm bg-gray-200  px-2 py-1">
            <ul>
              <li> {singleItem?.location?.ranking}</li>
            </ul>
          </div>
          <img
            className="w-[700px]"
            src={singleItem?.location?.photo?.images?.large?.url}
            alt=""
          />

          <div className="flex flex-row  rounded-md text-sm bg-gray-200  px-2 py-1">
            <ul>
              <li> {singleItem?.location?.address}</li>
            </ul>
          </div>

          <p
            className="bg-gray-200 rounded-md px-2 py-1"
            // text-gray text-base
          >
            {singleItem?.location.rating}/10{" "}
            <span>({singleItem?.location?.num_reviews} ) reviews </span>{" "}
          </p>
          <AboutRestaurant singleItem={singleItem} />
        </div>
      </div>
    </div>
  );
}

export default SingleResaurant;
