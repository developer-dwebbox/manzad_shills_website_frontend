import React from "react";

import QuickLinks from "./QuickLinks";
import logo from "../assets/Logo/Logo.svg";
import close from "../assets/Product/Close.svg";
import search from "../assets/navbar/Search.svg";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { QuickLinksData } from "./QuickLinks";

import {
  AppBar,
  Box,
  Button,
  Collapse,
  Drawer,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Toolbar,
  Typography,
  alpha,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import routes from "../routes/routes";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const Navbar = (props) => {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openIdx, setOpenIdx] = React.useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", height: "100%" }}
    >
      <Box
        bgcolor={"#FFE9ED"}
        height={"12%"}
        display={"flex"}
        justifyContent={"space-between"}
        px={2}
      >
        <img src={logo} width={80} alt="" />
        <img src={close} width={30} alt="" style={{cursor:'pointer'}}/>
      </Box>
      <Box>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/hot-deals")}>
              <ListItemText primary={"Hot Deals"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/shop")}>
              <ListItemText primary={"Shop"} />
            </ListItemButton>
          </ListItem>
          {QuickLinksData.map((data) => (
            <>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    if (data.id === openIdx) {
                      setOpenIdx(null);
                    } else {
                      setOpenIdx(data.id);
                    }
                    setMobileOpen(!mobileOpen);
                  }}
                >
                  <ListItemText primary={data.name} />
                  {openIdx === data.id ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              </ListItem>
              <Collapse in={openIdx === data.id} timeout="auto" unmountOnExit>
                <List sx={{ padding: "0 15px" }}>
                  {data.subLinks.map((item) => (
                    <ListItemButton
                      sx={{ textAlign: "left" }}
                      onClick={() => {
                        navigate(item.path);
                        // setOpenSubMenu(!openSubMenu);
                      }}
                    >
                      <ListItemText primary={item.subLinkName} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </>
          ))}
        </List>
      </Box>
    </Box>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <AppBar
        position="static"
        sx={{
          bgcolor: "#FFE9ED",
          height: "7dvh",
          justifyContent: "center",
          boxShadow: "none",
          padding: "0 40px",
        }}
      ></AppBar>

      <AppBar
        component="nav"
        position="static"
        sx={{
          bgcolor: "#fff",
          color: "#2D2C2C",
          height: { xs: "15vh", sm: "20vh" },
          justifyContent: "center",
          boxShadow: "none",
          padding: { xs: "10px", lg: "0 40px" },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingX: { xs: 0, sm: 1 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              minWidth: { md: "45%", lg: "30%" },
              justifyContent: "space-between",
            }}
          >
            <IconButton
              size="large"
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: { sm: 2 }, display: { lg: "none" }, color: "black" }}
            >
              <MenuIcon fontSize="50px" />
            </IconButton>
            <Box
              sx={{
                display: { sm: "block" },
                width: { xs: 70, sm: 80, md: 90, lg: 110 },
                cursor: "pointer",
              }}
              onClick={() => navigate(routes.home.paths[0])}
            >
              <img src={logo} alt="" width={"100%"} />
            </Box>
            {navItems.map((item, idx) => (
              <Typography
                key={idx}
                display={{ xs: "none", md: "flex" }}
                variant="div"
                fontSize={"1rem"}
                fontWeight={"400"}
                color={"#000"}
              >
                <Link
                  to={item.path}
                  style={{ textDecoration: "none" }}
                  color={`#000`}
                >
                  {item.name}
                </Link>
              </Typography>
            ))}
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            minWidth={{ xs: "65%", md: "45%" }}
          >
            <Search>
              <Paper
                component={"form"}
                sx={{
                  borderRadius: 20,
                  border: "1px solid #FF6C86",
                  boxShadow: "none",
                }}
              >
                <SearchField
                  id="search"
                  type="search"
                  placeholder="Search for products"
                  // onChange={(e) => setSearchText(e.target.value)}
                  // value={searchText}
                  sx={{
                    width: "100%",
                    borderRadius: 50,
                    bgcolor: "#fff",
                    outline: "none",
                    border: "none",
                    padding: "0 10px",
                    height: "3em",
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        sx={{ cursor: "pointer" }}
                        // onSubmit={() => {
                        //   if (searchText.trim()) {
                        //     navigate(`/search/${searchText.trim()}`);
                        //   }
                        // }}
                      >
                        <IconButton type="submit" onClick={()=>navigate('/search')}>
                          <img src={search} alt="" height={20} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Paper>
            </Search>
            <Box
              sx={{
                display: { xs: "none", lg: "flex" },
                height: "100%",
                alignItems: "center",
                minWidth: { md: "20%" },
              }}
            >
              <Box
                mx={2}
                height={"100%"}
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Button
                  onClick={() => navigate(routes.login.paths[0])}
                  variant="contained"
                  sx={{
                    width: "100%",
                    height: "100%",
                    bgcolor: "#FF6C86",
                    borderRadius: "25px",
                    color: "#fff",
                    fontSize: "1rem",
                    textTransform: "capitalize",
                    px: 3,
                    py: 1,
                    ":hover": {
                      bgcolor: "#FF6C86",
                    },
                  }}
                >
                  Login/Register
                </Button>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <QuickLinks />
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: { xs: 280, sm: 280 },
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </div>
  );
};

export default Navbar;

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Hot Deals",
    path: "/hot-deals",
  },
  {
    name: "Shop",
    path: "/shop",
  },
];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  // marginRight: theme.spacing(2),
  marginLeft: theme.spacing(2),
  width: "100%",
  transform: "scale(.85)",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "100%",
    transform: "scale(1)",
  },
  [theme.breakpoints.up("md")]: {
    width: "55ch",
  },
}));

export const SearchField = styled(TextField)(() => ({
  "& fieldset": {
    border: "none", // Remove the border
  },
  "&:hover fieldset": {
    border: "none", // Remove the border on hover
  },
  "&.Mui-focused fieldset": {
    border: "none", // Remove the border when focused
  },
  "& MuiInputBase-input": {
    padding: "0",
  },
}));
