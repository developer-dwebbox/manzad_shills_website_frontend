import {
  Box,
  Button,
  Grid,
  LinearProgress,
  List,
  ListItem,
  Rating,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import DummyImgBg from "../../assets/Product/productImgBig.png";
import DummyImgSm from "../../assets/Product/productImgBig.png";
import Instock from "../../assets/Product/Instock.svg";
import wishlist from "../../assets/navbar/Wishlist.svg";
import shade from "../../assets/Product/Shade1.png";
import customerPhoto from "../../assets/Product/CustomerPhoto.png";
import compare from "../../assets/Product/Compare.svg";
import attach from "../../assets/Product/attach.svg";
import fb from "../../assets/Product/fb.svg";
import whatsapp from "../../assets/Product/whatsapp.svg";
import twitter from "../../assets/Product/twitter.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { CustomCarousel } from "../../components/Carousel/CustomCarousel";
import TextField from "../../components/CustomComponent/TextField";
import TextArea from "../../components/CustomComponent/TextArea";
import ProductCaousel from "../../components/Carousel/ProductCaousel";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const [imagesSrc, setImagesSrc] = useState(DummyImgBg);

  const images = [DummyImgSm, DummyImgSm, DummyImgSm, DummyImgSm];
  const navigate = useNavigate();
  return (
    <Box mb={4}>
      <Box
        bgcolor={"#FFF6F7"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box py={4}>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "1.25rem",sm:"1.5rem", md: "2rem" },
              fontWeight: "",
              textAlign: "center",
              mb:2,
            }}
          >
            Product Details
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontSize: { xs: ".75rem",sm:".875", md: "1rem" }, fontWeight: "" }}
          >
            {" "}
            {" Home > Shop > Nail Art > Gel Polish > Gel Polish 15ml 31-60"}
          </Typography>
        </Box>
      </Box>
      <Grid container px={{ md: 6, xs: 3 }} mt={4}>
        <Grid
          item
          md={6}
          xs={12}
          sx={{ px: { md: "1rem" }, overflow: "hidden" }}
        >
          <Grid container spacing={1}>
            <Grid
              item
              xs={12}
              sx={{
                aspectRatio: 1,
                height: { xs: "60vh", md: "100%" },
                display: "flex",
                justifyContent: "center",
              }}
            >
              <LazyLoadImage
                src={imagesSrc}
                effect="blur"
                // width="100%"
                height="100%"
                style={{ width: "100%", aspectRatio: 1, cursor: "pointer" }}
              />
            </Grid>
            {images.map((item) => (
              <Grid
                item
                key={item}
                xs={3}
                sx={{ height: { xs: "15vh", sm: "22vh", md: "100%" } }}
              >
                <LazyLoadImage
                  src={item}
                  effect="blur"
                  alt="product"
                  height="100%"
                  style={{ width: "100%", cursor: "pointer" }}
                  onClick={() => setImagesSrc(item)}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box
            sx={{
              borderRadius: 3,
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            }}
            p={4}
          >
            <Box display={"flex"} justifyContent={"space-between"}>
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: "1rem", md: "1.25rem" },
                    fontWeight: "400",
                  }}
                >
                  Gel Polish 15ml 31-60
                </Typography>
                <Box display={"flex"} alignItems={"center"} gap={2}>
                  <Rating
                    name="read-only"
                    sx={{
                      color: "#FFD480",
                      fontSize: { xs: "1.25rem", md: "1.75rem" },
                    }}
                    value={4}
                    readOnly
                  />
                  <Typography
                    sx={{
                      fontSize: { xs: ".75rem", md: ".9rem" },
                      fontWeight: "400",
                      color: "#465152",
                    }}
                  >
                    1.1k Reviews
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ height: { xs: 20, md: 25 } }}>
                <img src={wishlist} alt="" srcset="" height={"100%"} />
              </Box>
            </Box>
            <Box mt={2}>
              <List sx={{ listStyleType: "disc", pl: 2, pr: 0 }}>
                {data.map((dt) => (
                  <ListItem sx={{ display: "list-item", p: 0 }}>
                    <Box display={"flex"} gap={1}>
                      <Typography
                        color={"#465152"}
                        fontWeight={500}
                        fontSize={{ xs: ".75rem", md: ".9rem" }}
                      >
                        {dt.name}:
                      </Typography>
                      <Typography
                        color={"#465152"}
                        fontSize={{ xs: ".75rem", md: ".9rem" }}
                      >
                        {dt.value}
                      </Typography>
                    </Box>
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box
              p={2}
              display={"flex"}
              gap={1}
              alignItems={"center"}
              pl={{ xs: 0, md: 2 }}
            >
              <img src={Instock} alt="" height={18} />
              <Typography
                sx={{ color: "#25CF7E", fontSize: { xs: ".8rem", md: "1rem" } }}
              >
                InStock
              </Typography>
            </Box>
            <Typography
              sx={{ color: "#FF6C86", fontSize: { xs: "1rem", md: "1.25rem" } }}
              my={2}
            >
              MRP : ₹330
            </Typography>
            <Typography
              sx={{ color: "#2D2C2C", fontSize: { xs: "1rem", md: "1.25rem" } }}
            >
              Gel polish 31-60
            </Typography>
            <Typography
              sx={{
                color: "#858D97",
                fontSize: { xs: ".75rem", md: ".875rem" },
              }}
              mb={2}
            >
              Available in 10 shades
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "space-evenly", sm: "start" },
                flexWrap: "wrap",
                gap: { sm: 2, xs: 1 },
                my: 2,
              }}
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((dt) => (
                <Box
                  md={2}
                  display={"flex"}
                  justifyContent={"center"}
                  flexDirection = 'column'
                  p={1}
                  // pl={0}
                  // minWidth={100}
                >
                  <Box height={{ xs: 50, md: 90 }}  display={"flex"}
                  justifyContent={"center"}>
                    <img src={shade} alt="" height={"100%"} />
                  </Box>
                    <Typography
                      sx={{
                        color: "#465152",
                        fontSize: { xs: ".75rem", md: ".875rem",textAlign:'center' },
                      }}
                    >
                      Shade 014
                    </Typography>
                </Box>
              ))}
            </Box>
            <Typography
              sx={{ color: "#465152", fontSize: { xs: ".875rem", md: "1rem" } }}
              mb={2}
            >
              SKU: B1000
            </Typography>
            <Box
              sx={{
                display: "flex",
                // placeItems: "center",
                justifyContent: "space-between",
                width: "100%",
                gap: 2,
                flexDirection: { xs: "column", md: "row" },
              }}
              // pr={{md:8}}
            >
              <Box
                sx={{
                  display: "flex",
                  placeItems: "center",
                  // width: { xs: "100%" },
                }}
              >
                <Button
                  // disabled={quantity == 0 || parseInt(CARTNO)}
                  sx={{
                    color: "black",
                    backgroundColor: "#F2F4F9",
                    "&:hover": {
                      backgroundColor: "#D7F1FF",
                    },
                    borderRadius: 3,
                    minWidth: "auto",
                    minHeight: "auto",
                    aspectRatio: 1,
                  }}
                >
                  <RemoveIcon />
                </Button>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "3rem",
                    aspectRatio: 1,
                    backgroundColor: "#fff",
                  }}
                >
                  <input
                    value={0}
                    type="number"
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: "#fff",
                      textAlign: "center",
                      border: "none",
                      outline: "none",
                      fontSize: "130%",
                      color: "#465152",
                    }}
                    // disabled={INSTOCK == '0'}
                    onChange={(e) => {
                      if (e.target.value < 0) return;
                      // setQuantity(parseInt(e.target.value));
                    }}
                  />
                  {/* )} */}
                </Typography>
                <Button
                  // disabled={parseInt(CARTNO)}
                  sx={{
                    color: "black",
                    fontSize: "2rem",
                    backgroundColor: "#F2F4F9",
                    "&:hover": {
                      backgroundColor: "#D7F1FF",
                      // color: "#0281C6",
                    },
                    borderRadius: 3,
                    // borderBottomLeftRadius: 50,
                    minWidth: "auto",
                    minHeight: "auto",
                    // width: "3rem",
                    aspectRatio: 1,
                  }}
                  // onClick={() => {
                  //   setQuantity(quantity + parseInt(MOQ));
                  // }}
                >
                  <AddIcon />
                </Button>
              </Box>
              <Box
                width={"100%"}
                display={"flex"}
                gap={2}
                mt={{ xs: 2, md: 0 }}
              >
                <Box>
                  <Button
                    // onClick={()=>navigate(routes.login.paths[0])}
                    variant="contained"
                    sx={{
                      // width: "100%",
                      height: "100%",
                      bgcolor: "#FF6C86",
                      borderRadius: "25px",
                      color: "#fff",
                      fontSize: "1rem",
                      textTransform: "capitalize",
                      px: 3,
                      py: 1,
                      ":hover": {
                        bgcolor: "#FF6C86",
                      },
                    }}
                  >
                    Add To Cart
                  </Button>
                </Box>
                <Box>
                  <Button
                    // onClick={()=>navigate(routes.login.paths[0])}
                    variant="contained"
                    sx={{
                      width: "100%",
                      height: "100%",
                      bgcolor: "#FF6C86",
                      borderRadius: "25px",
                      color: "#fff",
                      fontSize: "1rem",
                      textTransform: "capitalize",
                      px: 3,
                      py: 1,
                      ":hover": {
                        bgcolor: "#FF6C86",
                      },
                    }}
                  >
                    Buy Now
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              flexWrap={"wrap"}
              my={2}
              gap={2}
            >
              <Box display={"flex"} gap={2} alignItems={"center"} onClick={()=>navigate('/compare')} sx={{cursor:'pointer'}}>
                <img src={compare} height={20} alt="" />
                <Typography sx={{ color: "#FF6C86", fontSize: ".9rem" }}>
                  Compare
                </Typography>
              </Box>
              <Box display={"flex"} gap={2} alignItems={"center"}>
                <Typography sx={{ color: "#465152", fontSize: ".9rem" }}>
                  Share:
                </Typography>
                <Box bgcolor={"#FFE9ED"} p={1} borderRadius={"50%"}>
                  <Box height={20} width={20}>
                    <img src={fb} height={"100%"} width={"100%"} alt="" />
                  </Box>
                </Box>
                <Box bgcolor={"#FFE9ED"} p={1} borderRadius={"50%"}>
                  <Box height={20} width={20}>
                    <img src={twitter} height={"100%"} width={"100%"} alt="" />
                  </Box>
                </Box>
                <Box bgcolor={"#FFE9ED"} p={1} borderRadius={"50%"}>
                  <Box height={20} width={20}>
                    <img src={whatsapp} height={"100%"} width={"100%"} alt="" />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Description */}
      <Box my={4} px={{ md: 6, xs: 3 }}>
        <Box
          sx={{
            borderRadius: 3,
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            padding: 4,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.5rem" },
              fontWeight: "400",
              mb: 1,
            }}
          >
            Description
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: ".75rem", md: ".9rem" },
              fontWeight: "400",
              color: "#2D2C2C",
              width: "90%",
              mb: 2,
            }}
          >
            Shills Professional’s Gel Polish boasts high
            pigmentation, ensuring a smooth and long-lasting application.
            Available in an impressive range of 240 vibrant colors, it comes in
            a convenient 15ml bottle. This polish doesn’t chip, fade, or lose
            its shine, making it perfect for both professional salons and
            individual customers. Plus, it’s crafted from healthy,
            environmentally friendly materials, free from poisonous or pungent
            chemicals
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.5rem" },
              fontWeight: "400",
              mb: 1,
            }}
          >
            How to Use
          </Typography>
          <Box mb={3}>
            {howToues.map((data, id) => (
              <Typography
                sx={{
                  fontSize: { xs: ".75rem", md: ".9rem" },
                  fontWeight: "400",
                  color: "#2D2C2C",
                  width: "90%",
                }}
              >
                {id + 1}. {data.val}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
      <Box my={4} px={{ md: 6, xs: 3 }}>
        <Box
          sx={{
            borderRadius: 3,
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            padding: { xs: 2, md: 4 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.5rem" },
                fontWeight: "400",
                mb: 1,
                textAlign: "center",
              }}
            >
              Customer Reviews
            </Typography>
            <Rating
              name="read-only"
              sx={{
                color: "#FFD480",
                mb: 1,
                fontSize: { xs: "1.25rem", md: "1.75rem" },
              }}
              value={4}
              readOnly
            />
            <Typography
              sx={{
                fontSize: { xs: ".75rem", md: ".9rem" },
                fontWeight: "400",
                color: "#465152",
              }}
            >
              1.1k Reviews
            </Typography>
          </Box>
          <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
            {[0, 1, 2, 3, 4].map((data) => (
              <Box display={"flex"} alignItems={"center"} gap={2}>
                <Rating
                  name="read-only"
                  sx={{
                    color: "#FFD480",
                    fontSize: { xs: "1.25rem", md: "1.75rem" },
                  }}
                  value={4}
                  readOnly
                />
                <Box width={{ xs: 175, md: 275 }}>
                  <LinearProgress
                    value={50 - data * 6}
                    variant="determinate"
                    sx={{ height: 8, borderRadius: 5, background: "#d9d9d991" }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontSize: { xs: ".75rem", md: ".9rem" },
                    fontWeight: "400",
                    color: "#465152",
                  }}
                >
                  1.1k
                </Typography>
              </Box>
            ))}
          </Box>
          <Box my={4}>
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.25rem" },
                fontWeight: "400",
                mb: 3,
              }}
            >
              Customer Photos
            </Typography>
            <CustomCarousel items={{ lg: 5, md: 4, sm: 3, xs: 3 }}>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((dt) => (
                <Box key={dt} minWidth={{ xs: 100, md: 150 }}>
                  <img src={customerPhoto} alt="" width={"100%"} />
                </Box>
              ))}
            </CustomCarousel>
            <Grid my={4} container>
              <Grid item md={6} p={2}>
                {reviews.map((review) => (
                  <Box py={2} borderBottom={"1px solid grey"}>
                    <Box display={"flex"} gap={2} alignItems={"center"}>
                      <Typography
                        sx={{
                          fontSize: { xs: ".9rem", md: "1.1rem" },
                          fontWeight: "500",
                        }}
                      >
                        {review.name}
                      </Typography>
                      <Box
                        color={"#fff"}
                        bgcolor={
                          review.reviewPoints >= 4
                            ? "#66D97F"
                            : review.reviewPoints >= 2
                            ? "#FFD074"
                            : "red"
                        }
                        width={"fit-content"}
                        display={"flex"}
                        // p={1}
                        px={{ xs: 1, md: 3 }}
                        gap={1}
                        borderRadius={25}
                        fontSize={{ xs: ".9rem", md: "1.1rem" }}
                      >
                        {review.reviewPoints}{" "}
                        <Typography fontSize={{ xs: ".9rem", md: "1rem" }}>
                          ★
                        </Typography>
                      </Box>
                    </Box>
                    <Typography
                      sx={{
                        fontSize: { xs: ".9rem", md: "1rem" },
                        fontWeight: "500",
                        color: "#2D2C2C",
                      }}
                    >
                      {review.date}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: ".8rem", md: ".9rem" },
                        fontWeight: "400",
                        color: "#2D2C2C",
                        mt: 2,
                      }}
                    >
                      {review.review}
                    </Typography>

                    <Box display={"flex"} gap={2}>
                      {review?.images?.map((dt) => (
                        <Box
                          height={{ xs: 100, md: 150 }}
                          width={{ xs: 100, md: 150 }}
                          bgcolor={"#D9D9D9"}
                          borderRadius={1}
                          mt={4}
                        />
                      ))}
                    </Box>
                  </Box>
                ))}
                <Typography
                  sx={{
                    fontSize: { xs: ".8rem", md: ".9rem" },
                    fontWeight: "600",
                    color: "#FF6C86",
                    cursor: "pointer",
                    mt: 2,
                  }}
                >
                  View more reviews
                </Typography>
              </Grid>
              <Grid item md={6} width={"100%"}>
                <Box p={2}>
                  <Typography
                    sx={{
                      fontSize: { xs: "1rem", md: "1.25rem" },
                      fontWeight: "400",
                      mb: 3,
                    }}
                  >
                    Submit a review
                  </Typography>
                  <Box display={"flex"} gap={1} alignItems={"center"} mt={1}>
                    <Typography
                      sx={{
                        fontSize: { xs: ".8rem", md: ".9rem" },
                        fontWeight: "400",
                        width: 140,
                      }}
                    >
                      Overall rating *
                    </Typography>
                    <Rating
                      name="read-only"
                      sx={{ color: "#FFD480" }}
                      value={0}
                    />
                  </Box>
                  <Box display={"flex"} gap={1} alignItems={"center"} mt={1}>
                    <Typography
                      sx={{
                        fontSize: { xs: ".8rem", md: ".9rem" },
                        fontWeight: "400",
                        width: 140,
                      }}
                    >
                      Value for money
                    </Typography>
                    <Rating
                      name="read-only"
                      sx={{ color: "#FFD480" }}
                      value={0}
                    />
                  </Box>
                  <Box display={"flex"} gap={1} alignItems={"center"} mt={1}>
                    <Typography
                      sx={{
                        fontSize: { xs: ".8rem", md: ".9rem" },
                        fontWeight: "400",
                        width: 140,
                      }}
                    >
                      Durability
                    </Typography>
                    <Rating
                      name="read-only"
                      sx={{ color: "#FFD480" }}
                      value={0}
                    />
                  </Box>
                  <Box display={"flex"} gap={1} alignItems={"center"} mt={1}>
                    <Typography
                      sx={{
                        fontSize: { xs: ".8rem", md: ".9rem" },
                        fontWeight: "400",
                        width: 140,
                      }}
                    >
                      Delivery speed
                    </Typography>
                    <Rating
                      name="read-only"
                      sx={{ color: "#FFD480" }}
                      value={0}
                    />
                  </Box>
                  <Box mt={3}>
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
                  <Box mt={3}>
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
                  <Box mt={3}>
                    <TextField
                      label="Email *"
                      placeholder="Enter Email"
                      // id="mobileNumber"
                      name="mobileNumber"
                      type="email"
                      // value={formik.values.mobileNumber}
                      // onChange={formik.handleChange}
                      // onBlur={formik.handleBlur}
                      onWheel={(e) => e.target.blur()}
                    />
                  </Box>
                  <Box display={"flex"} gap={3} mt={2}>
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: "#FF6C86",
                        borderRadius: "25px",
                        color: "#fff",
                        fontSize: { xs: ".75rem",sm:'.9rem', md: "1rem" },
                        textTransform: "capitalize",
                        px: { xs: 2, md: 4 },
                        py: 1,
                        ":hover": {
                          bgcolor: "#FF6C86",
                        },
                      }}
                    >
                      Submit Review
                    </Button>
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      gap={1}
                      sx={{ cursor: "pointer" }}
                    >
                      <img src={attach} alt="" height={18} />
                      <Typography sx={{ color: "#FF6C86", fontSize: ".9rem" }}>
                        Attach files
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
          <Box my={4}>
            <ProductCaousel title="Recommended" />
          </Box>
      </Box>
    </Box>
  );
};

export default ProductDetails;

const data = [
  {
    name: "Brand Name",
    value: "Shills Professional",
  },
  {
    name: "Product Name",
    value: "Gel Polish 15ml 31-60",
  },
  {
    name: "Color",
    value: "Shade 31-60",
  },
  {
    name: "Item Form",
    value: "Gel",
  },
  {
    name: "Finish Type",
    value: "Matte",
  },
  {
    name: "Net Wt.",
    value: " 15ml",
  },
];

const howToues = [
  {
    id: 1,
    val: "Prepare the nails by cleaning them or removing old nail polish.",
  },
  {
    id: 1,
    val: "Push back the cuticles and clean the surrounding nail plate.",
  },
  {
    id: 1,
    val: "Shape the nails with a file.",
  },
  {
    id: 1,
    val: "Lightly buff the nails with a nail buffer.",
  },
  {
    id: 1,
    val: "Remove the dust and wipe the nails with Nail Cleanser using a lint-free wipe.",
  },
  {
    id: 1,
    val: "Apply Gel Polish base coat in a very thin layer, ensuring to seal the edges of the nails.",
  },
  {
    id: 1,
    val: "Apply Gel Polish base coat in a very thin layer, ensuring to seal the edges of the nails.",
  },
  {
    id: 1,
    val: "Apply Gel Polish base coat in a very thin layer, ensuring to seal the edges of the nails.",
  },
];

const reviews = [
  {
    name: "Lara Smith",
    reviewPoints: 5,
    date: "20 December 2023",
    review:
      "I am thoroughly impressed with both their products and customer service. The entire shopping experience exceeded my expectations.  ",
    images: [1, 2],
  },
  {
    name: "Michael Parker",
    reviewPoints: 3,
    date: "20 December 2023",
    review:
      "While the overall experience was positive, there were a couple of minor issues. I had a question about the product, and it took a bit longer than expected to receive a response from customer service.",
    // images: [1, 2],
  },
];
