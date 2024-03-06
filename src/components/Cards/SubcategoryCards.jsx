import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import dummyImg from "../../assets/Product/Mask group.png";

const SubcategoryCards = ({ id, name ,selectedid}) => {
  

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        my: 2,
      }}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        sx={{cursor: "pointer"}}
       
      >
        <Box
          sx={{
            width: { md: "100px", xs: "60px" },
            height: { md: "100px", xs: "60px" },
            borderRadius: "50%",
            border: `${id && id === selectedid ? "2px solid #FF6C86" : ""}`,
            padding: "3px",
            // height:'/'
          }}
        >
          <img src={dummyImg} alt="" srcset="" height={"100%"} width={"100%"} />
        </Box>
        <Typography
          variant="h6"
          color={"#2D2C2C"}
          fontWeight={400}
          fontSize={{ xs: ".75rem", md: "1rem" }}
          textAlign={"center"}
          mt={2}
        >
          Brushes
        </Typography>
      </Box>
    </Box>
  );
};

export default SubcategoryCards;
