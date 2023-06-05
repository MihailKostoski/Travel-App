import {
  Restaurants,
  Home,
  Hotels,
  Tourism,
  VacationRentals,
} from "./Pages/pagesIndex";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TravelProvider } from "./context";
import SingleHotelReview from "./Pages/Hotels/Single/SingleHotelReview";
import SingleRentals from "./Pages/VacationRentals/SingleRentals/SingleRentals";
function App() {
  return (
    <TravelProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/hotels/:hotelId" element={<Hotels />} />
          <Route path="/restaurants/:restaurantId" element={<Restaurants />} />
          <Route
            path="/hotelReview/:reviewId"
            element={<SingleHotelReview />}
          />
          <Route path="/rentalsReview/:reviewId" element={<SingleRentals />} />
          <Route
            path="/vacationRentals/:vacationId"
            element={<VacationRentals />}
          />
          <Route path="/tourism/:tourismId" element={<Tourism />} />
        </Routes>
      </BrowserRouter>
    </TravelProvider>
  );
}

export default App;
