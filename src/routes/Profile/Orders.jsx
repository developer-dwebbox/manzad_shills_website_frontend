import { Box, Button, Typography } from "@mui/material";
import React from "react";
import productImg2 from "../../assets/Profile/productImg2.png";
import productImg1 from "../../assets/Product/productImgBig.png";
import deliveredIcon from "../../assets/Profile/deliveredIcon.svg";
import transitIcon from "../../assets/Profile/transitIcon.svg";
import Profile from "./Profile";
import { useLocation } from "react-router-dom";

const Orders = () => {
  const location = useLocation();
  return (
    <Box>
      <Profile location = {location.pathname}/>
      <Box px={{ xs: 2, sm: 4, md: 16 }} my={4}>
        <Box
          minHeight={"90vh"}
          sx={{
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            borderRadius: 3,
            padding: 2,
            px: { xs: 1, sm: 3, md: 6 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "1rem", sm: "1.25rme", md: "1.5rem" },
              fontWeight: "400",
              textAlign: "center",
              color: "#2D2C2C",
            }}
          >
            Your Orders
          </Typography>
          <hr style={{ borderTop: "1px solid #00000040", marginTop: "45px" }} />
          {orderDetails.map((detail) => (
            <Box
              key={detail.orderId}
              // p={2}
              my={2}
              sx={{ borderBottom: "1px solid #00000040" }}
              pb={0}
            >
              <Box
                display={"flex"}
                p={{ sm: 2 }}
                flexDirection={{ xs: "column", md: "row" }}
              >
                <Box display={"flex"} flexWrap={"wrap"}>
                  <Box width={"20%"} mr={3} minWidth={{ xs: 90, md: 110 }}>
                    <img src={detail.img} alt="" width={"100%"} />
                  </Box>
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    // width={'50%'}
                    flex={1}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: ".9rem", sm: "1.1rme", md: "1.25rem" },
                        fontWeight: "500",
                      }}
                    >
                      {detail.heading}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: ".8rem", sm: ".95rme", md: "1.05rem" },
                        fontWeight: "400",
                      }}
                    >
                      Qty: {detail.qty}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: ".8rem", sm: ".95rme", md: "1.05rem" },
                        fontWeight: "400",
                      }}
                    >
                      Order ID: {detail.orderId}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: ".75rem", sm: ".85rme", md: ".9rem" },
                        fontWeight: "400",
                      }}
                      mt={2}
                    >
                      {detail.details}
                    </Typography>
                  </Box>
                </Box>

                <Box
                  minWidth={"18%"}
                  display={"flex"}
                  flexDirection={{ md: "column" }}
                  justifyContent={{ md: "center" }}
                  alignItems={"center"}
                  gap={2}
                  mt={{ xs: 2, md: 0 }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      width: { md: "100%" },
                      mt: { md: 2 },
                      bgcolor: detail.statusCode === 1 ? "#66D97F" : "#FFD074",
                      borderRadius: "25px",
                      color: "#fff",
                      fontSize: { xs: ".8rem", sm: ".95rme", md: "1.05rem" },
                      textTransform: "capitalize",
                      px: { xs: 2, sm: 3, md: 4 },
                      py: 1,
                      boxShadow: "none",
                      display: "flex",
                      gap: 1,
                      ":hover": {
                        bgcolor:
                          detail.statusCode === 1 ? "#66D97F" : "#FFD074",
                      },
                    }}
                  >
                    <img
                      src={
                        detail.statusCode === 1 ? deliveredIcon : transitIcon
                      }
                      alt=""
                    />{" "}
                    {detail.status}
                  </Button>
                  <Typography
                    sx={{
                      fontSize: { xs: ".8rem", sm: ".95rme", md: "1.05rem" },
                      fontWeight: "500",
                      color: "#FF6C86",
                      textAlign: "center",
                      mt: { md: 1 },
                      cursor: "pointer",
                    }}
                  >
                    {detail.statusCode === 1 ? "Invoice" : "Track Order"}
                  </Typography>
                </Box>
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: ".8rem", sm: ".95rme", md: "1.05rem" },
                  fontWeight: "400",
                  color: "#2D2C2Cc4",
                  bgcolor: "#D9D9D940",
                  mt: 1,
                  p: 1,
                }}
              >
                Last update: {detail.lastUpdated}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Orders;

const orderDetails = [
  {
    img: productImg1,
    heading: "Gel Polish 15ml 31-60",
    qty: "2",
    orderId: "135468BSHJ354",
    details:
      "Shills Professional’s Gel Polish boasts high pigmentation, ensuring a smooth and long-lasting application. Available in an impressive range of 240 vibrant colors, it comes...",
    status: "Delivered",
    statusCode: 1,
    lastUpdated: "Shipment is Delivered on 27 December 2023",
  },
  {
    img: productImg2,
    heading: "Gel Polish 15ml 31-60",
    qty: "1",
    orderId: "135468BSHJ2565",
    details:
      "Shills Professional’s Gel Polish boasts high pigmentation, ensuring a smooth and long-lasting application. Available in an impressive range of 240 vibrant colors, it comes...",
    status: "In Transit",
    statusCode: 2,
    lastUpdated:
      "Shipment is in Transit, Expected Delivered by 24 January 2024",
  },
];
