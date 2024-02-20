import { Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import profilebg from "../../assets/Profile/Profilebg.png";
import Dashboard from "./Dashboard";
import Orders from "./Orders";

const Profile = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
            sx={{ fontSize: "2rem", fontWeight: "", textAlign: "center" }}
          >
            Hello, Lara Smith
          </Typography>
          <Typography variant="h4" sx={{ fontSize: "1rem", fontWeight: "" }}>
            {"Home > My Account > Dashboard"}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ position: "relative" }}>
        <img src={profilebg} alt="" width={"100%"} />
        <Box width={"100%"} display={"flex"} justifyContent={"center"}>
          <Box>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs value={value} onChange={handleChange}>
                <Tab label="Item One" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              Item One
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              Item Two
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              Item Three
            </CustomTabPanel>
          </Box>
        </Box>
      </Box>

      {/* <Dashboard/> */}
      <Orders/>
    </Box>
  );
};

export default Profile;

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
