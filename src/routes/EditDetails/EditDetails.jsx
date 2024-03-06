import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import TextField from "../../components/CustomComponent/TextField";

const EditDetails = () => {
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
            sx={{ fontSize: { xs: "1.25rem",sm:"1.5rem", md: "2rem" }, fontWeight: "", textAlign: "center" }}
          >
            Edit Account Details
          </Typography>
          <Typography variant="h4" sx={{ fontSize: { xs: ".75rem",sm:".875", md: "1rem" }, fontWeight: "" }}>
            {"Home > My Account > Account Details > Edit Details"}
          </Typography>
        </Box>
      </Box>
      <Box
        minHeight={"70vh"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box
          mb={6}
          mt={4}
          p={{ xs: 2, md: 5 }}
          px={{ sm: 4, md: 6 }}
          sx={{
            bgcolor: "#fff",
            width: { xs: "85%", md: "50%", lg: "35%" },
            borderRadius: 3,
            boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.08)",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
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
              label="Mobile Number *"
              placeholder="Enter Mobile Number"
              // id="mobileNumber"
              name="mobileNumber"
              type="number"
              // value={formik.values.mobileNumber}
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              onWheel={(e) => e.target.blur()}
            />
          </Box>
          <Box mt={3}>
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
          <Box>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                width: "100%",
                bgcolor: "#FF6C86",
                borderRadius: "25px",
                color: "#fff",
                fontSize: { xs: ".8rem", sm: ".9rme", md: "1rem" },
                textTransform: "capitalize",
                px: 2,
                py: 1,
                ":hover": {
                  bgcolor: "#FF6C86",
                },
              }}
            >
              Verify Via OTP
            </Button>
          </Box>
          <Box>
            <Button
              variant="contained"
              // onClick={() => navigate(routes.register.paths[0])}
              sx={{
                mt: 2,
                width: "100%",
                bgcolor: "#fff",
                borderRadius: "25px",
                color: "#FF6C86",
                fontSize: { xs: ".8rem", sm: ".9rme", md: "1rem" },
                textTransform: "capitalize",
                px: 2,
                py: 1,
                boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.08)",
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
    </Box>
  );
};

export default EditDetails;
