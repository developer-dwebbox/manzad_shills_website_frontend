import { Box, Button, Typography } from "@mui/material";
import React from "react";
import dummyImg from "../../assets/Product/Rectangle 1213.png";
import eye from "../../assets/Product/eye.svg";
import close from "../../assets/Product/Close.svg";
import wishlist from "../../assets/navbar/Wishlist.svg";
import { useNavigate } from "react-router-dom";

const ProductCards = ({ wishList = false }) => {
  const navigate = useNavigate();
  return (
    <Box
    onClick={()=>navigate('/productDetails')}
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        my: 2,
      }}
    >
      <Box
        sx={{
          backgroundColor: "#ffffff",
          height: "100%",
          width: "90%",
          borderRadius: "16px",
          p: "1rem",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          cursor: "pointer",
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
          <img src={dummyImg} alt="" height={"180px"} />
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
                <img src={close} alt="" height={35} />
              </>
            ) : (
              <>
                <img src={wishlist} alt="" height={20} />
                <img src={eye} alt="" height={25} />
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
          <Typography variant="h4" fontSize={"1rem"} textAlign={"left"}>
            24HR Full Coverage Foundation
          </Typography>
          <Typography
            variant="h6"
            fontSize={"0.75rem"}
            textAlign={"left"}
            fontWeight={400}
            color={"#858D97"}
            fontFamily={"Poppins"}
          >
            24HR Full Coverage Foundation
          </Typography>
          <Typography variant="h6" fontSize={"1.5rem"} color={"#FFD480"}>
            {[0, 1, 2, 3].map((dt) => (
              <>★</>
            ))}
          </Typography>
          <Typography
            variant="h6"
            fontSize={"0.75rem"}
            textAlign={"left"}
            fontWeight={400}
            color={"#858D97"}
            fontFamily={"Poppins"}
          >
            In Stock
          </Typography>
          <Typography variant="h4" fontSize={"1rem"} textAlign={"left"}>
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
              fontSize: "1rem",
              textTransform: "capitalize",
              px: 2,
              ":hover": {
                bgcolor: "#FF6C86",
              },
            }}
          >
            Select Varient
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCards;
