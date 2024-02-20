import React from "react";
import {
  Alert,
  Box,
  Button,
  FormControlLabel,
  Grid,
  Radio,
  Stack,
  Typography,
} from "@mui/material";
import ShoppingCard from "./ShoppingCard";
import TextField from "../../components/CustomComponent/TextField";
import FileUploadInput from "../../components/CustomComponent/FileUploadInput";
import paytmLogo from "../../assets/Cart/paytm.png";

const Checkout = () => {
  return (
    <Box mb={4}>
      <Box
        bgcolor={"#FFE9ED"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box py={4}>
          <Typography
            variant="h4"
            sx={{ fontSize: "1.45rem", fontWeight: "400" }}
          >
            Checkout
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
          <Typography
            variant="h5"
            component="div"
            sx={{
              color: "#2D2C2C",
              fontWeight: 400,
              marginBottom: 3,
              fontSize: "1.3rem",
            }}
          >
            Billing Details
          </Typography>
          <Box my={2} width={"90%"}>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"end"}
            >
              <Box width={"50%"} pr={2}>
                <TextField
                  label="Name *"
                  placeholder="Enter First Name"
                  name="fname"
                  type="text"
                />
              </Box>
              <Box width={"50%"} pl={2}>
                <TextField
                  placeholder="Enter Last Name"
                  name="lname"
                  type="text"
                />
              </Box>
            </Box>
            {fields.map((fd) => (
              <Box my={3}>
                <TextField
                  label={fd.label}
                  placeholder={fd.placeholder}
                  name={fd.name}
                  type={fd.type}
                />
              </Box>
            ))}
          </Box>
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
                  fontSize: "1.1rem",
                }}
              >
                Price Details
              </Typography>
              <Box
                sx={{ height: "50vh" }}
                overflow={"auto"}
                position={"relative"}
                mb={4}
              >
                <Grid container position={"sticky"} top={"0"} bgcolor={"#fff"}>
                  <Grid item xs={6}>
                    <Typography
                      variant="subtitle1"
                      component="div"
                      sx={{
                        color: "#2D2C2C",
                        fontWeight: 400,
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
                        fontWeight: 400,
                        // marginY: 3,
                        textAlign: "center",
                      }}
                    >
                      Quantity
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography
                      variant="subtitle1"
                      component="div"
                      sx={{
                        color: "#2D2C2C",
                        fontWeight: 400,
                        // marginY: 3,
                        textAlign: "center",
                      }}
                    >
                      Total
                    </Typography>
                  </Grid>
                </Grid>
                <ShoppingCard />
                <ShoppingCard />
                <ShoppingCard />
                <ShoppingCard />
                <ShoppingCard />
              </Box>
              <Box>
                <Stack my={2}>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    fontSize={".9rem"}
                    color="#858D97"
                  >
                    Have a coupon code?
                  </Typography>
                  <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent={"space-between"}
                    sx={{
                      height: "50px",
                      backgroundColor: "#F2F4F9",
                      borderRadius: "6px",
                    }}
                  >
                    <input
                      className="input-textfield"
                      placeholder="Enter coupon Code"
                      style={{ width: "70%" }}
                      // value={props.value}
                      // {...props}
                      step="0"
                    />
                    <Button
                      variant="contained"
                      // size="medium"
                      sx={{
                        boxShadow: "none",
                        bgcolor: "#FF6C86",
                        textTransform: "capitalize",
                        color: "#fff",
                        "&:hover": {
                          backgroundColor: "#FF6C86",
                        },
                      }}
                      component="label"
                    >
                      Apply
                    </Button>
                  </Box>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    fontSize={".9rem"}
                    color="#EB5757"
                  >
                    Hurry! Offer ends in 01:19:12
                  </Typography>
                </Stack>
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
                    fontWeight: 400,
                    // marginY: 3,
                    fontSize: "1rem",
                  }}
                >
                  Products:
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    color: "#242424",
                    fontWeight: 400,
                    fontSize: "1rem",
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
                    fontWeight: 400,
                    // marginY: 3,
                    fontSize: "1rem",
                  }}
                >
                  Subtotal:
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    color: "#242424",
                    fontWeight: 400,
                    fontSize: "1rem",
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
                    fontWeight: 400,
                    // marginY: 3,
                    fontSize: "1rem",
                  }}
                >
                  Discount:
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    color: "#6FCF97",
                    fontWeight: 400,
                    fontSize: "1rem",
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
                    fontWeight: 400,
                    // marginY: 3,
                    fontSize: "1rem",
                  }}
                >
                  Shipping:
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    color: "#242424",
                    fontWeight: 400,
                    fontSize: "1rem",
                    // marginY: 3,
                  }}
                >
                  ₹400
                </Typography>
              </Box>
              <Box
                sx={{
                  borderRadius: 3,
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  p: 2,
                  my: 3,
                }}
              >
                <FormControlLabel
                  value="patym"
                  control={<Radio checked/>}
                  label="Paytm Payment Gateway"
                />
                <Box sx={{ height: 25 }} mt={1}>
                  <img src={paytmLogo} height={"100%"} alt="" />
                </Box>
                <Typography
                  variant="subtitle1"
                  component="div"
                  mt={1}
                  sx={{
                    color: "#858D97",
                    fontWeight: 400,
                    fontSize: "0.9rem",
                  }}
                >
                  Credit/Debit Cards, UPI, Wallet, Postpaid, Netbanking
                </Typography>
              </Box>
              <Box
                sx={{
                  borderRadius: 3,
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  p: 1,
                  px:2,
                  my: 3,
                }}
              >
                <FormControlLabel
                  value="cod"
                  control={<Radio />}
                  label="Cash on Delivery"
                />
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
                    fontSize: "1.15rem",
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
                    fontSize: "1.15rem",
                    // marginY: 3,
                  }}
                >
                  ₹4000
                </Typography>
              </Box>
              <Button
                variant="contained"
                sx={{
                  my: 2,
                  bgcolor: "#FF6C86",
                  borderRadius: "25px",
                  color: "#fff",
                  fontSize: "1rem",
                  textTransform: "capitalize",
                  px: 3,
                  py: 1,
                  width: "100%",
                  ":hover": {
                    bgcolor: "#FF6C86",
                  },
                }}
              >
                Proceed To Pay
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Checkout;

const fields = [
  {
    label: "Mobile Number *",
    placeholder: "Enter mobile number",
    id: "1",
    name: "mobNo",
    type: "number",
  },
  {
    label: "Email",
    placeholder: "Enter Email",
    id: "2",
    name: "email",
    type: "email",
  },
  {
    label: "Pincode *",
    placeholder: "Enter Pincode",
    id: "3",
    name: "pin",
    type: "number",
  },
  {
    label: "Address(House No, Building, Street, Area) *",
    placeholder: "Enter Address",
    id: "4",
    name: "add",
    type: "text",
  },
  {
    label: "Locality / Town *",
    placeholder: "Enter Locality / Town",
    id: "5",
    name: "local",
    type: "text",
  },
  {
    label: "State *",
    placeholder: "Select State",
    id: "6",
    name: "state",
    type: "text",
  },
  {
    label: "City / District *",
    placeholder: "Select City",
    id: "7",
    name: "city",
    type: "text",
  },
];
