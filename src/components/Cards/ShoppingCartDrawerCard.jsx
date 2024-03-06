import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import productImg from "../../assets/Cart/product.png";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import deleteIcon from "../../assets/Cart/deleteIcon.svg";

const ShoppingCartDrawerCard = () => {
  return (
    <Box display={"flex"} justifyContent={"space-between"} borderRadius={2} p={2}       sx={{
      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    }} gap={1}>
      <Box width={{xs:60,sm:100}}>
        <LazyLoadImage src={productImg} effect="blur" width={'100%'} />
      </Box>
      <Box>
        <Typography
          variant="p"
          component="div"
          sx={{
            color: "#858D97",
            fontWeight: 400,
            // marginX: 2,
            fontSize: { xs: ".55rem",sm:'.675rem', md: ".8rem" },
            textAlign: "start",
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
            // marginX: 2,
            fontSize: { xs: ".6rem",sm:".8rem", md: "1rem" },
            textAlign: "start",
          }}
        >
          24HR Full Coverage Foundation
        </Typography>
        <Typography
          variant="p"
          component="div"
          sx={{
            color: "#2D2C2C",
            fontWeight: 500,
            // marginX: 2,
            fontSize: { xs: ".6rem",sm:".8rem", md: "1rem" },
            textAlign: "start",
          }}
        >
          ₹400
        </Typography>
        <Box sx={{ display: "flex", placeItems: "center" }}>
          <Button
            sx={{
              color: "black",
              backgroundColor: "#F2F4F9",
              "&:hover": {
                backgroundColor: "#D7F1FF",
              },
              borderRadius: 2,
              minWidth: "auto",
              minHeight: "auto",
              aspectRatio: 1,
            }}
          >
            <RemoveIcon fontSize="1rem" />
          </Button>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "2rem",
              aspectRatio: 1,
              backgroundColor: "#fff",
            }}
          >
            <input
              value={0}
              type="number"
              style={{
                width: "100%",
                // height: "100%",
                backgroundColor: "#fff",
                textAlign: "center",
                border: "none",
                outline: "none",
                // fontSize: "130%",
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
              // fontSize: "2rem",
              backgroundColor: "#F2F4F9",
              "&:hover": {
                backgroundColor: "#D7F1FF",
              },
              borderRadius: 2,
              minWidth: "auto",
              minHeight: "auto",
              // aspectRatio: 1,
            }}
          >
            <AddIcon fontSize="1rem" />
          </Button>
        </Box>
      </Box>
      <Box>
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
          <img src={deleteIcon} alt="" width={15} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ShoppingCartDrawerCard;
