import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import loginBanner from "../../assets/Login/LoginBg.png";
import TextField from "../../components/CustomComponent/TextField";
import { useNavigate } from "react-router-dom";
import routes from "../routes";

const Register = () => {
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
          width: { xs: "85%", md: "60%", lg: "35%" },
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
          Register
        </Typography>
        <Grid width={"100%"} mt={3}>
          <TextField
            label="Name *"
            placeholder="Enter Name"
            name="name"
            type="text"
            onWheel={(e) => e.target.blur()}
          />
        </Grid>
        
        <Grid width={"100%"} mt={3}>
          <TextField
            label="Mobile Number *"
            placeholder="Enter Mobile Number"
            name="mobile"
            type="number"
            onWheel={(e) => e.target.blur()}
          />
        </Grid>
        <Grid width={"100%"} mt={3}>
          <TextField
            label="Email"
            placeholder="Enter Email"
            name="email"
            type="email"
            onWheel={(e) => e.target.blur()}
          />
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
            Register
          </Button>
        </Grid>
        <Grid mb={8} mt={2}>
          <Button
          onClick={()=>navigate(routes.login.paths[0])}
            variant="contained"
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
           Already have an account?  &nbsp;{" "}
            <Box sx={{ color: "#FF6C86" }}> Login</Box>
          </Button>
        </Grid>
      </Box>
    </Box>
  );
};

export default Register;
