import React, { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import RootLayout from "./components/RootLayout";

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export { router };
