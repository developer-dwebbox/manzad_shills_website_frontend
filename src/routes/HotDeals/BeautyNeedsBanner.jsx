import { Box, Button, Typography } from "@mui/material";
import React from "react";

const BeautyNeedsBanner = () => {
  return (
    <Box bgcolor={"#FFE9ED"}>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        py={6}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "1.25rem", md: "2rem" },
              textAlign: "center",
              color: "#FF6C86",
            }}
          >
            One-Stop-Shop
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "1.25rem", md: "2rem" },
              textAlign: "center",
              color: "#2D2C2C",
            }}
          >
            for all your Beauty Needs.
          </Typography>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            my={2}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: ".85rem", md: "1.2rem" },
                textAlign: "center",
                color: "#858D97",
                width: { xs: "90%", sm: "70%" ,md:'60%'},
                lineHeight: {xs:'20px', md: "25px" },
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                width: { xs: "40%", sm: "20%" },
                bgcolor: "transparent",
                borderRadius: "50px",
                color: "#FF6C86",
                fontSize: { xs: ".85rem", md: "1rem" },
                textTransform: "capitalize",
                px: 0,
                py: { xs: 1, sm: 2 },
                boxShadow: "none",
                border: "2px solid #FF6C86",
                ":hover": {
                  bgcolor: "transparent",
                  boxShadow: "none",
                },
              }}
            >
              Shop Now
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BeautyNeedsBanner;
