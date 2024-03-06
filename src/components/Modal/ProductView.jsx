import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  Modal,
  Rating,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import DummyImgBg from "../../assets/Product/productImgBig.png";
import DummyImgSm from "../../assets/Product/productImgBig.png";
import wishlist from "../../assets/navbar/Wishlist.svg";
import shade from "../../assets/Product/Shade1.png";
import close from "../../assets/Product/Close.svg";
import Instock from "../../assets/Product/Instock.svg";
import compare from "../../assets/Product/Compare.svg";
import attach from "../../assets/Product/attach.svg";
import fb from "../../assets/Product/fb.svg";
import whatsapp from "../../assets/Product/whatsapp.svg";
import twitter from "../../assets/Product/twitter.svg";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const ProductView = ({ open, handleClose }) => {
  const [imagesSrc, setImagesSrc] = useState(DummyImgBg);
  const images = [DummyImgSm, DummyImgSm, DummyImgSm, DummyImgSm];

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "none",
      }}
    >
      <Box sx={style}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          px={{ md: 6, xs: 3 }}
          py={2}
        >
          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.25rem" },
              fontWeight: "400",
            }}
          >
            Product Quick View
          </Typography>
          <Box sx={{ cursor: "pointer" }} onClick={handleClose} height={{ xs: 35, sm: 45, md: 50 }}>
            <img src={close} alt="" />
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
                  height: { xs: "35vh", md: "55vh" },
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
                  sx={{ height: { xs: "12vh", sm: "14vh", md: "16vh" } }}
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
                      fontSize: { xs: ".8rem",sm:'.9rem', md: "1rem" },
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
                        fontSize: { xs: "1rem", md: "1.25rem" },
                      }}
                      value={4}
                      readOnly
                    />
                    <Typography
                      sx={{
                        fontSize: { xs: ".65rem",sm:'.7rem', md: ".8rem" },
                        fontWeight: "400",
                        color: "#465152",
                      }}
                    >
                      1.1k Reviews
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ height: { xs: 18, md: 22 } }}>
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
                          fontSize={{ xs: ".65rem",sm:'.7rem', md: ".8rem" }}
                        >
                          {dt.name}:
                        </Typography>
                        <Typography
                          color={"#465152"}
                          fontSize={{ xs: ".65rem",sm:'.7rem', md: ".8rem" }}
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
                <img src={Instock} alt="" height={16} />
                <Typography
                  sx={{
                    color: "#25CF7E",
                    fontSize: { xs: ".7rem",sm:'.8rem', md: ".9rem" },
                  }}
                >
                  InStock
                </Typography>
              </Box>
              <Typography
                sx={{
                  color: "#FF6C86",
                  fontSize: { xs: ".9rem",sm:'1rem', md: "1.1rem" },
                }}
                my={2}
              >
                MRP : ₹330
              </Typography>
              <Typography
                sx={{
                  color: "#2D2C2C",
                  fontSize: { xs: ".9rem",sm:'1rem', md: "1.1rem" },
                }}
              >
                Gel polish 31-60
              </Typography>
              <Typography
                sx={{
                  color: "#858D97",
                  fontSize: { xs: ".75rem", md: ".85rem" },
                }}
                mb={2}
              >
                Available in 10 shades
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "start", sm: "start" },
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
                    p={1}
                    pl={0}
                    // minWidth={100}
                  >
                    <Box height={{ xs: 35, md: 60 }}>
                      <img src={shade} alt="" height={"100%"} />
                      <Typography
                        sx={{
                          color: "#465152",
                          fontSize: { xs: ".7rem", md: ".85rem" },
                        }}
                      >
                        Shade 014
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
              <Typography
                sx={{
                  color: "#465152",
                  fontSize: { xs: ".7rem",sm:".8rem", md: ".9rem" },
                }}
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
                        fontSize: { xs: ".7rem",sm:'.8rem', md: ".9rem" },
                        textTransform: "capitalize",
                        px: {xs:1,sm:2,md:3},
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
                        fontSize: { xs: ".7rem",sm:'.8rem', md: ".9rem" },
                        textTransform: "capitalize",
                        px: {xs:1,sm:2,md:3},
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
              >
                <Box display={"flex"} gap={2} alignItems={"center"}>
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
                      <img
                        src={twitter}
                        height={"100%"}
                        width={"100%"}
                        alt=""
                      />
                    </Box>
                  </Box>
                  <Box bgcolor={"#FFE9ED"} p={1} borderRadius={"50%"}>
                    <Box height={20} width={20}>
                      <img
                        src={whatsapp}
                        height={"100%"}
                        width={"100%"}
                        alt=""
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default ProductView;

const style = {
  // position: "absolute",
  // top: "50%",
  // left: "50%",
  // transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  height: "90%",
  overflow: "auto",
  //   p: 4,
};

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
