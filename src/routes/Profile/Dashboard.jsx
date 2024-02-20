import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import orders from "../../assets/Profile/package.svg";
import download from "../../assets/Profile/download.svg";
import address from "../../assets/Profile/address.svg";
import accDetails from "../../assets/Profile/account.svg";
import wishlist from "../../assets/Profile/wishlist.svg";
import logout from "../../assets/Profile/logout.svg";

const Dashboard = () => {
  return (
    <Box px={6} mt={4} minHeight={"90vh"}>
      <Grid container>
        {cardItems.map((item) => (
          <Grid items p={2} md={4} xs={12} sm={6}>
            <Box
              sx={{
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                py: 5,
                borderRadius:3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box height={40}>
                <img src={item.icon} alt="" height={"100%"} />
              </Box>
              <Typography sx={{ fontSize: "1.1rem", fontWeight: "400" }}>
                {item.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;

const cardItems = [
  {
    icon: orders,
    name: "Orders",
  },
  {
    icon: download,
    name: "Downloads",
  },
  {
    icon: address,
    name: "Address",
  },
  {
    icon: accDetails,
    name: "Account Details",
  },
  {
    icon: wishlist,
    name: "Wishlist",
  },
  {
    icon: logout,
    name: "Logout",
  },
];
