import React from "react";
import { Route, Routes } from "react-router-dom";
const StartPage = React.lazy(() => import("./pages/StartPage/StartPage"));
const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"));
const NotFound = React.lazy(() => import("./pages/NotFound/NotFound"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default React.memo(App);
