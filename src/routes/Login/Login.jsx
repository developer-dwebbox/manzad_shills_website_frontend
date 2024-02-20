import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import loginBanner from "../../assets/Login/LoginBg.png";
import TextField from "../../components/CustomComponent/TextField";
import { useNavigate } from "react-router-dom";
import routes from "../routes";

const Login = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        bgcolor: "#D9E7F5",
        backgroundImage: `url(${loginBanner})`,
        // height: { xs: "80dvh", md: "90dvh" },
        display: "flex",
        alignItems: { xs: "center", md: "end" },
        flexDirection: "column",
      }}
    >
      <Box
        mb={6}
        mt={4}
        mr={{ xs: 0, md: 6 }}
        p={{ xs: 2, md: 6 }}
        px={{ sm: 4, md: 5 }}
        sx={{
          bgcolor: "#fff",
          width: { xs: "85%", md: "50%", lg: "35%" },
          borderRadius: 3,
          boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.08)",
          display: "flex",
          justifyContent: "center",
          // alignItems: "center",
          flexDirection: "column",
          mb: 16,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: "2rem",
            lineHeight: "3rem",
            color: "#FF6C86",
            textAlign: "center",
          }}
        >
          Login
        </Typography>
        <Grid width={"100%"} mt={3}>
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
        </Grid>
        <Grid my={3} width={"100%"}>
          <TextField
            label="Password"
            placeholder="Enter Password"
            id="password"
            name="password"
            type="password"
            // value={formik.values.password}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
          />
        </Grid>
        <Grid mt={2}>
          <Typography
            // onClick={() => handleOpen()}
            gutterBottom={true}
            sx={{
              color: "#FF6C86",
              cursor: "pointer",
              fontWeight: "400",
              borderBottom: "1px solid",
              borderBottomWidth: "1px",
              width: "fit-content",
              "&:hover": {
                // color: "#EE7F1C",
              },
            }}
          >
            Forgot password
          </Typography>
        </Grid>
        <Grid mt={2}>
          <Button
            variant="contained"
            sx={{
              mt: 2,
              width: "100%",
              bgcolor: "#FF6C86",
              borderRadius: "25px",
              color: "#fff",
              fontSize: "1rem",
              textTransform: "capitalize",
              px: 2,
              py: 1,
              ":hover": {
                bgcolor: "#FF6C86",
              },
            }}
          >
            Login
          </Button>
        </Grid>
        <Grid mb={8} mt={2}>
          <Button
            variant="contained"
            onClick={() => navigate(routes.register.paths[0])}
            sx={{
              mt: 2,
              width: "100%",
              bgcolor: "#fff",
              borderRadius: "25px",
              color: "#858D97",
              fontSize: "1rem",
              textTransform: "capitalize",
              px: 2,
              py: 1,
              ":hover": {
                bgcolor: "#fff",
              },
            }}
          >
            Don’t have an account? &nbsp;{" "}
            <Box sx={{ color: "#FF6C86" }}> Register</Box>
          </Button>
        </Grid>
      </Box>
    </Box>
  );
};

export default Login;
