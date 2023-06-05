import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { singleVacation } from "../../../components/ListHRV/Rental/SingleVacation";
import Navbar from "../../../components/Navbar/Navbar";
import CarouselRental from "./CarouselRental";
function SingleRentals() {
  const [singleData, setSingleData] = useState();
  const [page, setPage] = useState(0);
  const id = useParams();
  const data = singleVacation.data;
  console.log(data, "data");
  const nextPage = () => {
    if (page < singleData.photos.length - 1) {
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
    setSingleData(data);
  }, []);

  return (
    <div className="h-screen w-screen">
      <Navbar />
      <div className="flex flex-col rounded-sm gap-4 justify-center items-center mt-5 mb-10 mx-10 md:mx-40">
        <div className="flex flex-col rounded-sm items-center bg-[rgb(45,167,144)] px-2 py-1">
          <h3>{data.overview?.name}</h3>
        </div>

        <CarouselRental
          singleData={singleData}
          nextPage={nextPage}
          previousPage={previousPage}
          page={page}
          setPage={setPage}
        />
        <p className="bg-gray-200 rounded-md px-2 py-1">
          {data?.reviews?.ratingValue}/10{" "}
          <span>({data?.reviews?.count} ) reviews </span>{" "}
        </p>
        {/* <AboutHotel data={data} />
        <NearbyRestaurants data={data} /> */}
      </div>
    </div>
  );
}

export default SingleRentals;
