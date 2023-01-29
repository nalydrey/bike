import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./components/Router/Router";
import { RouterProvider } from "react-router-dom";
import "./style/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
