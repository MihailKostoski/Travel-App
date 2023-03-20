import React, { useState, useEffect } from "react";
import { Navbar } from "../../../components/componentsIndex";
import Carousel from "./Carousel";

import { single } from "./single";

function SingleHotelReview() {
  const [singleData, setSingleData] = useState();

  useEffect(() => {
    setSingleData(single);
  }, []);

  console.log(singleData, " singleData");
  let singleItem = singleData?.data;
  let arrItem = [];
  console.log(singleItem);

  let it = singleItem?.photos.map((ph) => console.log(ph));
  return (
    <>
      <Navbar />
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
      <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10">
        <Carousel singleItem={singleItem} />
      </div>
    </>
  );
}

export default SingleHotelReview;
