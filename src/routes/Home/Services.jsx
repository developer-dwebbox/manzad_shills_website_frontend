import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import availability from "../../assets/Home/availability.svg";
import certified from "../../assets/Home/certified.svg";
import shipping from "../../assets/Home/shipping.svg";

const Services = () => {
  return (
    <Box my={6} px={{ md: 8, xs: 2 }}>
      <Grid container display={"flex"} justifyContent={"center"}>
        {data.map((dt, id) => (
          <Grid item md={4} p={{md:6,sm:3,xs:1}} sm={6} xs={12} key={id}>
            <Box display={"flex"} justifyContent={"center"}>
              <Box
                width={350}
                display={"flex"}
                alignItems={"center"}
                flexDirection={"column"}
              >
                <Box
                  height={35}
                  alignContent={"center"}
                  display={"flex"}
                  justifyContent={"center"}
                  my={4}
                >
                  <img src={dt.image} alt="" height={"100%"} />
                </Box>
                <Typography
                  variant="h5"
                  width={"70%"}
                  sx={{
                    color: "#858D97",
                    fontSize: "1rem",
                    textAlign: "center",
                  }}
                >
                  {dt.text}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;

const data = [
  {
    image: shipping,
    text: "Enjoy Express Shipping on all your orders",
  },
  {
    image: availability,
    text: "Our team is available 24/7 to help with your concerns",
  },
  {
    image: certified,
    text: "Our Beauty supplies are made with certified ingredients",
  },
];
