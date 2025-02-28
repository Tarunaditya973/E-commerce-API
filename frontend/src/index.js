import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppRouter from "./router-config";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppRouter>
      <App />
    </AppRouter>
  </React.StrictMode>
);
