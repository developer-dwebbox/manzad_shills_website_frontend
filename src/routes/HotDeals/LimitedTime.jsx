import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import LimitedTimeBg from "../../assets/Hot-Deals/LimitedTimeBG.png";
import SaleBanner from "../../assets/Hot-Deals/SaleBanner.png";

const LimitedTime = () => {
  return (
    <Box my={6}>
      <Box
        height={"70vh"}
        sx={{
          background: `url(${LimitedTimeBg})`,
          backgroundSize: "cover",
          p: 3,
        }}
      >
        <Grid container height={"100%"}>
          <Grid item md={6} height={"100%"}>
            <Box
              display={"flex"}
              alignItems={"center"}
              height={"100%"}
              justifyContent={"center"}
            >
              <Box>
                <Typography
                  variant="h2"
                  sx={{ color: "#2D2C2C", fontSize: "2.75rem" }}
                >
                  {" "}
                  <p style={{ color: "#FF6C86" }}> Hurry!! </p> Limited Time
                  Offer
                </Typography>
                <Typography
                  width={"60%"}
                  variant="h5"
                  sx={{
                    color: "#858D97",
                    fontSize: "1.175rem",
                    lineHeight: "40px",
                    my:1,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </Typography>
                <Box display={"flex"} gap={1} my={1}>
                  {[0,1,2].map(dt=>(
                    <Box
                    p={1}
                    sx={{
                      background: "#fff",
                      borderRadius: 1,
                    }}
                  >
                    <Typography
                      variant="h4"
                      fontFamily={"digital-7"}
                      className="clock"
                      fontSize={"4rem"}
                      letterSpacing={"8px"}
                    >
                      00
                    </Typography>
                  </Box>
                  ))}
                </Box>
                <Button
                  variant="contained"
                  sx={{
                    mt: 4,
                    width: { xs: "50%", sm: "30%" },
                    bgcolor: "transparent",
                    borderRadius: "50px",
                    color: "#FF6C86",
                    fontSize: "1rem",
                    textTransform: "capitalize",
                    px: 0,
                    py: 2,
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
          </Grid>
          <Grid item md={6} height={"100%"}>
            <Box
              height={"100%"}
              display={"flex"}
              justifyContent={"center"}
              borderRadius={2}
            >
              <img src={SaleBanner} alt="" height={"100%"} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default LimitedTime;
