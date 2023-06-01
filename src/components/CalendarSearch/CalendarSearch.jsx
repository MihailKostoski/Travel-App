import React, { useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { AiFillCalendar } from "react-icons/ai";
import { BsPersonPlus } from "react-icons/bs";
import useTravel from "../../context";
function CalendarSearch({}) {
  const [openDate, setOpenDate] = useState(false);
  const { date, setDate } = useTravel();
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  console.log(date, "date");

  return (
    <>
      <div className="flex justify-center gap-20 items-center h-20 px-4 m-7  top-0 left-0 z-10 w-full text-white">
        <div className="relative ">
          <span
            onClick={() => setOpenDate(!openDate)}
            className="headerSearchText w-[200px] h-[78px] cursor-pointer  flex  items-center gap-0.5 text-[rgb(45,167,144)] border border-solid p-5 bg-white md:w-full h-full"
          >
            <div className=" flex  w-6 h-6 mr-1">
              <AiFillCalendar className="w-full h-full " />
            </div>
            {`${format(date[0]?.startDate, "MM/dd/yyyy")} to ${format(
              date[0]?.endDate,
              "MM/dd/yyyy"
            )}`}
          </span>
          {openDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date bg-gray-300 absolute white top-20 z-2"
              minDate={new Date()}
            />
          )}
        </div>
        {/* /////////////////////////////////////////////////////////////////// */}
        <div className="relative ">
          <span
            onClick={() => setOpenOptions(!openOptions)}
            className="headerSearchText cursor-pointer flex w-[200px] h-[78px] items-center gap-0.5 text-[rgb(45,167,144)]  border border-solid p-5 bg-white md:w-full h-full"
          >
            {" "}
            <div className="flex w-6 h-6 mr-1">
              <BsPersonPlus className="w-full h-full text-[rgb(45,167,144)]" />
            </div>
            {`${options.adult} adult · ${options.children} children · ${options.room} room`}
          </span>
          {openOptions && (
            <div className=" absolute top-20 bg-gray-300 text-gray rounded-5 shadow-lg z-2 ">
              <div className=" flex justify-between my-10 px-10">
                <span className="optionText">Adult</span>
                <div className=" flex items-center gap-10 text-black text-sm">
                  <button
                    disabled={options.adult <= 1}
                    className=" w-30 h-30 border-solid border-2 border-blue-500 text-blue-500 rounded-full cursor-pointer bg-white"
                    onClick={() => handleOption("adult", "d")}
                  >
                    -
                  </button>
                  <span className="Number">{options.adult}</span>
                  <button
                    className="  w-30 h-30 border-solid border-2 border-blue-500 text-blue-500 rounded-full cursor-pointer bg-white"
                    onClick={() => handleOption("adult", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="  flex justify-between my-10 px-10">
                <span className="optionText">Children</span>
                <div className="  flex items-center gap-10 text-black text-sm">
                  <button
                    disabled={options.children <= 0}
                    className="w-30 h-30 border-solid border-2 border-blue-500 text-blue-500 rounded-full cursor-pointer bg-white"
                    onClick={() => handleOption("children", "d")}
                  >
                    -
                  </button>
                  <span className="Number">{options.children}</span>
                  <button
                    className="  w-30 h-30 border-solid border-2 border-blue-500 text-blue-500 rounded-full cursor-pointer bg-white"
                    onClick={() => handleOption("children", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="  flex justify-between my-10 px-10">
                <span className="optionText">Room</span>
                <div className="  flex items-center gap-10 text-black text-s">
                  <button
                    disabled={options.room <= 1}
                    className="w-30 h-30 border-solid border-2 border-blue-500 text-blue-500 rounded-full cursor-pointer bg-white"
                    onClick={() => handleOption("room", "d")}
                  >
                    -
                  </button>
                  <span className="Number">{options.room}</span>
                  <button
                    className="w-30 h-30 border-solid border-2 border-blue-500 text-blue-500 rounded-full cursor-pointer bg-white"
                    onClick={() => handleOption("room", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
          {/* //////////////////////////////////// */}
        </div>
      </div>
    </>
  );
}

export default CalendarSearch;
