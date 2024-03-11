import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import skincareBanner from "../../assets/Hot-Deals/SkinCareBanner.png";
import skincareBanner2 from "../../assets/Hot-Deals/SkincareBanner2.png";

const HotDealsBanner = () => {
  return (
    <Box my={4} px={4}>
      <Grid container>
        <Grid item md={6} width={'100%'}>
          <Box display={"flex"} justifyContent={{xs:'end',md:"center"}} width={'100%'}>
            <Box  width={{ xs: "90vw", sm: "60vw", md: "40vw" }}>
              <img src={skincareBanner} alt="" width={"100%"} />
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
                px={{xs:4,md:6}}
                pl={{xs:0,md:6}}
              >
                <Typography
                  variant="h4"
                  textAlign={"right"}
                  color={"#FF6C86"}
                  fontSize={ { xs: "1.25rem", md: "2rem" }}
                  mb={2}
                >
                  Shills Exclusive
                </Typography>
                <Typography
                  variant="h4"
                  textAlign={"right"}
                  color={"#2D2C2C"}
                  fontSize={ { xs: "1.25rem", md: "2rem" }}
                >
                  Skin Care Range
                </Typography>
                <Typography
                  variant="h4"
                  textAlign={"right"}
                  color={"#858D97"}
                  fontSize={ { xs: ".75rem", md: "1rem" }}
                  width={{xs:"100%",sm:"75%"}}
                  lineHeight={ { xs: "18px", md: "30px" }}
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
                    width: { xs: "70%", sm: "30%" },
                    bgcolor: "transparent",
                    borderRadius: "50px",
                    color: "#FF6C86",
                    fontSize:  { xs: ".85rem", md: "1rem" },
                    textTransform: "capitalize",
                    px: 0,
                    py:  { xs: 1, md: 2 },
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
            <Box display={"flex"} justifyContent={"end"}>
              <Box  width={{ xs: "90vw", sm: "80vw", md: "40vw" }} >
                <img src={skincareBanner2} alt="" width={"100%"} />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HotDealsBanner;
