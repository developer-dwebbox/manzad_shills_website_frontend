import { Box, Link, Tab, Tabs, Typography } from "@mui/material";
import React, { Suspense, useEffect } from "react";
import profilebg from "../../assets/Profile/Profilebg.png";
import profileImg from "../../assets/Profile/ProfileImg.png";
// import Dashboard from "./Dashboard";
// import Orders from "./Orders";
// import Addresses from "./Addresses";
// import AccountDetails from "./AccountDetails";
import { Route, Routes, useLocation } from "react-router-dom";
import OutletComponent from "../../components/OutletComponent";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const Profile = ({ location }) => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  // const location = useLocation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // useEffect(() => {
  //   navigate("/profile/dashboard");
  // }, []);
  console.log(location, "pathname");
  return (
    <Box mb={8}>
      <Box
        bgcolor={"#FFF6F7"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box py={4}>
          <Typography
            variant="h4"
            sx={{ fontSize: "2rem", fontWeight: "", textAlign: "center" }}
          >
            Hello, Lara Smith
          </Typography>
          <Typography variant="h4" sx={{ fontSize: "1rem", fontWeight: "" }}>
            {"Home > My Account > Dashboard"}
          </Typography>
        </Box>
      </Box>
      <Box>
        {/* <Box sx={{height:150,width:150, borderRadius:'50%',border:'1px solid #fff',position:'absolute',top:0,zIndex:10}}>
          <img src={profileImg} height={'100%'} width={'100%'} alt="" />
        </Box> */}
        <Box
          sx={{ position: "relative" }}
          borderBottom={"1px solid #00000033"}
          height={"24vh"}
        >
          <img src={profilebg} alt="" width={"100%"} height={"100%"} />
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          // paddingRight={6}
          borderBottom={"1px solid #00000033"}
          flexWrap={"wrap"}
          // gap={4}
        >
          <Box display={"flex"} gap={4} flexWrap={'wrap'}>
            <Box
              position={"relative"}
              minWidth={150}
              minHeight={50}
              // bgcolor={"red"}
            >
              <Box
              sx={{
                height: 150,
                width: 150,
                borderRadius: "50%",
                border: "1px solid #fff",
                position: "absolute",
                top: '-140%',
                zIndex: 10,
              }}
            >
              <img src={profileImg} height={"100%"} width={"100%"} alt="" />
            </Box>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"} gap={{sx:0,md:4}} flex={1} minWidth={'750px'} overflow={'auto'}>
              {profileRoute.map((_route) => (
                <Link
                  component={RouterLink}

                  to={_route.path}
                  sx={{
                    padding: 2,
                    minWidth:50,
                    borderRadius: 8,
                    px: 3,
                    bgcolor: `${location === _route.path ? "#FF6C86" : ""}`,
                    color: `${location === _route.path ? "#fff" : "#000"}`,
                    textDecoration: "none",
                  }}
                >
                  {_route.name}
                </Link>
              ))}
              <Link
                component={RouterLink}
                to={"/"}
                sx={{
                  padding: 2,
                  borderRadius: 8,
                  px: 3,
                  color: `${"#000"}`,
                  textDecoration: "none",
                }}
              >
                Logout
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;

const profileRoute = [
  {
    // component: <Dashboard />,
    name: "Dashboard",
    path: "/profile/dashboard",
  },
  {
    // component: <Orders />,
    name: "Orders",
    path: "/profile/order",
  },
  {
    // component: <Dashboard />,
    name: "Downloads",
    path: "/profile/download",
  },
  {
    // component: <Addresses />,
    name: "Address",
    path: "/profile/address",
  },
  {
    // component: <AccountDetails />,
    name: "Account Details",
    path: "/profile/account",
  },
];
