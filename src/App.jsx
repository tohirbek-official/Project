import React from "react";
import { Route, Routes } from "react-router-dom";
import { Contact, Home, MainLayout, Shopping } from "./components";
import { Found } from "./components/404-found/found";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="Shopping" element={<Shopping />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="*" element={<Found />} />
      </Route>
    </Routes>
  );
};

export default App;
