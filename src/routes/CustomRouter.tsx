import React from "react";
import { useRoutes } from "react-router-dom";

import { UrlConstants } from "@/constants/UrlConstants"

import Home from "@/pages/home"
import HomeDetail from "@/pages/homeDetail"

import PAGE404 from "@/components/Errors/Page404"
import PAGE401 from "@/components/Errors/Page401"

const CustomRouter = () => {
  const routes = useRoutes([
    { path: UrlConstants.ROOT, element: <Home /> },
    { path: UrlConstants.HOME_PATH, element: <Home /> },
    { path: UrlConstants.HOME_DETAIL_PATH, element: <HomeDetail /> },
    { path: UrlConstants.ERRORS.NotFound, element: <PAGE404 /> },
    { path: UrlConstants.ERRORS.Unauthorized, element: <PAGE401 /> },
    // ...
  ]);

  return routes;
};

export default CustomRouter
