import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import close from "../../assets/Product/Close.svg";
import TextField from "../CustomComponent/TextField";

const ForgotPassword = ({ open, handleClose }) => {
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
            variant="h4"
            p={0}
            sx={{
              fontSize: { xs: "1rem", md: "1.25rem" },
              fontWeight: "400",
            }}
          >
           Forget Password
          </Typography>
          <Box
            sx={{ cursor: "pointer" }}
            onClick={handleClose}
            height={{ xs: 35, sm: 45, md: 50 }}
          >
            <img src={close} alt="" height={"100%"} />
          </Box>
        </Box>

        <Box width={"100%"} px={{ md: 2, xs: 1 }} py={2}>
          <TextField
            label="Email"
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
        <Box
          width={"100%"}
          display={"flex"}
          gap={2}
          justifyContent={"center"}
          mt={{ xs: 2, md: 0 }}
          px={{ md: 2, xs: 1 }} py={2}
        >
          <Box width={'50%'}>
            <Button
              // onClick={()=>navigate(routes.login.paths[0])}
              variant="contained"
              sx={{
                width: "100%",
                height: "100%",
                bgcolor: "#fff",
                borderRadius: "25px",
                color: "#FF6C86",
                fontSize: { xs: ".7rem", sm: ".8rem", md: ".9rem" },
                textTransform: "capitalize",
                px: { xs: 1, sm: 2, md: 3 },
                py: 1,
                ":hover": {
                  bgcolor: "#fff",
                },
              }}
            >
              Cancel
            </Button>
          </Box>
          <Box width={'50%'}>
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
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default ForgotPassword;

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
