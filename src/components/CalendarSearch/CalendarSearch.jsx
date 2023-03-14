import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

function CalendarSearch() {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
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

  return (
    <>
      <div className="flex justify-between items-center h-20 px-4 bg-blueB m-7top-0 left-0 z-10 w-full text-white">
        <div className=" flex item-center gap-2.5">
          {/* <FontAwesomeIconicon={faCalendarDays} className="headerIcon"/> */}
          <span
            onClick={() => setOpenDate(!openDate)}
            className="headerSearchText cursor-pointer text-gray bg-white"
          >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
            date[0].endDate,
            "MM/dd/yyyy"
          )}`}</span>
          {openDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date bg-blueB absolute top-14 z-2"
              minDate={new Date()}
            />
          )}
        </div>
        <div className=" flex item-center gap-2.5">
          {/* <FontAwesomeIcon icon={faPerson} className="headerIcon" /> */}
          <span
            onClick={() => setOpenOptions(!openOptions)}
            className="headerSearchText cursor-pointer text-gray bg-white"
          >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
          {openOptions && (
            <div className=" absolute top-14 bg-blueB text-gray rounded-5 shadow-lg z-2 ">
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
              <div className=" flex justify-between my-10 px-10">
                <span className="optionText">Children</span>
                <div className="  flex items-center gap-10 text-black text-sm">
                  <button
                    disabled={options.children <= 0}
                    className="   w-30 h-30 border-solid border-2 border-blue-500 text-blue-500 rounded-full cursor-pointer bg-white"
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
                    className="  w-30 h-30 border-solid border-2 border-blue-500 text-blue-500 rounded-full cursor-pointer bg-white"
                    onClick={() => handleOption("room", "d")}
                  >
                    -
                  </button>
                  <span className="Number">{options.room}</span>
                  <button
                    className="  w-30 h-30 border-solid border-2 border-blue-500 text-blue-500 rounded-full cursor-pointer bg-white"
                    onClick={() => handleOption("room", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className=" flex item-center gap-2.5">
          <button className="headerBtn">Search</button>
        </div>
      </div>
    </>
  );
}

export default CalendarSearch;
