import React from "react";
import { useRoutes } from "react-router-dom";

import PAGE404 from "@/components/Errors/Page404"
import PAGE401 from "@/components/Errors/Page401"

const CustomRouter = () => {
  const routes = useRoutes([
    { path: "/404", element: <PAGE404 /> },
    { path: "/401", element: <PAGE401 /> },
    // ...
  ]);

  return routes;
};

export default CustomRouter
