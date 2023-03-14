import React from "react";

import {
  Tabs,
  Navbar,
  HeroMain,
  Destinations,
} from "../../components/componentsIndex";
import { ShopProvider } from "../../context";
function Home() {
  return (
    <>
      <ShopProvider>
        <Navbar />
        <Tabs />
        <HeroMain />
        <Destinations />
      </ShopProvider>
    </>
  );
}

export default Home;
