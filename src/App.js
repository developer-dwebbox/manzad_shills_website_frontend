import React from "react";
import "./App.css";

import { Suspense } from "react";
import { Routes, Route, useLocation, Outlet, Navigate } from "react-router-dom";
import {
  ProtectedRouteList,
  UnProtectedRouteList,
} from "./routes/routes";
import OutletComponent from "./components/OutletComponent";
import { useSelector } from "react-redux";
import PageNotFound from "./components/PageNotFound";
import { ThemeProvider} from "@mui/material/styles";
import muiTheme from "./theme/theme";

function App() {
  const location = useLocation();
  return (
    <div>
      <ThemeProvider theme={muiTheme}>
      <AuthRoutes />
      {ProtectedRouteList.find(
        (dt) => dt[1].paths[0].split("/")[1] === location.pathname.split("/")[1]
      ) ? null : (
        <UnAuthRoutes />
      )}
      </ThemeProvider>
    </div>
  );
}

const UnAuthRoutes = ({ auth }) => {
  return (
    <Routes>
      <Route element={<OutletComponent />}>
        {UnProtectedRouteList.map((_route) => {
          const route = _route[1];
          const { key, paths, element, suspense, fallback } = route;
          return paths.map((_path) => {
            return (
              <Route
                key={key}
                path={_path}
                exact
                element={
                  suspense ? (
                    <Suspense {...{ fallback }}>{element}</Suspense>
                  ) : (
                    element
                  )
                }
              />
            );
          });
        })}
        <Route path="*" Component={PageNotFound} />
      </Route>
    </Routes>
  );
};

const AuthRoutes = ({ auth }) => {
  let location = useLocation();
  return (
    <Routes>
      <Route element={<OutletComponent />}>
        {ProtectedRouteList.map((_route) => {
          const route = _route[1];
          const { key, paths, element, suspense, fallback } = route;
          return paths.map((_path) => {
            return (
              <Route element={<ProtectedRoute />}>
                <Route
                  key={key}
                  path={_path}
                  exact
                  element={
                    suspense ? (
                      <Suspense {...{ fallback }}>{element}</Suspense>
                    ) : (
                      element
                    )
                  }
                />
              </Route>
            );
          });
        })}
      </Route>
    </Routes>
  );
};

const ProtectedRoute = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  let location = useLocation();
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};
export default App;
