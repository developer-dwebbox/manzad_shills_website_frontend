import React from "react";
import { useNavigate } from "react-router-dom";
import { UnProtectedRoute } from "../routes";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      Home Page
      <button
        onClick={() => {
          navigate(UnProtectedRoute.about.paths[0]);
        }}
      >
        About
      </button>
    </div>
  );
};

export default Home