import { useState } from "react";
import { useMutation, useQuery } from "../convex/_generated/react";
import ReactDOM from "react-dom/client";
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
