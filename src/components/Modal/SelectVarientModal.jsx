import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import close from "../../assets/Product/Close.svg";
import shade from "../../assets/Product/Shade1.png";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const SelectVarientModal = ({ open, handleClose }) => {
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
          px={{ md: 2, xs: 1 }}
          py={2}
        >
          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.25rem" },
              fontWeight: "400",
            }}
          >
            Select Variant
          </Typography>
          <Box
            sx={{ cursor: "pointer" }}
            onClick={handleClose}
            height={{ xs: 35, sm: 45, md: 50 }}
          >
            <img src={close} alt="" height={"100%"} />
          </Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          flexWrap={"wrap"}
          mb={4}
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((dt) => (
            <Box mx={2}>
              <Box height={{ xs: 35, md: 80 }}>
                <img src={shade} alt="" height={"100%"} width={"100%"} />
              </Box>
              <Typography
                sx={{
                  color: "#465152",
                  fontSize: { xs: ".7rem", md: ".85rem" },
                }}
              >
                Shade 014
              </Typography>
            </Box>
          ))}
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          gap={2}
          flexWrap={"wrap"}
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
          <Box minWidth={"150px"}>
            <Button
              // onClick={()=>navigate(routes.login.paths[0])}
              variant="contained"
              sx={{
                width: "100%",
                height: "100%",
                bgcolor: "#FF6C86",
                borderRadius: "25px",
                color: "#fff",
                fontSize: { xs: ".7rem", sm: ".8rem", md: ".9rem" },
                textTransform: "capitalize",
                px: { xs: 1, sm: 2, md: 3 },
                py: 1,
                ":hover": {
                  bgcolor: "#FF6C86",
                },
              }}
            >
              Add To Cart
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default SelectVarientModal;

const style = {
  // position: "absolute",
  // top: "50%",
  // left: "50%",
  // transform: "translate(-50%, -50%)",
  width: { xs: "70%", sm: "60%", md: "40%" },
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  //   height: "90%",
  overflow: "auto",
  p: 2,
};
