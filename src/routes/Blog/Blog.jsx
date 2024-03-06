import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import BlogCards from "../../components/Cards/BlogCards";

const Blog = () => {
  return (
    <Box mb={4}>
      <Box
        bgcolor={"#FFE9ED"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box py={{ xs: 2, md: 4 }}>
          <Typography
            variant="h4"
            sx={{ fontSize: { xs: "1rem", md: "1.45rem" }, fontWeight: "400" }}
          >
            Blog
          </Typography>
        </Box>
      </Box>
      <Grid container my={4} px={{ xs: 2, md: 4 }}>
        <Grid item md={8} xs={12}>
          <Box display={"flex"} justifyContent={"center"} flexWrap={"wrap"}>
            {[0, 1, 2, 3, 4, 5].map((data) => (
              <Box
                width={300}
                mx={1}
                display={"flex"}
                flex={1}
                justifyContent={"center"}
              >
                <BlogCards />
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item md={4} xs={12} px={{ xs: 0, md: 4 }} pt={4}>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: ".95rem", sm: "1.1rem", md: "1.35rem" },
              fontWeight: "400",
              color: "#FF6C86",
              mb: 2,
            }}
          >
            Categories
          </Typography>
          {categories.map((category) => (
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: ".85rem", sm: "1rem", md: "1.2rem" },
                fontWeight: "400",
                color: "#2D2C2C",
                mb: 2,
              }}
            >
              {category.name}
            </Typography>
          ))}

          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: ".95rem", sm: "1.1rem", md: "1.35rem" },
              fontWeight: "400",
              color: "#FF6C86",
              my: 4,
            }}
          >
            Recent Posts
          </Typography>
          {recentposts.map((post,id) => (
            <Box sx={{borderBottom:`${recentposts.length-1===id?'':'1px solid #EBEDF2'}`}} mb={2}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: ".85rem", sm: "1rem", md: "1.2rem" },
                  fontWeight: "400",
                  color: "#2D2C2C",
                  mb: 2,
                }}
              >
                {post.title}
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: ".8rem", sm: ".9rem", md: "1rem" },
                  fontWeight: "400",
                  color: "#858D97",
                  mb: 2,
                }}
              >
                {post.date} {post.comment}
              </Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Blog;

const categories = [
  {
    name: "Hair Care",
  },
  {
    name: "Makeup",
  },
  {
    name: "Nail Art",
  },
  {
    name: "Skin Care",
  },
];

const recentposts = [
  {
    title: "Shills Professional Vitamin-C Face Serum",
    date: "April 1, 2023",
    comment: " No Comments",
  },
  {
    title: "Shills Professional Straightening Cream",
    date: "April 1, 2023",
    comment: " No Comments",
  },
  {
    title: "Shills Professional Matte Liquid Lipstick",
    date: "April 1, 2023",
    comment: " No Comments",
  },
];
