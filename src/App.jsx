import React from "react";
import { Restaurants, Home, Hotels } from "./Pages/pagesIndex";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { TravelProvider } from "./context";
import SingleRestaurant from "./Pages/Restuarants/SingleRestaurant/SingleRestaurant";

const HotelsLazy = lazy(() => import("./Pages/Hotels/Hotels"));
const SingleHotelReview = lazy(() =>
  import("./Pages/Hotels/Single/SingleHotelReview")
);

function App() {
  return (
    <TravelProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route
            path="/hotels/:hotelId/:nameHotel"
            element={
              <Suspense
                fallback={
                  <div className="w-screee h-screen bg-black">Loading ...</div>
                }
              >
                <HotelsLazy />
              </Suspense>
            }
          />
          <Route
            path="/restaurants/:restaurantId/:restaurantName"
            element={<Restaurants />}
          />
          <Route
            path="/hotelReview/:reviewId"
            element={
              <Suspense>
                <SingleHotelReview
                  fallback={
                    <div className="w-screen h-screen bg-red-400">
                      Loafing...
                    </div>
                  }
                />
              </Suspense>
            }
          />
          <Route
            path="/restaurantReview/:reviewId"
            element={<SingleRestaurant />}
          />
        </Routes>
      </BrowserRouter>
    </TravelProvider>
  );
}

export default App;
