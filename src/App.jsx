
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forum from "./forum";



export default function App() {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Forum />} />
    </Routes>
  </BrowserRouter>
  );

  
}
