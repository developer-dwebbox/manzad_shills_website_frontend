import React from "react";
import { useNavigate } from "react-router-dom";
import { DashboardRoute } from "../routes";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
    </div>
  );
};

export default Home