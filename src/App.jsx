import { Restaurants, Home, Hotels, Tourism } from "./Pages/pagesIndex";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/hotels/:hotelId" element={<Hotels />} />
        <Route path="/restaurants/:restaurantId" element={<Restaurants />} />
        <Route path="/tourism/:tourismId" element={<Tourism />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
