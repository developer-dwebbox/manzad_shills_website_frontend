import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import customerSupportIcon from "../../assets/ContactUs/customer-support 1.svg";
import mediaIcon from "../../assets/ContactUs/media-support.svg";
import addressIcon from "../../assets/Profile/address.svg";
import phoneIcon from "../../assets/Footer/phone.svg";
import mailIcon from "../../assets/Footer/mail.svg";
import whatsAppIcon from "../../assets/Footer/whatsapp.svg";
import { Link } from "react-router-dom";
import TextField from "../../components/CustomComponent/TextField";
import TextArea from "../../components/CustomComponent/TextArea";

const ContactUs = () => {
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
            Contact Us
          </Typography>
        </Box>
      </Box>
      <Grid container p={{ md: 8, xs: 4 }}>
        <Grid item md={6}>
          <Typography
            variant="h4"
            sx={{ fontSize: "1.25rem", fontWeight: "500", color: "#FF6C86" }}
          >
            Connect with Us
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontSize: "1rem",
              fontWeight: "400",
              color: "#2D2C2C",
              my: 3,
            }}
          >
            We are dedicated to providing our customers with the best possible
            shopping experience, and we believe that effective communication is
            key. Please take a moment to review the following information and
            get in touch with us if you have any questions or concerns
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontSize: "1.25rem",
              fontWeight: "500",
              color: "#FF6C86",
              mb: 3,
            }}
          >
            Contact Us
          </Typography>

          <Box my={3} display={"flex"} gap={2} flexWrap={"wrap"}>
            {contactData.map((data) => (
              <Box minWidth={275} maxWidth={315}>
                <Box display={"flex"} gap={2} alignItems={"center"}>
                  <img src={data.icon} alt="" height={30} />
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: "1rem",
                      fontWeight: "500",
                      color: "#FF6C86",
                    }}
                  >
                    {data.heading}
                  </Typography>
                </Box>
                {data.details.map((dt, id) => (
                  <Link to={dt.path} style={{ textDecoration: "none" }}>
                    <Typography
                      key={id}
                      my={3}
                      sx={{
                        color: "#2D2C2C",
                        cursor: "pointer",
                        fontWeight: 400,
                        fontSize: "0.975rem",
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        width: "fit-content",
                        "&:hover": {
                          // color: "#EE7F1C",
                        },
                      }}
                    >
                      {dt.icon !== "" ? (
                        <Box
                          display={"inline-block"}
                          height={22}
                          paddingY={id === 1 ? "2px" : null}
                        >
                          <img src={dt.icon} alt="" srcset="" height={"100%"} />
                        </Box>
                      ) : (
                        ""
                      )}{" "}
                      {dt.info}
                    </Typography>
                  </Link>
                ))}
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item md={6} px={{ md: 4, xs: 0 }} width={'100%'}>
          <Typography
            variant="h4"
            sx={{ fontSize: "1.25rem", fontWeight: "400", color: "#FF6C86" }}
          >
            Provide your contact details and we will <br /> connect with you
          </Typography>
          <Box my={3}>
            <TextArea
              label="Write your review"
              placeholder=""
              name="remark"
              type="text"
              rows={4}
              // value={formik.values.remark}
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
            />
          </Box>
          <Box my={2}>
            <TextField
              label="Name *"
              placeholder="Enter Name"
              // id="mobileNumber"
              name="name"
              type="text"
              // value={formik.values.mobileNumber}
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              onWheel={(e) => e.target.blur()}
            />
          </Box>
          <Box my={2}>
            <TextField
              label="Email *"
              placeholder="Enter Email"
              // id="mobileNumber"
              name="name"
              type="email"
              // value={formik.values.mobileNumber}
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              onWheel={(e) => e.target.blur()}
            />
          </Box>
          <Box my={4}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#FF6C86",
                borderRadius: "25px",
                color: "#fff",
                fontSize: "1rem",
                textTransform: "capitalize",
                px: 4,
                py: 1,
                ":hover": {
                  bgcolor: "#FF6C86",
                },
              }}
            >
              Submit Review
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;

const contactData = [
  {
    heading: "Customer Support",
    icon: customerSupportIcon,
    details: [
      {
        icon: phoneIcon,
        info: "02223456262",
      },
      {
        icon: mailIcon,
        info: "shillsweb123@gmail.com",
      },
      {
        icon: whatsAppIcon,
        info: "9137202897",
      },
    ],
  },
  {
    heading: "Media/ Partnerships",
    icon: mediaIcon,
    details: [
      {
        icon: phoneIcon,
        info: "02223456262",
      },
      {
        icon: mailIcon,
        info: "Connect@shillsprofessional.com",
      },
      {
        icon: whatsAppIcon,
        info: "9137202897",
      },
    ],
  },
  {
    heading: "Address",
    icon: addressIcon,
    details: [
      {
        icon: "",
        info: "16, Building no 282, 1st floor, Abdul Rehman street Mumbai-400003",
      },
    ],
  },
];
