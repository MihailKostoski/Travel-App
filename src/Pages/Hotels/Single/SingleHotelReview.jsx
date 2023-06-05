import React, { useState, useEffect } from "react";
import { CalendarSearch, Navbar } from "../../../components/componentsIndex";
import { single } from "./single";
import axios from "axios";
import Carousel from "./Carousel";
import AboutHotel from "./AboutHotel";
import NearbyRestaurants from "./NearbyRestaurants";
import { useParams } from "react-router-dom";
import useTravel from "../../../context";
import { baseUrl, headers } from "../../../api/api";

const options = {
  headers,
};

function SingleHotelReview() {
  const [singleData, setSingleData] = useState();
  const [page, setPage] = useState(0);
  const { reviewId } = useParams();
  const { date } = useTravel();
  let checkIn = date[0]?.startDate.toISOString().slice(0, 10);
  let checkOut = date[0]?.endDate.toISOString().slice(0, 10);

  const nextPage = () => {
    if (page < singleData.data.photos.length - 1) {
      setPage((prev) => prev + 1);
    } else {
      setPage(page);
    }
  };

  const previousPage = () => {
    if (page > 0) {
      setPage((prev) => prev - 1);
    } else null;
  };

  useEffect(() => {
    axios
      .get(
        `${baseUrl}/hotels/getHotelDetails?id=${reviewId}&checkIn=${checkIn}&checkOut=${checkOut}`,
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

  return (
    <div className="h-screen w-screen">
      <Navbar />
      <CalendarSearch />
      <div className="flex flex-col rounded-sm gap-4 justify-center items-center mt-5 mb-10 mx-10 md:mx-40">
        <div className="flex flex-col rounded-sm items-center bg-[rgb(45,167,144)] px-2 py-1">
          <h3>{singleItem?.title}</h3>
        </div>
        <div className="flex flex-row  rounded-md text-sm bg-gray-200  px-2 py-1">
          <ul>
            <li> {singleItem?.location?.address}</li>
          </ul>
        </div>
        <Carousel
          singleItem={singleItem}
          nextPage={nextPage}
          previousPage={previousPage}
          page={page}
          setPage={setPage}
        />
        <p
          className="bg-gray-200 rounded-md px-2 py-1"
          // text-gray text-base
        >
          {singleItem?.reviews?.ratingValue}/10{" "}
          <span>({singleItem?.reviews?.count} ) reviews </span>{" "}
        </p>
        <AboutHotel singleItem={singleItem} />
        <NearbyRestaurants singleItem={singleItem} />
      </div>
    </div>
  );
}

export default SingleHotelReview;
