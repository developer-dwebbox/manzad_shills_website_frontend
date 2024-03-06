import React from "react";
import { Alert, Box, Button, Grid, Typography } from "@mui/material";
import ShoppingCard from "./ShoppingCard";
import TextField from "../../components/CustomComponent/TextField";

const Cart = () => {
  return (
    <Box mb={4}>
      <Box
        bgcolor={"#FFE9ED"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box py={{xs:2,md:4}}>
          <Typography
            variant="h4"
            sx={{ fontSize: {xs:'1rem',md:'1.45rem'}, fontWeight: "400" }}
          >
            {" "}
            Cart
          </Typography>
        </Box>
      </Box>
      {/* <Alert severity="info" sx={{ mt: 4 }}>
        Your cart is empty
      </Alert> */}

      <Grid container spacing={1} my={4} px={4}>
        <Grid
          item
          lg={8}
          xs={12}
          sm={12}
          paddingRight={{ xs: 0, lg: 8 }}
          overflow={"auto"}
          pl={4}
        >
          <Grid container minWidth={{xs:'550px',md:"750px"}}>
            <Grid item xs={6}>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{
                  color: "#2D2C2C",
                  fontWeight: 500,
                  fontSize: {xs:'.9rem',md:'1rem'}
                  // marginY: 3,
                }}
              >
                Product
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{
                  color: "#2D2C2C",
                  fontWeight: 500,
                  // marginY: 3,
                  textAlign: "center",
                  fontSize: {xs:'.9rem',md:'1rem'}
                }}
              >
                Quantity
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{
                  color: "#2D2C2C",
                  fontWeight: 500,
                  // marginY: 3,
                  textAlign: "center",
                  fontSize: {xs:'.9rem',md:'1rem'}
                }}
              >
                Total
              </Typography>
            </Grid>
          </Grid>
          <hr style={{ margin: "10px 0", color: "#CDD8E3",minWidth:'700px' }} />
          {[0, 1, 2].map((dt) => (
            <ShoppingCard />
          ))}
        </Grid>
        <Grid
          item
          lg={4}
          xs={12}
          sm={12}
          // bgcolor={"#F3F6F9"}
          boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
          borderRadius={2}
          // height={"60dvh"}
          padding={4}
          // paddingLeft={8}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            height={"100%"}
            paddingLeft={4}
            paddingTop={4}
          >
            <Box>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  color: "#2D2C2C",
                  fontWeight: 500,
                  marginBottom: 3,
                  fontSize: {xs:'1rem',md:'1.2rem'}
                }}
              >
                Price Details
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                my={2}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    color: "#242424",
                    fontWeight: 500,
                    // marginY: 3,
                    fontSize: {xs:'.9rem',md:'1.1rem'}
                  }}
                >
                  Products:
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    color: "#242424",
                    fontWeight: 500,
                    fontSize: {xs:'.9rem',md:'1.1rem'}
                    // marginY: 3,
                  }}
                >
                  23
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                my={2}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    color: "#242424",
                    fontWeight: 500,
                    // marginY: 3,
                    fontSize: {xs:'.9rem',md:'1.1rem'}
                  }}
                >
                  Subtotal:
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    color: "#242424",
                    fontWeight: 500,
                    fontSize: {xs:'.9rem',md:'1.1rem'}
                    // marginY: 3,
                  }}
                >
                  ₹1600
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                my={2}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    color: "#242424",
                    fontWeight: 500,
                    // marginY: 3,
                    fontSize: {xs:'.9rem',md:'1.1rem'}
                  }}
                >
                  Discount:
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    color: "#6FCF97",
                    fontWeight: 500,
                    fontSize: {xs:'.9rem',md:'1.1rem'}
                    // marginY: 3,
                  }}
                >
                  -5%(₹80)
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                mt={2}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    color: "#242424",
                    fontWeight: 500,
                    // marginY: 3,
                    fontSize: {xs:'.9rem',md:'1.1rem'}
                  }}
                >
                  Shipping:
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    color: "#242424",
                    fontWeight: 500,
                    fontSize: {xs:'.9rem',md:'1.1rem'}
                    // marginY: 3,
                  }}
                >
                  ₹400
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "end",
                  flexDirection: "column",
                  mb: 2,
                }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    color: "#858D97",
                    fontWeight: 400,
                    fontSize: {xs:'.8rem',md:'1rem'}
                    // marginY: 3,
                  }}
                >
                  Shipping to Maharashtra
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    color: "#FF6C86",
                    fontWeight: 500,
                    fontSize: {xs:'.8rem',md:'1rem'},
                    // marginY: 3,
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  Change Location
                </Typography>
              </Box>
              <Box my={1}>
                <TextField value="India" readonly />
              </Box>
              <Box my={1}>
                <TextField value="Maharashtra" readonly />
              </Box>
              <Box my={1}>
                <TextField value="Mumbai" readonly />
              </Box>
              <Box my={1}>
                <TextField value="410001" readonly />
              </Box>
              <Box display={'flex'} justifyContent={'center'} my={2} pb={3} borderBottom={'1px solid #EBEDF2'}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#FF6C86",
                    borderRadius: "25px",
                    color: "#fff",
                    fontSize: {xs:'.8rem',md:'1rem'},
                    textTransform: "capitalize",
                    px: 3,
                    py: 1,
                    boxShadow:'none',
                    ":hover": {
                      bgcolor: "#FF6C86",
                    },
                  }}
                >
                  Update Location
                </Button>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                mt={2}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    color: "#242424",
                    fontWeight: 500,
                    // marginY: 3,
                    fontSize: {xs:'1rem',md:'1.2rem'},
                  }}
                >
                  Cart Total:
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    color: "#FF6C86",
                    fontWeight: 500,
                    fontSize: {xs:'1rem',md:'1.2rem'},
                    // marginY: 3,
                  }}
                >
                  ₹4000
                </Typography>
              </Box>
              <Button
                  variant="contained"
                  sx={{
                    my:2,
                    bgcolor: "#FF6C86",
                    borderRadius: "25px",
                    color: "#fff",
                    fontSize: {xs:'0.8rem',md:'1rem'},
                    textTransform: "capitalize",
                    px: 3,
                    py: 1,
                    width:'100%',
                    ":hover": {
                      bgcolor: "#FF6C86",
                    },
                  }}
                >
                  Checkout
                </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Cart;
