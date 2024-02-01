import React, { lazy } from "react";
import FallbackLoader from "../components/FallbackLoader";

const HomeRoutes = lazy(() => import('./Home/Home'));
const AboutRoute = lazy(() => import('./About/About'));
const CartRoute = lazy(() => import('./Cart/Cart'));
const LoginRoute = lazy(() => import("./Login/Login"));

export const UnProtectedRoute = {
    home: {
        key:"home",
        paths: ['/','/home'],
        element:<HomeRoutes/>,
        protected:true,
        docTitle: "Home Page",
        suspense :true,
        fallback:<FallbackLoader/>,
    },
    about: {
        key:"about",
        paths: ['/about'],
        element:<AboutRoute/>,
        protected:true,
        docTitle: "About Page",
        suspense :true,
        fallback:<FallbackLoader/>,
    },
    login: {
        key: "login",
        paths: ["/login"],
        element: <LoginRoute />,
        protected: false,
        docTitle: "Login Page",
        suspense: true,
        fallback: <FallbackLoader />,
        // component: </>
      },
};
export const UnProtectedRouteList = Object.entries(UnProtectedRoute);

export const ProtectedRoute = {
    cart: {
        key: "cart",
        paths: ["/cart"],
        element: <CartRoute />,
        protected: true,
        docTitle: "Cart Page",
        suspense: true,
        fallback: <FallbackLoader />,
      },
};
export const ProtectedRouteList = Object.entries(ProtectedRoute);

const routes = {
    ...ProtectedRoute,
    ...UnProtectedRoute,
}
export const routesList = [...ProtectedRouteList, ...UnProtectedRouteList];

export default routes;