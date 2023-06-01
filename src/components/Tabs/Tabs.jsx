import React from "react";

import { Link } from "react-router-dom";
import { BiHotel, BiRestaurant } from "react-icons/bi";
import { MdTravelExplore, MdOutlineHistory } from "react-icons/md";
import { RiHome3Line } from "react-icons/ri";
import { FiMoreVertical } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";

import useTravel from "../../context";

function Tabs() {
  const { hotels, vacationRentals, restauRants, category } = useTravel();

  return (
    <>
      <div className="flex w-full  flex-row flex-nowrap overflow-x-auto gap-x-8 justify-center my-10">
        <div className="flex items-center  w-32  h-16  hover:text-white justify-center text-center md:w-36  md:h-20">
          <div
            onClick={() => hotels()}
            className="flex justify-center h-full w-full  rounded-md gap-4 items-center px-8 py-5  
            
                bg-[rgb(45,167,144)] text-greenLight"
          >
            <span>Hotels</span>
            <span>
              <BiHotel />
            </span>
          </div>
        </div>

        <div className="flex items-center   w-32  h-16   hover:text-white justify-center   rounded text-center  md:w-36  md:h-20">
          <div
            onClick={() => vacationRentals()}
            className="flex justify-center h-full w-full rounded-md gap-4 items-center px-8 py-5 bg-[rgb(45,167,144)] "
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

        <div className="flex items-center  w-32  h-16 hover:text-white justify-center rounded text-center  md:w-36  md:h-20 ">
          <div
            onClick={() => restauRants()}
            className="flex justify-center  h-full w-full rounded-md gap-4 items-center px-8 py-5 bg-[rgb(45,167,144)]"
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
