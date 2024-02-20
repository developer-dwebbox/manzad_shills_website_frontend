import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import skincareBanner from "../../assets/Hot-Deals/SkinCareBanner.png";
import skincareBanner2 from "../../assets/Hot-Deals/SkincareBanner2.png";

const HotDealsBanner = () => {
  return (
    <Box my={4} px={4}>
      <Grid container>
        <Grid item md={6}>
          <Box display={"flex"} justifyContent={"center"}>
            <Box height={"100vh"}>
              <img src={skincareBanner} alt="" height={"100%"} />
            </Box>
          </Box>
        </Grid>
        <Grid item md={6}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            height={"100%"}
          >
            <Box>
              <Box
                display={"flex"}
                alignItems={"end"}
                flexDirection={"column"}
                px={6}
              >
                <Typography
                  variant="h4"
                  textAlign={"right"}
                  color={"#FF6C86"}
                  fontSize={"2rem"}
                >
                  Shills Exclusive
                </Typography>
                <Typography
                  variant="h4"
                  textAlign={"right"}
                  color={"#2D2C2C"}
                  fontSize={"2rem"}
                >
                  Skin Care Range
                </Typography>
                <Typography
                  variant="h4"
                  textAlign={"right"}
                  color={"#858D97"}
                  fontSize={"1rem"}
                  width={"70%"}
                  lineHeight={"30px"}
                  mt={4}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim
                </Typography>
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
            <Box>
              <Box height={"60vh"} display={"flex"} justifyContent={"end"}>
                <img src={skincareBanner2} alt="" height={"100%"} />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HotDealsBanner;
