import {
  Restaurants,
  Home,
  Hotels,
  Tourism,
  VacationRentals,
} from "./Pages/pagesIndex";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShopProvider } from "./context";
import SingleHotelReview from "./Pages/Hotels/Single/SingleHotelReview";
function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/hotels/:hotelId" element={<Hotels />} />
          <Route path="/restaurants/:restaurantId" element={<Restaurants />} />
          <Route
            path="/hotelReview/:reviewId"
            element={<SingleHotelReview />}
          />
          <Route
            path="/vacationRentals/:vacationId"
            element={<VacationRentals />}
          />
          <Route path="/tourism/:tourismId" element={<Tourism />} />
        </Routes>
      </BrowserRouter>
    </ShopProvider>
  );
}

export default App;
