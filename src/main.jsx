import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Pets from "./components/Pets.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/pets", element: <Pets /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
