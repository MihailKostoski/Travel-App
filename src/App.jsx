import { Home, Hotels } from "./Pages/pagesIndex";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
