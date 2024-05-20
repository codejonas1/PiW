import { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import Layout from "./pages/Layout";
import BrowseHotels from "./pages/BrowseHotels";
import HotelPage from "./pages/HotelPage";

import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/browseHotels" element={<BrowseHotels />} />
          <Route path="/hotelPage" element={<HotelPage />} />
          <Route path="#rent" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

