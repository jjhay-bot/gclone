import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import App from "./App";
import { ResultPage } from "./components/resultPage/ResultPage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}/>  
      <Route path="result" element={<ResultPage />} />
    </Routes>
  );
};
