import { Box, Typography } from "@mui/material";
import React from "react";
import heroBanner from "../../assets/Hot-Deals/HotDealsBanner.png";
import ProductCaousel from "../../components/Carousel/ProductCaousel";
import LimitedTime from "./LimitedTime";
import HotDealsBanner from "./HotDealsBanner";
import BeautyNeedsBanner from "./BeautyNeedsBanner";

const HotDeals = () => {
  return (
    <Box>
      <Box height={"80vh"} px={2}>
        <img src={heroBanner} alt="" height={"100%"} width={"100%"} />
      </Box>
      <ProductCaousel title="Nail Art" />
      <LimitedTime />
      <ProductCaousel title="Makeup" />
      <HotDealsBanner/>
      <Typography
        variant="h4"
        sx={{ fontSize: { xs: "1.25rem", md: "2rem" } }}
        px={4}
      >
        Wide Range of <span style={{ color: "#FF6C86" }}> Hair Appliances</span>
      </Typography>
      <ProductCaousel />
      <BeautyNeedsBanner />
    </Box>
  );
};

export default HotDeals;
