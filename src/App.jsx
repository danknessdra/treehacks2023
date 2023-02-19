
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forum from "./forum";
import Messages from "./messages";
import Offers from "./offers";



export default function App() {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Forum />} />
      <Route path="/messages" element={<Messages />} />
      <Route path = "/offers" element = {<Offers />} />
    </Routes>
  </BrowserRouter>
  );

  
}
