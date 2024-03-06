import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ProductCards from "../../components/Cards/ProductCards";

const Compare = () => {
  return (
    <Box mb={4}>
      <Box
        bgcolor={"#FFE9ED"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box py={{ xs: 2, md: 4 }}>
          <Typography
            variant="h4"
            sx={{ fontSize: { xs: "1rem", md: "1.45rem" }, fontWeight: "400" }}
          >
            {" "}
            Compare
          </Typography>
        </Box>
      </Box>
      <Box
        px={{ xs: 2, sm: 4, md: 6 }}
        display={"flex"}
        justifyContent={"center"}
      >
        <Box display={"flex"} sx={{ overflowX: "auto" }}>
          <Box>
            <Box
              borderRight={"1px solid #00000036"}
              // borderBottom={"1px solid #00000036"}
              sx={{
                width: "100%",
                display: "flex",
                mt: 2,
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#ffffff",
                  height: "100%",
                  p: { md: "1rem", xs: "0.6rem" },
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    marginTop: ".8rem",
                    mb: 1,
                    minWidth: { xs: "110px", md: "160px" },
                  }}
                >
                  <Box height={{ md: "165px", xs: "100px" }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: { xs: "0.75rem", md: "1rem" },
                        fontWeight: "400",
                        color: "#3A3A3A",
                      }}
                    >
                      {" "}
                      Product Image
                    </Typography>
                  </Box>
                </Box>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"start"}
                  alignItems={"start"}
                  minWidth={{ xs: "110px", md: "160px" }}
                >
                  <Typography
                    variant="h4"
                    fontSize={{ xs: "0.75rem", md: "1rem" }}
                    textAlign={"left"}
                    color={"#3A3A3A"}
                    mb={2}
                  >
                    Product Name
                  </Typography>
                  <Typography
                    variant="h6"
                    fontSize={{ xs: "0.75rem", md: "1rem" }}
                    textAlign={"left"}
                    color={"#3A3A3A"}
                    fontWeight={400}
                    mb={2}
                  >
                    Product Category
                  </Typography>
                  <Typography
                    variant="h6"
                    fontSize={{ xs: "0.75rem", md: "1rem" }}
                    textAlign={"left"}
                    color={"#3A3A3A"}
                    fontWeight={400}
                    mb={2}
                  >
                    Rating
                  </Typography>
                  <Typography
                    variant="h6"
                    fontSize={{ xs: "0.75rem", md: "1rem" }}
                    textAlign={"left"}
                    fontWeight={400}
                    color={"#3A3A3A"}
                    fontFamily={"Poppins"}
                  >
                    Availability
                  </Typography>
                  <Typography
                    variant="h4"
                    fontSize={{ xs: "0.75rem", md: "1rem" }}
                    textAlign={"left"}
                    color={"#3A3A3A"}
                    mb={2}
                  >
                    Price
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
                      visibility: "hidden",
                      ":hover": {
                        bgcolor: "#FF6C86",
                      },
                    }}
                  >
                    Add to cart
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box borderRight={"1px solid #00000036"}>
              <Box
                sx={{
                  backgroundColor: "#ffffff",
                  height: "100%",
                  p: { md: "1rem", xs: "0.6rem" },
                  display: "flex",
                  flexDirection: "column",
                }}
              >
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
                    color={"#3A3A3A"}
                    mb={2}
                  >
                    SKU
                  </Typography>
                  <Typography
                    variant="h6"
                    fontSize={{ xs: "0.75rem", md: "1rem" }}
                    textAlign={"left"}
                    color={"#3A3A3A"}
                    fontWeight={400}
                    mb={2}
                  >
                    Color
                  </Typography>
                  <Typography
                    variant="h6"
                    fontSize={{ xs: "0.75rem", md: "1rem" }}
                    textAlign={"left"}
                    color={"#3A3A3A"}
                    fontWeight={400}
                    mb={2}
                  >
                    Brand Name
                  </Typography>
                  <Typography
                    variant="h6"
                    fontSize={{ xs: "0.75rem", md: "1rem" }}
                    textAlign={"left"}
                    fontWeight={400}
                    color={"#3A3A3A"}
                    fontFamily={"Poppins"}
                    mb={2}
                  >
                    Item Form
                  </Typography>
                  <Typography
                    variant="h4"
                    fontSize={{ xs: "0.75rem", md: "1rem" }}
                    textAlign={"left"}
                    color={"#3A3A3A"}
                    mb={2}
                  >
                    Finish Type
                  </Typography>
                  <Typography
                    variant="h4"
                    fontSize={{ xs: "0.75rem", md: "1rem" }}
                    textAlign={"left"}
                    color={"#3A3A3A"}
                    mb={2}
                  >
                    Net Wt.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          {[0, 1, 2, 3].map((dt) => (
            <Box minWidth={{ xs: 160, md: 200 }}>
              <Box
                borderRight={"1px solid #00000036"}
                borderBottom={"1px solid #00000036"}
                // sx={{
                //   width: "100%",
                //   display: "flex",
                //   justifyContent: "center",
                // }}
              >
                <ProductCards wishList={true} />
              </Box>
              <Box borderRight={"1px solid #00000036"}>
                <Box
                  sx={{
                    backgroundColor: "#ffffff",
                    height: "100%",
                    p: { md: "1rem", xs: "0.6rem" },
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
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
                      color={"#3A3A3A"}
                      mb={2}
                    >
                      BSHJ214654
                    </Typography>
                    <Typography
                      variant="h6"
                      fontSize={{ xs: "0.75rem", md: "1rem" }}
                      textAlign={"left"}
                      color={"#3A3A3A"}
                      fontWeight={400}
                      mb={2}
                    >
                      Black
                    </Typography>
                    <Typography
                      variant="h6"
                      fontSize={{ xs: "0.75rem", md: "1rem" }}
                      textAlign={"left"}
                      color={"#3A3A3A"}
                      fontWeight={400}
                      mb={2}
                    >
                      Shills Professional
                    </Typography>
                    <Typography
                      variant="h6"
                      fontSize={{ xs: "0.75rem", md: "1rem" }}
                      textAlign={"left"}
                      fontWeight={400}
                      color={"#3A3A3A"}
                      fontFamily={"Poppins"}
                      mb={2}
                    >
                      Gel
                    </Typography>
                    <Typography
                      variant="h4"
                      fontSize={{ xs: "0.75rem", md: "1rem" }}
                      textAlign={"left"}
                      color={"#3A3A3A"}
                      mb={2}
                    >
                      Matte
                    </Typography>
                    <Typography
                      variant="h4"
                      fontSize={{ xs: "0.75rem", md: "1rem" }}
                      textAlign={"left"}
                      color={"#3A3A3A"}
                      mb={2}
                    >
                      15 ml
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Compare;
