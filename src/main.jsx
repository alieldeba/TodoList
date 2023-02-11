import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import Loader from "./components/Loader";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <React.Suspense fallback={<Loader />}>
        <Provider store={store}>
          <App />
        </Provider>
      </React.Suspense>
    </Router>
  </React.StrictMode>
);
