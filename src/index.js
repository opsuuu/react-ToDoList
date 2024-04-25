import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home />
    <Toaster />
  </React.StrictMode>
);
