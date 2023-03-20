import React from "react";

import { Link } from "react-router-dom";
import { BiHotel, BiRestaurant } from "react-icons/bi";
import { MdTravelExplore, MdOutlineHistory } from "react-icons/md";
import { RiHome3Line } from "react-icons/ri";
import { FiMoreVertical } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";

import useShop from "../../context";

function Tabs() {
  const { hotels, vacationRentals, restauRants, category } = useShop();

  return (
    <>
      <div className="flex  max-w-full   flex-row flex-nowrap overflow-x-auto gap-x-8 justify-center  m-7">
        <div className=" flex items-center w-36 hover:bg-blueB hover:text-white justify-center border rounded text-center h-16">
          <div
            onClick={() => hotels()}
            className={`flex justify-between gap-4 items-center  px-8 py-5 hover:bg-blueB ${
              category === "hotels" ? "bg-blueB text-white" : "bg-white"
            }`}
          >
            <span>Hotels</span>
            <span>
              <BiHotel />
            </span>
          </div>
        </div>

        <div className=" flex items-center w-36 hover:bg-blueB  hover:text-white justify-center  border rounded text-center h-16  ">
          <div
            onClick={() => vacationRentals()}
            className={`flex justify-between gap-4 items-center px-8 py-5 hover:bg-blueB ${
              category === "rentals" ? "bg-blueB text-white" : "bg-white"
            }`}
          >
            <span>Vacation Rentals</span>
            <span>
              <RiHome3Line />
            </span>
          </div>
        </div>
        {/* <div className=" flex items-center w-36 hover:bg-blueB  hover:text-white justify-center  border rounded text-center h-16  ">
          <div className="flex justify-between gap-4 items-center px-6 py-2">
            <span>Cruises</span>
            <span><RiHome3Line /></span>
          </div>
        </div> */}

        <div className=" flex items-center w-36 hover:bg-blueB hover:text-white justify-center  border rounded text-center h-16 ">
          <div
            onClick={() => restauRants()}
            className={`flex justify-between gap-4 items-center px-8 py-5 hover:bg-blueB ${
              category === "restaurant" ? "bg-blueB text-white" : "bg-white"
            }`}
          >
            <span>Restaurants</span>
            <span>
              <BiRestaurant />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tabs;
