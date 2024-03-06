import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import dummyImg from "../../assets/Product/Rectangle 1213.png";
import eye from "../../assets/Product/eye.svg";
import close from "../../assets/Product/Close.svg";
import wishlist from "../../assets/navbar/Wishlist.svg";
import { useNavigate } from "react-router-dom";
import ProductView from "../Modal/ProductView";
import SelectVarientModal from "../Modal/SelectVarientModal";

const ProductCards = ({ wishList = false }) => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        my: 2,
        // flexGrow:1,
      }}
    >
      <Box
        sx={{
          backgroundColor: "#ffffff",
          height: "100%",
          width: "90%",
          borderRadius: "16px",
          p: { md: "1rem", xs: "0.6rem" },
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: ".8rem",
            flexDirection: "column",
            gap: 1,
            position: "relative",
            mb: 1,
          }}
        >
          <Box
            height={{ md: "165px", xs: "100px", cursor: "pointer" }}
            onClick={() => navigate("/productDetails")}
          >
            <img src={dummyImg} alt="" height={"100%"} />
          </Box>
          <Box
            sx={{
              position: "absolute",
              right: "5px",
              top: "5px",
              flexDirection: "column",
              display: "flex",
              gap: 1,
            }}
          >
            {wishList ? (
              <>
                <Box sx={{cursor:'pointer'}}>
                  <img src={close} alt="" height={35} />
                </Box>
              </>
            ) : (
              <>
                <Box>
                  <img src={wishlist} alt="" height={20} />
                </Box>
                <Box onClick={handleOpen} sx={{ cursor: "pointer" }}>
                  <img src={eye} alt="" height={25} />
                </Box>
              </>
            )}
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"start"}
          alignItems={"start"}
        >
          <Typography
            variant="h4"
            fontSize={{ xs: "0.75rem", md: "1rem" }}
            textAlign={"left"}
          >
            24HR Full Coverage Foundation
          </Typography>
          <Typography
            variant="h6"
            fontSize={{ xs: "0.6rem", md: "0.75rem" }}
            textAlign={"left"}
            fontWeight={400}
            color={"#858D97"}
            fontFamily={"Poppins"}
          >
            24HR Full Coverage Foundation
          </Typography>
          <Typography
            variant="h6"
            fontSize={{ xs: "1.2rem", md: "1.5rem" }}
            color={"#FFD480"}
          >
            {[0, 1, 2, 3].map((dt) => (
              <>★</>
            ))}
          </Typography>
          <Typography
            variant="h6"
            fontSize={{ xs: "0.6rem", md: "0.75rem" }}
            textAlign={"left"}
            fontWeight={400}
            color={"#858D97"}
            fontFamily={"Poppins"}
          >
            In Stock
          </Typography>
          <Typography
            variant="h4"
            fontSize={{ xs: "0.75rem", md: "1rem" }}
            textAlign={"left"}
          >
            ₹400
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 2,
              width: "100%",
              bgcolor: "#FF6C86",
              borderRadius: "25px",
              color: "#fff",
              fontSize: { xs: "0.75rem", md: "1rem" },
              textTransform: "capitalize",
              px: { xs: 1, md: 2 },
              ":hover": {
                bgcolor: "#FF6C86",
              },
            }}
          >
            Add to cart
          </Button>
        </Box>
      </Box>
      <ProductView open={open} handleClose={handleClose} />
      {/* <SelectVarientModal  open={open} handleClose={handleClose}/> */}
    </Box>
  );
};

export default ProductCards;
