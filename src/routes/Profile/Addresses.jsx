import { Box, Button, Typography } from "@mui/material";
import React from "react";
import editIcon from "../../assets/Profile/edit.svg";
import Profile from "./Profile";
import { useLocation } from "react-router-dom";

const Addresses = () => {
  const location  = useLocation();
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
          Your Addresses
        </Typography>
        <Box mt={4}>
          <Typography
            sx={{
              fontSize: { xs: "0.95rem", sm: "1.05rme", md: "1.2rem" },
              fontWeight: "400",
              textAlign: "start",
              color: "#2D2C2C",
            }}
          >
            Shipping Addresses
          </Typography>
          <hr style={{ borderTop: "1px solid #00000040", marginTop: "25px" }} />
          {addresses.map((data) => (
            <>
              <Box
                p={{ xs: 1, sm: 2, md: 3 }}
                display={"flex"}
                justifyContent={"space-between"}
              >
                <Box width={{ sm: "40%" }} minWidth={{md:350}}>
                  <Typography
                    sx={{
                      fontSize: { xs: "0.95rem", sm: "1.05rme", md: "1.1rem" },
                      fontWeight: "500",
                      textAlign: "start",
                      color: "#2D2C2C",
                    }}
                  >
                    {data.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "0.75rem", sm: ".825rme", md: ".9rem" },
                      fontWeight: "400",
                      textAlign: "start",
                      color: "#2D2C2C",
                    }}
                  >
                    {data.phone}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "0.75rem", sm: ".825rme", md: ".9rem" },
                      fontWeight: "400",
                      textAlign: "start",
                      color: "#2D2C2C",
                      width: { xs: "90%", sm: "75%", md: "60%" },
                    }}
                  >
                    {data.address}
                  </Typography>
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    sx={{
                      width: "100%",
                      mt: 2,
                      bgcolor: "#FF6C86",
                      borderRadius: "25px",
                      color: "#fff",
                      fontSize: { xs: ".8rem", sm: ".95rme", md: "1.05rem" },
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
              </Box>
              <hr
                style={{ borderTop: "1px solid #00000040", marginTop: "25px" }}
              />
            </>
          ))}
        </Box>
        <Box mt={6}>
          <Typography
            sx={{
              fontSize: { xs: "0.95rem", sm: "1.05rme", md: "1.2rem" },
              fontWeight: "400",
              textAlign: "start",
              color: "#2D2C2C",
            }}
          >
            Billing Addresses
          </Typography>
          <hr style={{ borderTop: "1px solid #00000040", marginTop: "25px" }} />
          {addresses.map((data) => (
            <>
              <Box
                p={{ xs: 1, sm: 2, md: 3 }}
                display={"flex"}
                justifyContent={"space-between"}
              >
                <Box width={{ sm: "40%" }} minWidth={{md:350}}>
                  <Typography
                    sx={{
                      fontSize: { xs: "0.95rem", sm: "1.05rme", md: "1.1rem" },
                      fontWeight: "500",
                      textAlign: "start",
                      color: "#2D2C2C",
                    }}
                  >
                    {data.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "0.75rem", sm: ".825rme", md: ".9rem" },
                      fontWeight: "400",
                      textAlign: "start",
                      color: "#2D2C2C",
                    }}
                  >
                    {data.phone}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "0.75rem", sm: ".825rme", md: ".9rem" },
                      fontWeight: "400",
                      textAlign: "start",
                      color: "#2D2C2C",
                      width: { xs: "90%", sm: "75%", md: "60%" },
                    }}
                  >
                    {data.address}
                  </Typography>
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    sx={{
                      width: "100%",
                      mt: 2,
                      bgcolor: "#FF6C86",
                      borderRadius: "25px",
                      color: "#fff",
                      fontSize: { xs: ".8rem", sm: ".95rme", md: "1.05rem" },
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
              </Box>
              <hr
                style={{ borderTop: "1px solid #00000040", marginTop: "25px" }}
              />
            </>
          ))}
        </Box>
        {/* <Box mt={6}>
          <Typography
            sx={{
              fontSize: "1.2rem",
              fontWeight: "400",
              textAlign: "start",
              color: "#2D2C2C",
            }}
          >
            Billing Addresses
          </Typography>
          <hr style={{ borderTop: "1px solid #00000040", marginTop: "25px" }} />
          {addresses.map((data) => (
            <>
              <Box p={3} display={"flex"} justifyContent={"space-between"}>
                <Box width={"40%"}>
                  <Typography
                    sx={{
                      fontSize: "1.1rem",
                      fontWeight: "500",
                      textAlign: "start",
                      color: "#2D2C2C",
                    }}
                  >
                    {data.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: ".9rem",
                      fontWeight: "400",
                      textAlign: "start",
                      color: "#2D2C2C",
                    }}
                  >
                    {data.phone}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: ".9rem",
                      fontWeight: "400",
                      textAlign: "start",
                      color: "#2D2C2C",
                      width: "60%",
                    }}
                  >
                    {data.address}
                  </Typography>
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    sx={{
                      width: "100%",
                      mt: 2,
                      bgcolor: "#FF6C86",
                      borderRadius: "25px",
                      color: "#fff",
                      fontSize: "1rem",
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
              </Box>
              <hr
                style={{ borderTop: "1px solid #00000040", marginTop: "25px" }}
              />
            </>
          ))}
        </Box> */}
      </Box>
    </Box>
    </Box>
  );
};

export default Addresses;

const addresses = [
  {
    name: "Lara Smith",
    phone: "+12654987845",
    address: "789 Meadow Lane SW, Suite 201, Washington, DC 20005, USA",
  },
];
