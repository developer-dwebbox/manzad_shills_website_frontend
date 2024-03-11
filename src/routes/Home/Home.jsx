import React from "react";
import { CustomCarousel } from "../../components/Carousel/CustomCarousel";
import { Box } from "@mui/material";
import HeroSection from "./HeroSection";
import SubcategorySection from "./SubcategorySection";
import ProductCaousel from "../../components/Carousel/ProductCaousel";
import Banner from "./Banner";
import Banner2 from "./Banner2";
import BlogSection from "./BlogSection";
import Services from "./Services";
import Review from "./Review";


const Home = () => {
  return (
    <Box>
      <Box display={{ md: "block", xs: "none" }}>
        <HeroSection />
      </Box>
      <SubcategorySection />
      <ProductCaousel title="New Arrivals" />
      {/* <Banner /> */}
      <ProductCaousel title="Best Sellers" />
      {/* <Banner2 /> */}
      <ProductCaousel title="Last Viewed" />
      <Services />
      <Review/>
      <BlogSection />
    </Box>
  );
};

export default Home;
