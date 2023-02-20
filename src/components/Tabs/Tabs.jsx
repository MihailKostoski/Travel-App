import React from "react";

function Tabs() {
  return (
    <>
      <div className="flex flex-row flex-nowrap overflow-x-auto gap-x-8 justify-center  mt-4 ">
        <div className=" flex items-center justify-center border rounded   text-white w-20 h-14 ">
          01
        </div>
        <div className=" flex items-center justify-center border rounded text-center text-whitebg-black text-white w-20">
          02
        </div>
        <div className=" flex items-center justify-center  border rounded text-center text-whitebg-black text-white w-20">
          03
        </div>
        <div className=" flex items-center justify-center  border rounded text-center text-whitebg-black text-white w-20">
          03
        </div>
        <div className=" flex items-center justify-center border rounded text-center text-whitebg-black text-white w-20">
          03
        </div>
        <div className="  flex items-center justify-center border rounded text-center text-whitebg-black text-white w-20">
          03
        </div>
      </div>
    </>
  );
}

export default Tabs;
