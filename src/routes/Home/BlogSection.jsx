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
          sx={
            {
              // display: "flex",
              // justifyContent: "space-evenly",
              // flexWrap: "wrap",
            }
          }
        >
          <CustomCarousel items={{ lg: 3, md: 3, sm: 3, xs: 2 }}>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((dt) => (
              <Box key={dt} display={"flex"} justifyContent={"center"}>
                <BlogCards />
              </Box>
            ))}
          </CustomCarousel>
        </Box>
      </Box>
    </Box>
  );
};

export default BlogSection;
