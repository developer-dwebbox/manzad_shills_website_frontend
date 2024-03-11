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
      minWidth={{xs:'550px',md:"750px"}}
      my={2}
      //   bgcolor={qty % moq !== 0 ? "#FFF2CF" : "#F3F6F9"}
      sx={{
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      }}
      borderRadius={2}
      p={2}
    >
      <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
        <LazyLoadImage src={productImg} effect="blur" height={100} />
        <Box>
          <Typography
            variant="p"
            component="div"
            sx={{
              color: "#858D97",
              fontWeight: 400,
              marginX: 2,
              fontSize: {xs:'.8rem',md:'.9rem'}
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
              marginX: 2,
              fontSize: {xs:'.9rem',md:'1.1rem'}
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
        //   pr={8}
        >
          <Box sx={{ display: "flex", placeItems: "center",pl:1 }}>
            <Button
              sx={{
                color: "black",
                backgroundColor: "#F2F4F9",
                "&:hover": {
                  backgroundColor: "#D7F1FF",
                },
                borderRadius: 3,
                minWidth: "auto",
                minHeight: "auto",
                aspectRatio: 1,
              }}
            >
              <RemoveIcon />
            </Button>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "3rem",
                aspectRatio: 1,
                backgroundColor: "#fff",
              }}
            >
              <input
                value={0}
                type="number"
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#fff",
                  textAlign: "center",
                  border: "none",
                  outline: "none",
                  fontSize: "130%",
                  color: "#465152",
                }}
                onChange={(e) => {
                  if (e.target.value < 0) return;
                }}
              />
            </Typography>
            <Button
              sx={{
                color: "black",
                fontSize: "2rem",
                backgroundColor: "#F2F4F9",
                "&:hover": {
                  backgroundColor: "#D7F1FF",
                },
                borderRadius: 3,
                minWidth: "auto",
                minHeight: "auto",
                aspectRatio: 1,
              }}
            >
              <AddIcon />
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={2}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Typography
          variant="subtitle1"
          component="div"
          sx={{
            color: "#2D2C2C",
            fontWeight: 500,
            // marginY: 3,
            fontSize: {xs:'.9rem',md:'1rem'}
          }}
        >
          ₹ 400 
        </Typography>
      </Grid>
      <Grid
        item
        xs={1}
        sx={{ display: "flex", alignItems: "center", justifyContent: "end" }}
      >
        <IconButton
          size="large"
          //   edge="end"
          aria-haspopup="true"
          // onClick={handleProfileMenuOpen}
          sx={{
            // bgcolor: "#0281C6",
            borderRadius: 2,
            "&:hover": {
              //   background: "#0281C6",
            },
          }}
          //   onClick={onDelete}
        >
          <img src={deleteIcon} alt="" width={20} />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default ShoppingCard;
