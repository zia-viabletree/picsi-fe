import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  ACCESS_TYPES,
  DASHBOARD_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  PRICE_PLAN,
} from "../constants";
import Helmet from "react-helmet";
import {
  PrivateRoute,
  PublicRoute,
  AuthRoute,
} from "../config/routes-handling";
import { Dashboard, Error, Home, Login, PricePlan } from "../modules";

const renderRouteSharedLayout = (title, description, access, component) => (
  <React.Fragment>
    <Helmet>
      <title>{title ? `${title} |` : ""} Picsi</title>
      {description && <meta name="description" content={description} />}
    </Helmet>
    {access === ACCESS_TYPES.AUTH ? (
      <AuthRoute> {component}</AuthRoute>
    ) : access === ACCESS_TYPES.PRIVATE ? (
      <PrivateRoute>{component}</PrivateRoute>
    ) : (
      <PublicRoute>{component}</PublicRoute>
    )}
  </React.Fragment>
);

const PageRoutes = () => {
  // CONST VALS
  const location = useLocation();

  const ROUTES = [
    // PUBLIC ROUTES
    {
      route: HOME_ROUTE,
      title: "Home",
      description: "",
      access: ACCESS_TYPES.PUBLIC,
      component: <Home />,
    },
    {
      route: PRICE_PLAN,
      title: "Price Plan",
      description: "",
      access: ACCESS_TYPES.PUBLIC,
      component: <PricePlan />,
    },
    // AUTH ROUTES
    {
      route: LOGIN_ROUTE,
      title: "Login",
      description: "",
      access: ACCESS_TYPES.AUTH,
      component: <Login />,
    },
    // PRIVATE ROUTE
    {
      route: DASHBOARD_ROUTE,
      title: "Dashboard",
      description: "",
      access: ACCESS_TYPES.PRIVATE,
      component: <Dashboard />,
    },
  ];

  // HOOKS
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Routes>
        {ROUTES.map((item, index) => (
          <Route
            path={item.route}
            element={renderRouteSharedLayout(
              item.title,
              item.description,
              item.access,
              item.component
            )}
            key={index}
          />
        ))}
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default PageRoutes;
