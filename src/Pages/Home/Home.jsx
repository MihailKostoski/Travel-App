import React from "react";
import bgCover from "../../resources/main.jpg";
import {
  Tabs,
  Navbar,
  HeroMain,
  Destinations,
} from "../../components/componentsIndex";

function Home() {
  return (
    <>
      <div className="">
        <Navbar className="" />
        <Tabs className="" />
        <HeroMain className="relative" />
        <img src={bgCover} className="relative bottom-[64px] w-screen px-40 " />
      </div>
    </>
  );
}

export default Home;
