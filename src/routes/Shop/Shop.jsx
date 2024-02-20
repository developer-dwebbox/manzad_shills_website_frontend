import { Box } from "@mui/material";
import React, { useState } from "react";
import SubCategory from "./SubCategory";
import ProductListing from "./ProductListing";

const Shop = () => {
  return (
    <Box>
      <SubCategory />
      <ProductListing/>
    </Box>
  );
};

export default Shop;
