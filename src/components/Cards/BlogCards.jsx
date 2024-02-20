import { Box, Button, Typography } from "@mui/material";
import React from "react";
import username from "../../assets/Home/username.svg";

const BlogCards = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        my: 2,
        boxShadow:'rgba(194, 194, 194, 0.2) 0px 8px 24px',
        borderRadius:'14px',
        py:5
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          fontWeight={400}
          fontSize={"1rem"}
          color={"#FF6C86"}
          textTransform={"uppercase"}
          letterSpacing={"7px"}
        >
          Hair Care
        </Typography>
        <Box sx={{ width: "60%", my: 2 }}>
          <Typography
            variant="h4"
            fontWeight={400}
            fontSize={"1rem"}
            textAlign={"center"}
            color={"#2D2C2C"}
          >
            Shills Professional Vitamin-c Face Serum Shills Professional Serum
          </Typography>
        </Box>
        <Box height={20} display={"flex"} alignItems={"center"} gap={1}>
          <img src={username} alt="" height={"100%"} />
          <Typography
            variant="h6"
            fontWeight={400}
            fontSize={"0.875rem"}
            textAlign={"center"}
            color={"#858D97"}
          >
            Shills Professional
          </Typography>
        </Box>
        <Box width={'60%'} display={'flex'} justifyContent={'center'}>
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
            Read More
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default BlogCards;
