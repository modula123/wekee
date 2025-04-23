import React from "react";
import "./App.css";

import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./component/Layout";
import Homepage from "./pages/Homepage";

import PageTracker from './hooks/usePageTracking'

const App = () => {
  return (
    <>
      <Analytics />
      <BrowserRouter>
        <PageTracker /> 
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
