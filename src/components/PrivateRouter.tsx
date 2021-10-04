import React from "react";
import { useSelector } from "react-redux";
import { Route, RouteProps } from "react-router";
import { Login } from "../pages/admin";
import { AppState } from "../stores/stores";

export function PrivateRouter({ children }: RouteProps) {
  const authState = useSelector((state: AppState) => state.auth);
  const { token } = authState;
  return <Route render={() => (!!token ? children : <Login />)} />;
}
