
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forum from "./forum";
import Messages from "./messages";



export default function App() {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Forum />} />
      <Route path="/messages" element={<Messages />} />
    </Routes>
  </BrowserRouter>
  );

  
}
