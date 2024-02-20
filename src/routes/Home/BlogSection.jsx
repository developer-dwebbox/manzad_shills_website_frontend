import { Box, Typography } from "@mui/material";
import React from "react";
import { CustomCarousel } from "../../components/Carousel/CustomCarousel";
import BlogCards from "../../components/Cards/BlogCards";

const BlogSection = () => {
  return (
    <Box my={6}>
      <Box>
        <Typography
          variant="h4"
          mx={4}
          sx={{
            fontSize: "2rem",
            lineHeight: "36px",
            color: "#2D2C2C",
            textAlign: "center",
          }}
        >
          Blog
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          {[0, 1, 2].map((dt) => (
            <Box key={dt} maxWidth={350} minWidth={270}>
              <BlogCards />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default BlogSection;
