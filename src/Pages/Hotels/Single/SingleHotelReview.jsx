import React, { useState, useEffect } from "react";
import { Navbar } from "../../../components/componentsIndex";

import { single } from "./single";
import Carousel from "./Carousel";

function SingleHotelReview() {
  const [singleData, setSingleData] = useState();

  useEffect(() => {
    setSingleData(single);
  }, []);

  console.log(singleData, " singleData");
  let singleItem = singleData?.data;

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <div>
          <h3>{singleItem?.title}</h3>
          <p
            className=""
            // text-gray text-base
          >
            {singleItem?.reviews?.ratingValue}/10{" "}
            <span>({singleItem?.reviews?.count} ) reviews </span>{" "}
          </p>
          <span>{singleItem?.rankingDetails.replaceAll(/<\/?a>/g, "")}</span>
        </div>
        <div>
          <ul>
            <li> {singleItem?.location?.address}</li>
          </ul>
        </div>
        <div className="">
          <Carousel />
        </div>
      </div>
    </>
  );
}

export default SingleHotelReview;
