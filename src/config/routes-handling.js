import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DASHBOARD_ROUTE, LOGIN_ROUTE } from "../constants";
import {
  AuthSharedLayout,
  PrivateSharedLayout,
  PublicSharedLayout,
} from "../shared-layouts";

const PublicRoute = ({ children }) => {
  return <PublicSharedLayout>{children}</PublicSharedLayout>;
};

const PrivateRoute = ({ children }) => {
  // CONST VALS
  const navigate = useNavigate();

  // REDUX DATA
  const { isAuthenticated } = useSelector((state) => state.user);

  // HOOKS
  useEffect(() => {
    if (!isAuthenticated) {
      navigate(LOGIN_ROUTE);
    }
  }, [isAuthenticated]);

  return <PrivateSharedLayout>{children}</PrivateSharedLayout>;
};

const AuthRoute = ({ children }) => {
  // CONST VALS
  const navigate = useNavigate();

  // REDUX DATA
  const { isAuthenticated } = useSelector((state) => state.user);

  // HOOKS
  useEffect(() => {
    if (isAuthenticated) {
      navigate(DASHBOARD_ROUTE);
    }
  }, [isAuthenticated]);

  return <AuthSharedLayout>{children}</AuthSharedLayout>;
};

export { PublicRoute, PrivateRoute, AuthRoute };
