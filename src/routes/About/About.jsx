import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import aboutImg from "../../assets/About/AboutImg.png";
import relationshipImg from "../../assets/About/handshake.svg";
import customerImg from "../../assets/About/review.svg";
import bestSellerImg from "../../assets/About/best-seller.svg";

const About = () => {
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
            About Us
          </Typography>
        </Box>
      </Box>
      <Grid
        container
        display={"flex"}
        flexDirection={{ md: "row", xs: "column-reverse" }}
      >
        <Grid item md={6}>
          <Box p={{ md: 8, xs: 4 }}>
            <Typography
              variant="h4"
              sx={{
                fontSize: "1.275rem",
                fontWeight: "500",
                color: "#FF6C86",
                my: 2,
                textAlign: { xs: "center", md: "start" },
              }}
            >
              Who are We?
            </Typography>
            {data.map((dt) => (
              <Typography
                variant="h4"
                sx={{
                  fontSize: ".9rem",
                  fontWeight: "400",
                  color: "#2D2C2C",
                  my: 1,
                  textAlign: { xs: "center", md: "start" },
                }}
              >
                {dt.desc}{" "}
              </Typography>
            ))}
          </Box>
        </Grid>
        <Grid
          item
          md={6}
          p={4}
          
          display={{ xs: "flex", md: "flex" }}
          justifyContent={"center"}
        >
          <Box maxWidth={{ xs:'55vw',md: "40vw" }}>
            <img
              src={aboutImg}
              alt=""
              height={"100%"}
              style={{ maxWidth: "100%" }}
            />
          </Box>
        </Grid>
      </Grid>
      <Box px={{ md: 8, xs: 4 }} my={2}>
        <Typography
          variant="h4"
          sx={{
            fontSize: "1.275rem",
            fontWeight: "400",
            color: "#FF6C86",
            my: 2,
            textAlign: { xs: "center" },
          }}
        >
          What we do
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontSize: ".9rem",
            fontWeight: "400",
            color: "#2D2C2C",
            my: 1,
            textAlign: { xs: "center" },
            px: { md: 12 },
          }}
        >
          Although we were known as a wholesaler for makeup and skincare
          products but in recent years we are well known for our artificial nail
          products, our range of products has dynamically expanded over the
          years. From Cosmetics to Skincare to nail art to Beauty, we at Shills
          Professionals provide one-stop solution for all your cosmetics,
          skincare and grooming needs. We adhere to the highest standards for
          maintaining quality in all our products. We regularly lounge & have
          updates & upgrades of our products.
        </Typography>
      </Box>
      <Box px={{ md: 8, xs: 4 }} my={8}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          flexWrap={"wrap"}
          gap={6}
        >
          {review.map((re) => (
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              minWidth={"300px"}
              maxWidth={"350px"}
            >
              <Box width={"60px"}>
                <img src={re.img} alt="" width={"100%"} />
              </Box>
              <Typography
                variant="h4"
                sx={{
                  fontSize: ".9rem",
                  fontWeight: "400",
                  color: "#2D2C2C",
                  my: 2,
                  textAlign: { xs: "center" },
                }}
              >
                {re.heading}
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontSize: ".9rem",
                  fontWeight: "400",
                  color: "#2D2C2C",
                  my: 2,
                  textAlign: { xs: "center" },
                }}
              >
                {re.desc}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default About;

const data = [
  {
    desc: "Shills professional founded in 2016 is an all-round beauty and skincare brand however since 2020 we are known as a nail-specializing company that offers to elevate your beauty standards. A huge growth can be witnessed in nails industry after the launch of Shills Professional.",
  },
  {
    desc: "We believe that the best marketing tool we can possibly have is a happy customer. We strive every day to make our customers feel valued and cherished, and they reward us by sharing their experience with friends and family. By continually engaging with customers, delivering innovative new products and, and focusing on consistent quality of products, we have made a mark on our customers who simply refuse to shop from anywhere else. We provide our customers A TOP QUALITY AT AN AFFORDABLE PRICE; you tend to get a lot in the product for what you pay. ",
  },
  {
    desc: "Nails have established a most prominent role in this beauty world in preparation for their shows, prominent designers work with various nail brands. And celebrity nail artists tend to design custom looks that complement the featured collection that season    ",
  },
  {
    desc: "Anywhere else.",
  },
  {
    desc: "Nails & beauty products",
  },
  {
    desc: "Sounds simple, but when you think about it,",
  },
  {
    desc: "”great nail polish” Shills professional up hold",
  },
  {
    desc: "Some pretty sophisticated qualities",
  },
];

const review = [
  {
    img: relationshipImg,
    heading: "Relationships",
    desc: "We have patents all over India. Honestly, professional quality as the core & customers first mutual benefit with the concept of mutual wins. We have personal relationship that builds a loyal",
  },
  {
    img: customerImg,
    heading: "Customers",
    desc: "We have 500+ dealers & 10,000+ satisfied customers In D2C (dealers to customers) we covers whole hog in every states",
  },
  {
    img: bestSellerImg,
    heading: "Bestsellers",
    desc: "Our exclusive range of gel polish are loved and cherished by our customers. Our company & products are all 100% certified. We are working together to build ‘SHILLS PROFESSIONAL’ A famous brand.",
  },
];
