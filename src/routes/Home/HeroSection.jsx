import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import heroLeftBanner from ".././../assets/Home/heroLeftBanner.png";
import heroRightBanner from ".././../assets/Home/heroRightBanner.png";
import logo from "../../assets/Logo/LogoWOTagLine.png";

const HeroSection = () => {
  return (
    <Grid container height={"90vh"}>
      <Grid item md={4} height={"100%"}>
        <img src={heroLeftBanner} alt="" height={"100%"} width={"100%"} />
      </Grid>
      <Grid
        item
        md={4}
        bgcolor={"#FFEFF2"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          sx={{
            height: "70%",
            width: "90%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height:'100%'
            }}
          >
            <Typography variant="h6" color={"#2D2C2C"} textAlign={"center"}>
              Best Prices
            </Typography>
            <Box display={"flex"} justifyContent={"center"}>
              <img src={logo} alt="" height={40} />
            </Box>
            <Box>
              <Typography
                variant="h6"
                color={"#FF6C86"}
                textAlign={"center"}
                lineHeight={"60px"}
                fontSize={"2rem"}
              >
                Redefine your Beauty with Shills Cosmetics
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h6"
                color={"#858D97"}
                textAlign={"center"}
                lineHeight={"37px"}
                fontSize={"1.12rem"}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </Box>
            <Box display={"flex"} justifyContent={"center"}>
              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  width: "50%",
                  bgcolor: "transparent",
                  borderRadius: "50px",
                  color: "#FF6C86",
                  fontSize: "1.3rem",
                  textTransform: "capitalize",
                  px: 1,
                  py: 2,
                  boxShadow: "none",
                  border: "2px solid #FF6C86",
                  ":hover": {
                    bgcolor: "transparent",
                    boxShadow: "none",
                  },
                }}
              >
                Explore
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item md={4} height={"100%"}>
        <img src={heroRightBanner} alt="" height={"100%"} width={"100%"} />
      </Grid>
    </Grid>
  );
};

export default HeroSection;
