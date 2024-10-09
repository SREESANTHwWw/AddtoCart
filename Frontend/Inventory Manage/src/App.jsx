import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductFrom, Navbar } from "./Router/router";
import { Home } from "./Pages/Home";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element ={<Home />} />
          <Route path="/additem" element={<ProductFrom />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
