
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forum from "./forum";
import Offers from "./offers";
import MyListings from "./mylistings"


export default function App() {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Forum />} />
      <Route path = "/mylistings" element = {<MyListings />} />
      <Route path = "/offers" element = {<Offers />} />
    </Routes>
  </BrowserRouter>
  );

  
}
