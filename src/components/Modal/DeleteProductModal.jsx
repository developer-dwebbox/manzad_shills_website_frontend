import { Box, Button, Modal } from "@mui/material";
import React from "react";

const DeleteProductModal = ({ open, handleClose }) => {
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
          width={"100%"}
          display={"flex"}
          gap={2}
          justifyContent={"center"}
          mt={{ xs: 2, md: 0 }}
          px={{ md: 2, xs: 1 }}
          py={2}
        >
          <Box width={"50%"}>
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
          <Box width={"50%"}>
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
        </Box>
      </Box>
    </Modal>
  );
};

export default DeleteProductModal;
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
