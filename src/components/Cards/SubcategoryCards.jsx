import { Box, Typography } from "@mui/material";
import React from "react";
import dummyImg from "../../assets/Product/Mask group.png";

const SubcategoryCards = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        my:2
      }}
    >
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
        <Box
          sx={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            // height:'/'
          }}
        >
          <img src={dummyImg} alt="" srcset="" height={"100%"} width={"100%"} />
        </Box>
        <Typography
          variant="h6"
          color={"#2D2C2C"}
          fontWeight={400}
          fontSize={"1rem"}
          textAlign={"center"}
          mt={2}
        >
          Brushes & Tools
        </Typography>
      </Box>
    </Box>
  );
};

export default SubcategoryCards;
