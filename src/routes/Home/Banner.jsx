import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import NailArtImage from "../../assets/Home/NailArtBanner.png";

const Banner = () => {
  return (
    <Grid container my={6}>
      <Grid item md={6} xs={12} px={{ xs: 1, md: 4 }}>
        <Box px={{ xs: 1, sm: 4 }} my={4}>
          <Typography
            variant="h4"
            sx={{ color: "#2D2C2C", textAlign: { xs: "center", md: "start" } }}
          >
            Nail Art Supplies
          </Typography>
          <Box width={"100%"} my={4}>
            <Typography
              variant="h6"
              sx={{
                color: "#858D97",
                fontWeight: "400",
                fontSize: "1rem",
                textAlign: { xs: "center", md: "start" },
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "start" },
              }}
            >
              <Button
                variant="contained"
                sx={{
                  mt: 4,
                  width: { xs: "70%", sm: "30%" },
                  bgcolor: "transparent",
                  borderRadius: "50px",
                  color: "#FF6C86",
                  fontSize: "1rem",
                  textTransform: "capitalize",
                  px: 0,
                  py: 1,
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
      <Grid
        item
        md={6}
        xs={12}
        display={"flex"}
        justifyContent={"center"}
        alignItems={{ xs: "center", md: "end" }}
        px={4}
      >
        <Box sx={{ width: { xs: 350, sm: 400, md: 500 } }}>
          <img src={NailArtImage} alt="" width={"100%"} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Banner;
