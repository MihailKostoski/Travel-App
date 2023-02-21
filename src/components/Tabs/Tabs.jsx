import React from "react";

function Tabs() {
  return (
    <>
      <div className="flex  max-w-full flex-row flex-nowrap overflow-x-auto gap-x-8 justify-center  m-7">
        <div className=" flex items-center  hover:bg-blueB hover:text-white justify-center border rounded    w-20 h-14 ">
          01
        </div>
        <div className=" flex items-center  hover:bg-blueB hover:text-white justify-center border rounded text-center  w-20">
          02
        </div>
        <div className=" flex items-center hover:bg-blueB  hover:text-white justify-center  border rounded text-center   w-20">
          03
        </div>
        <div className=" flex items-center hover:bg-blueB hover:text-white justify-center  border rounded text-center   w-20">
          03
        </div>
        <div className=" flex items-center hover:bg-blueB hover:text-white justify-center border rounded text-center   w-20">
          03
        </div>
        <div className="  flex items-center hover:bg-blueB hover:text-white justify-center border rounded text-center   w-20">
          03
        </div>
      </div>
    </>
  );
}

export default Tabs;
