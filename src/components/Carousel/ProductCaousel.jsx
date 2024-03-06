import { Box, Typography } from "@mui/material";
import React from "react";
import { CustomCarousel } from "./CustomCarousel";
import ProductCards from "../Cards/ProductCards";
import { ReviewsCarousel } from "./ReviewsCarousel";

const ProductCaousel = ({ title }) => {
  return (
    <Box my={6}>
      <Typography
        variant="h5"
        mx={4}
        sx={{ fontSize: {xs:"1.2rem",md:"1.5rem"}, lineHeight: "36px", color: "#2D2C2C" }}
      >
        {title}
      </Typography>
      <Box pl={2}>
        <CustomCarousel items={{ lg: 5, md: 4, sm: 3, xs: 2 }}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((dt) => (
            <Box key={dt}>
              <ProductCards />
            </Box>
          ))}
        </CustomCarousel>
      </Box>
      
      {/* <Box pl={2} position={'relative'} py={12}>
        <ReviewsCarousel items={{ lg: 5, md: 4, sm: 2, xs: 1 }}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((dt) => (
            <Box key={dt}>
              <ProductCards />
            </Box>
          ))}
        </ReviewsCarousel>
      </Box> */}
    </Box>
  );
};

export default ProductCaousel;
