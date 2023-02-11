import React from "react";
import { Route, Routes } from "react-router-dom";
const StartPage = React.lazy(() => import("./pages/StartPage/StartPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
    </Routes>
  );
}

export default React.memo(App);
