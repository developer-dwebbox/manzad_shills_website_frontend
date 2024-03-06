import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import LimitedTimeBg from "../../assets/Hot-Deals/LimitedTimeBG.png";
import SaleBanner from "../../assets/Hot-Deals/SaleBanner.png";

const LimitedTime = () => {
  return (
    <Box my={6}>
      <Box
        minHeight={"70vh"}
        sx={{
          background: `url(${LimitedTimeBg})`,
          backgroundSize: "cover",
          p: 3,
        }}
      >
        <Grid
          container
          height={"100%"}
          display={"flex"}
          flexDirection={{ xs: "column-reverse", md: "row" }}
        >
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
                  sx={{
                    color: "#2D2C2C",
                    fontSize: { xs: "2rem", md: "2.75rem" },
                  }}
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
                    fontSize: { xs: "1rem", md: "1.75rem" },
                    lineHeight: { xs: "25px", md: "40px" },
                    my: 1,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </Typography>
                <Box display={"flex"} gap={1} my={1}>
                  {[0, 1, 2].map((dt) => (
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
                        fontSize={ {xs: "2rem", md: "4rem"} }
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
                    width: { xs: "45%", sm: "30%" },
                    bgcolor: "transparent",
                    borderRadius: "50px",
                    color: "#FF6C86",
                    fontSize: { xs: ".85rem", md: "1rem" },
                    textTransform: "capitalize",
                    px: 0,
                    py: {xs:1,md:2},
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
          <Grid
            item
            md={6}
            height={"100%"}
            display={"flex"}
            justifyContent={"center"}
          >
            <Box
              width={{ xs: "90vw", sm: "80vw", md: "40vw" }}
              borderRadius={2}
              mb={{ xs: 2, md: 0 }}
            >
              <img src={SaleBanner} alt="" width={"100%"} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default LimitedTime;
