import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import NailArtImage from "../../assets/Home/NailArtBanner.png";

const Banner = () => {
  return (
    <Grid
      container
      my={6}
      display={"flex"}
      flexDirection={{ xs: "column-reverse", md: "row" }}
    >
      <Grid item md={6} xs={12} px={{ xs: 1, md: 4 }}>
        <Box px={{ xs: 1, sm: 4 }} my={4}>
          <Typography
            variant="h4"
            sx={{
              color: "#2D2C2C",
              textAlign: { xs: "center", md: "start" },
              fontSize: {md:"2rem",xs:'1.5rem'},
            }}
          >
            Nail Art Supplies
          </Typography>
          <Box width={"100%"} my={4} >
            <Box  display={'flex'} flexDirection={'column'} alignItems={{xs:'center',md:'start'}} width={'100%'}>
            <Typography
              variant="h6"
              sx={{
                color: "#858D97",
                fontWeight: "400",
                fontSize: {md:"1rem",xs:'.8rem'},
                textAlign: { xs: "center", md: "start" },
                width:{md:'100%',sm:'60%',xs:'90%'}
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography></Box>
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
                  width: { xs: "40%", sm: "30%" },
                  bgcolor: "transparent",
                  borderRadius: "50px",
                  color: "#FF6C86",
                  fontSize: {md:"1rem",xs:'0.8rem'},
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
