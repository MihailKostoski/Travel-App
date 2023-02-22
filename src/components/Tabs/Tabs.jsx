import React from "react";
import { Link } from "react-router-dom";
import { BiHotel, BiRestaurant } from "react-icons/bi";
import { MdTravelExplore, MdOutlineHistory } from "react-icons/md";
import { RiHome3Line } from "react-icons/ri";

import { FiMoreVertical } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";

function Tabs() {
  return (
    <>
      <div className="flex  max-w-full   flex-row flex-nowrap overflow-x-auto gap-x-8 justify-center  m-7">
        <div className=" flex items-center w-36 hover:bg-blueB hover:text-white justify-center border rounded text-center h-16">
          <Link
            to="/hotels"
            className="flex justify-between gap-4 items-center px-8 py-5"
          >
            <span>Hotels</span>
            <span>
              <BiHotel />
            </span>
          </Link>
        </div>
        <div className=" flex items-center w-36  hover:bg-blueB hover:text-white justify-center border rounded text-center h-16">
          <div className="flex justify-between gap-4 items-center  px-8 py-2">
            <span>Things to do</span>
            <span>
              <MdTravelExplore />
            </span>
          </div>
        </div>
        <div className=" flex items-center w-36 hover:bg-blueB  hover:text-white justify-center  border rounded text-center h-16  ">
          <div className="flex justify-between gap-4 items-center px-6 py-2">
            <span>Vacation Rentals</span>
            <span>
              <RiHome3Line />
            </span>
          </div>
        </div>
        <div className=" flex items-center w-36 hover:bg-blueB hover:text-white justify-center  border rounded text-center h-16 ">
          <div className="flex justify-between gap-4 items-center  px-4 py-5">
            <span>Restaurants</span>
            <span>
              <BiRestaurant />
            </span>
          </div>
        </div>
        <div className=" flex items-center w-36 hover:bg-blueB hover:text-white justify-center border rounded text-center h-16 ">
          <div className="flex justify-between gap-4 items-center  px-8 py-2">
            <span>Travel Stories</span>
            <span>
              <TfiWorld />
            </span>
          </div>
        </div>
        <div className="  flex items-center w-36 hover:bg-blueB hover:text-white justify-center border rounded text-center h-16">
          <div className="flex justify-between gap-4 items-center px-9 py-5">
            <span>More</span>
            <span>
              <FiMoreVertical />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tabs;
