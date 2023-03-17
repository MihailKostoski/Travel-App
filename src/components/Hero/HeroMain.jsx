import React from "react";
import cover from "../../resources/cover.jpg";
import SearchBar from "../SearchBar/SearchBar";

function HeroMain() {
  return (
    <div className=" relative flex justify-center items-center w-screen  h-[380px]">
      <SearchBar />
      <img src={cover} className="w-3/5 h-full border " />
    </div>
  );
}

export default HeroMain;
//--page-margin: 24px;
//--grid-spacing: 16px;
