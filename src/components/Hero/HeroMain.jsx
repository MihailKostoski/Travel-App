import React from "react";
import cover from "../../resources/cover.jpg";
import SearchBar from "../SearchBar/SearchBar";

function HeroMain() {
  return (
    <div className="relative max-w-full mx-16 my-7 h-[380px]">
      <SearchBar />
      {/* <img src={cover} className="w-full h-full" /> */}
    </div>
  );
}

export default HeroMain;
//--page-margin: 24px;
//--grid-spacing: 16px;
