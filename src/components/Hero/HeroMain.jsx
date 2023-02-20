import React from "react";
import cover from "../../resources/cover.jpg";
import SearchBar from "../SearchBar/SearchBar";

function HeroMain() {
  return (
    <div className="relative">
      <SearchBar />
      <img src={cover} className=" object-cover" />
    </div>
  );
}

export default HeroMain;
