import React, { lazy } from "react";
import FallbackLoader from "../components/FallbackLoader";

const HomeRoutes = lazy(() => import('./Home/Home'));
const HOtDealsRoutes = lazy(() => import('./HotDeals/HotDeals'));
const AboutRoute = lazy(() => import('./About/About'));
const CartRoute = lazy(() => import('./Cart/Cart'));
const ProfileRoute = lazy(() => import('./Profile/Profile'));
const CheckoutRoute = lazy(() => import('./Checkout/Checkout'));
const SearchRoute = lazy(() => import('./Search/Search'));
const ShopRoute = lazy(() => import('./Shop/Shop'));
const ProductDetailsRoute = lazy(() => import('./ProductDetails/ProductDetails'));
const WishListRoute = lazy(() => import('./WishList/WishList'));
const LoginRoute = lazy(() => import("./Login/Login"));
const RegisterRoute = lazy(() => import("./Register/Register"));

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
    hotDeals: {
        key:"hotDeals",
        paths: ['/hot-deals'],
        element:<HOtDealsRoutes/>,
        protected:true,
        docTitle: "Hot Deals Page",
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
    shop: {
        key:"shop",
        paths: ['/shop'],
        element:<ShopRoute/>,
        protected:true,
        docTitle: "Shop Page",
        suspense :true,
        fallback:<FallbackLoader/>,
    },
    search: {
        key:"search",
        paths: ['/search'],
        element:<SearchRoute/>,
        protected:true,
        docTitle: "Search Page",
        suspense :true,
        fallback:<FallbackLoader/>,
    },
    productDetails: {
        key:"productDetails",
        paths: ['/productDetails'],
        element:<ProductDetailsRoute/>,
        protected:true,
        docTitle: "Product Details Page",
        suspense :true,
        fallback:<FallbackLoader/>,
    },
    wishList: {
        key:"wishList",
        paths: ['/wishList'],
        element:<WishListRoute/>,
        protected:true,
        docTitle: "WishList Page",
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
    register: {
        key: "register",
        paths: ["/register"],
        element: <RegisterRoute />,
        protected: false,
        docTitle: "Register Page",
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
    checkout: {
        key: "checkout",
        paths: ["/checkout"],
        element: <CheckoutRoute />,
        protected: true,
        docTitle: "Checkout Page",
        suspense: true,
        fallback: <FallbackLoader />,
      },
    profile: {
        key: "profile",
        paths: ["/profile"],
        element: <ProfileRoute />,
        protected: true,
        docTitle: "Profile Page",
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