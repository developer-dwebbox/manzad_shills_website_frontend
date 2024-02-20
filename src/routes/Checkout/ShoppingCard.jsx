import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import deleteIcon from "../../assets/Cart/deleteIcon.svg";
import productImg from "../../assets/Cart/product.png";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const ShoppingCard = () => {
  return (
    <Grid
      container
      my={2}
      sx={{
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      }}
      borderRadius={2}
      p={1}
      minHeight={95}
    >
      <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
        <LazyLoadImage src={productImg} effect="blur" height={60} />
        <Box>
          <Typography
            variant="p"
            component="div"
            sx={{
              color: "#858D97",
              fontWeight: 400,
              marginLeft: 1,
              fontSize: ".75rem",
            }}
          >
            Product ID: 123466
          </Typography>
          <Typography
            variant="p"
            component="div"
            sx={{
              color: "#2D2C2C",
              fontWeight: 500,
              marginLeft: 1,
              fontSize: ".8rem",
            }}
          >
            24HR Full Coverage Foundation
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={3}
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            placeItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="p"
            component="div"
            sx={{
              color: "#2D2C2C",
              fontWeight: 500,
              marginX: 1,
              fontSize: ".9rem",
            }}
          >
            24
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={3}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Typography
          variant="subtitle1"
          component="div"
          sx={{
            color: "#2D2C2C",
            fontWeight: 500,
            // marginY: 3,
            fontSize: ".9rem",
          }}
        >
          ₹ 400
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ShoppingCard;
