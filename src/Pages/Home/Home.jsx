import React from "react";

import {
  Tabs,
  Navbar,
  HeroMain,
  Destinations,
} from "../../components/componentsIndex";

function Home() {
  return (
    <>
      <div classNames="">
        <Navbar />
        <Tabs />
        <HeroMain />
      </div>
    </>
  );
}

export default Home;
