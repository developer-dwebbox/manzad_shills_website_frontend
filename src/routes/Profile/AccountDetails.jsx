import { Box, Button, Typography } from "@mui/material";
import React from "react";
import editIcon from "../../assets/Profile/edit.svg";
import TextField from "../../components/CustomComponent/TextField";
import Profile from "./Profile";
import { useLocation } from "react-router-dom";

const AccountDetails = () => {
  const location =  useLocation();
  return (
    <Box>
      <Profile location = {location.pathname}/>
      <Box px={{ xs: 2, sm: 4, md: 16 }} my={4}>
        <Box
          minHeight={"90vh"}
          sx={{
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            borderRadius: 3,
            padding: 2,
            px: { xs: 1, sm: 3, md: 6 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "1rem", sm: "1.25rme", md: "1.5rem" },
              fontWeight: "400",
              textAlign: "center",
              color: "#2D2C2C",
            }}
          >
            Your Profile
          </Typography>
          <Box mt={4}>
            <Box
              display={"flex"}
              justifyContent={"center"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <Typography
                sx={{
                  fontSize: { xs: ".9rem", sm: "1.1rme", md: "1.25rem" },
                  fontWeight: "500",
                  textAlign: "center",
                  color: "#2D2C2C",
                }}
              >
                Lara Smith
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: ".7rem", sm: ".8rme", md: ".9rem" },
                  fontWeight: "400",
                  textAlign: "center",
                  color: "#2D2C2C",
                }}
              >
                lara.smith564@xyz.com
              </Typography>
              <Box my={1}>
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    bgcolor: "#FF6C86",
                    borderRadius: "25px",
                    color: "#fff",
                    fontSize: { xs: ".8rem", sm: ".9rme", md: "1rem" },
                    textTransform: "capitalize",
                    px: 3,
                    py: 1,
                    boxShadow: "none",
                    display: "flex",
                    gap: 2,
                    ":hover": {
                      bgcolor: "#FF6C86",
                    },
                  }}
                >
                  <img src={editIcon} alt="" />
                  Edit
                </Button>
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: ".9rem", sm: "1.1rme", md: "1.25rem" },
                  fontWeight: "400",
                  textAlign: "center",
                  color: "#2D2C2C",
                  mt: 3,
                }}
              >
                Change Password
              </Typography>
            </Box>
            <Box mt={2} px={{ xs: 1, sm: 6, md: 8 }}>
              <Box mt={1}>
                <TextField
                  label="Current Password"
                  // placeholder="Enter Password"
                  id="password"
                  name="password"
                  type="password"
                  // value={formik.values.password}
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                />
              </Box>
              <Box mt={1}>
                <TextField
                  label="Current Password"
                  // placeholder="Enter Password"
                  id="password"
                  name="password"
                  type="password"
                  // value={formik.values.password}
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                />
              </Box>
              <Box mt={1}>
                <TextField
                  label="Current Password"
                  // placeholder="Enter Password"
                  id="password"
                  name="password"
                  type="password"
                  // value={formik.values.password}
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                />
              </Box>
              <Box display={"flex"} justifyContent={"center"}>
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    bgcolor: "#FF6C86",
                    borderRadius: "25px",
                    color: "#fff",
                    fontSize: { xs: ".8rem", sm: ".9rme", md: "1rem" },
                    textTransform: "capitalize",
                    px: 4,
                    py: 1,
                    boxShadow: "none",
                    display: "flex",
                    gap: 2,
                    ":hover": {
                      bgcolor: "#FF6C86",
                    },
                  }}
                >
                  Change Password
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AccountDetails;
