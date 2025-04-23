import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import usePageTracking from "./hooks/usePageTracking";

import Layout from "./component/Layout";
import Homepage from "./pages/Homepage";

const App = () => {
  usePageTracking();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="*" element={<Homepage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
