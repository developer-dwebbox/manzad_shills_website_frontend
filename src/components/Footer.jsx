import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import logo from "../assets/Logo/Logo.svg";
// import CopyrightIcon from "@mui/icons-material/Copyright";
import phoneIcon from "../assets/Footer/phone.svg";
import mailIcon from "../assets/Footer/mail.svg";
import whatsAppIcon from "../assets/Footer/whatsapp.svg";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Box
      bgcolor={"#FFF7F8"}
      sx={{
        padding: { xs: 3, lg: 4 },
      }}
    >
      <Grid container spacing={2} px={{ xs: 0, lg: 4 }}>
        <Grid item sm={12} md={3} xs={12}>
          <Box
            onClick={() => navigate("/")}
            sx={{
              display: { sm: "block" },
              marginRight: { lg: 10, sm: 5 },
              cursor: "pointer",
            }}
          >
            <img src={logo} alt="" height={55} />
          </Box>
        </Grid>
        <Grid
          container
          md={9}
          sm={12}
          xs={12}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
        >
          {footerData.map((data, index) => (
            <Grid
              item
              md={3}
              sm={4}
              xs={6}
              flex={1}
              key={index}
              width={{ xs: "150px", md: "200px" }}
              minWidth={{ xs: "150px", md: "200px" }}
              my={2}
            >
              <Typography
                variant="div"
                sx={{
                  color: "#2D2C2C",
                  fontWeight: 500,
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  marginBottom: 1,
                  lineHeight: "40.5px",
                }}
              >
                {data.title}
              </Typography>
              {data.subTitles.map((dt, id) => (
                <Link to={dt.path} style={{ textDecoration: "none" }}>
                  <Typography
                    key={id}
                    my={{xs:1,md:3}}
                    sx={{
                      color: "#2D2C2C",
                      cursor: "pointer",
                      fontWeight: 400,
                      fontSize: { xs: ".75rem", md: ".975rem" },
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
                    {dt.subTitle}
                  </Typography>
                </Link>
              ))}
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        px={{ xs: 0, md: 4 }}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Grid item xs={12} sm={6} md={6}>
          <Typography
            my={3}
            sx={{
              color: "#2D2C2C",
              fontWeight: "500",
              width: "fit-content",
              display: "flex",
              alignItems: "end",
              fontSize: { xs: ".95rem", md: "1.1rem" },
            }}
          >
            2023 Shillsprofessional. @All rights reserved
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;

const footerData = [
  {
    title: "Categories",
    path: "",
    subTitles: [
      {
        subTitle: "Nail Art",
        path: "/",
        icon: "",
      },
      {
        subTitle: "Makeup",
        path: "/",
        icon: "",
      },
      {
        subTitle: "Skin Care",
        path: "/",
        icon: "",
      },
      {
        subTitle: "Hair Care",
        path: "/",
        icon: "",
      },
      {
        subTitle: "Brushes & Tools",
        path: "/",
        icon: "",
      },
    ],
  },
  {
    title: "Quick Links",
    path: "",
    subTitles: [
      {
        subTitle: "Track Your Order",
        path: "/",
        icon: "",
      },
      {
        subTitle: "About",
        path: "/about",
        icon: "",
      },
      {
        subTitle: "Shop",
        path: "/",
        icon: "",
      },
      {
        subTitle: "Blog",
        path: "/blog",
        icon: "",
      },
    ],
  },
  {
    title: "Help",
    path: "",
    subTitles: [
      {
        subTitle: "Terms & Conditions",
        path: "/",
        icon: "",
      },
      {
        subTitle: "Privacy Policy",
        path: "/",
        icon: "",
      },
      {
        subTitle: "Delivery & Return",
        path: "/",
        icon: "",
      },
      {
        subTitle: "Contact",
        path: "/contact",
        icon: "",
      },
    ],
  },
  {
    title: "Contact Us",
    path: "",
    subTitles: [
      {
        subTitle: "02223456262",
        path: "/",
        icon: phoneIcon,
      },
      {
        subTitle: "shillsweb123@gmail.com",
        path: "/",
        icon: mailIcon,
      },
      {
        subTitle: "9137202897",
        path: "/",
        icon: whatsAppIcon,
      },
    ],
  },
];
