import React from "react";
import { BiHotel, BiRestaurant } from "react-icons/bi";
import useTravel from "../../context";

function Tabs() {
  const { hotels, restauRants } = useTravel();

  return (
    <>
      <div className="flex w-full  flex-row flex-nowrap overflow-x-auto gap-x-8 justify-center my-10">
        <div className="flex items-center   w-32  h-10  hover:text-white justify-center text-center md:w-44  md:h-14">
          <div
            onClick={() => hotels()}
            className="flex justify-center h-full w-full  rounded-md gap-4 items-center 
            
                bg-[rgb(45,167,144)] text-greenLight"
          >
            <span>Hotels</span>
            <span>
              <BiHotel />
            </span>
          </div>
        </div>

        <div className="flex items-center  w-32  h-10 hover:text-white justify-center rounded text-center  md:w-44  md:h-14 ">
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
