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
  Menu,
  MenuItem,
  Paper,
  TextField,
  Toolbar,
  Typography,
  alpha,
  Link,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import routes from "../routes/routes";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import wishlistIcon from "../assets/navbar/Wishlist.svg";
import cartIcon from "../assets/navbar/Cart.svg";
import profileIcon from "../assets/navbar/Profile.svg";
import menuIcon from "../assets/navbar/Menu.svg";
import phoneIcon from "../assets/navbar/phone.svg";
import ShoppingCartDrawerCard from "./Cards/ShoppingCartDrawerCard";

const Navbar = (props) => {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [shoppingCartOpen, setShoppingCartMobileOpen] = React.useState(false);
  const [openIdx, setOpenIdx] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleShoppingDrawerToggle = () => {
    setShoppingCartMobileOpen((prevState) => !prevState);
  };
  const handleDropdownClose = () => {
    setAnchorEl(null);
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
        <img src={close} width={30} alt="" style={{ cursor: "pointer" }} />
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
                  <ListItemText
                    primary={data.name}
                    sx={{ fontWeight: 600 }}
                    color={openIdx === data.id ? "red" : ""}
                  />
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

  const shoppingDrawer = (
    <Box sx={{ textAlign: "center", height: "100%" }} py={2}>
      <Box display={"flex"} justifyContent={"space-between"} p={2}>
        <Typography
          sx={{ fontSize: { xs: ".8rem", sm: ".9rem", md: "1.2rem" } }}
        >
          Shopping Cart
        </Typography>
        <Box onClick={handleShoppingDrawerToggle}>
          <img src={close} width={30} alt="" style={{ cursor: "pointer" }} />
        </Box>
      </Box>
      <Divider />
      <Box maxHeight={"60%"} overflow={"auto"}>
        {[0, 1, 2, 3, 4].map((item) => (
          <Box my={2} px={3}>
            <ShoppingCartDrawerCard />
          </Box>
        ))}
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box
        px={2}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        mt={2}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            color: "#242424",
            // marginY: 3,
            fontSize: { xs: "1rem", md: "1.2rem" },
          }}
        >
          Subtotal:
        </Typography>
        <Typography
          variant="h6"
          component="div"
          sx={{
            color: "#FF6C86",
            fontSize: { xs: "1rem", md: "1.2rem" },
            // marginY: 3,
          }}
        >
          ₹4000
        </Typography>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box px={2}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            color: "#242424",
            fontSize: { xs: ".75rem", md: ".9rem" },
            // marginY: 3,
            textAlign: "start",
          }}
        >
          Add <span style={{ color: "#FF6C86" }}>₹1,024.00</span> to cart and
          get free shipping!
        </Typography>
      </Box>
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
            onClick={() => navigate(routes.cart.paths[0])}
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
              boxShadow: "none",
              ":hover": {
                bgcolor: "#FF6C86",
              },
            }}
          >
            More Details
          </Button>
        </Box>
        <Box width={"50%"}>
          <Button
            onClick={() => navigate(routes.checkout.paths[0])}
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
              boxShadow: "none",
              ":hover": {
                bgcolor: "#FF6C86",
              },
            }}
          >
            Checkout
          </Button>
        </Box>
      </Box>
    </Box>
  );

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
      >
        <Box display={"flex"} justifyContent={{xs:'center',sm:"space-between"}} px-2>
          <Typography fontSize={{xs:'.65rem',sm:".85rem"}} fontWeight={"500"}>
            Sparkle more! Get 10% off with code <span style={{color:'#FF6C86',fontWeight:'500'}}>GLOW10</span> .
          </Typography>
          <Box display={{xs:"none",sm:"flex"}} gap={2} alignItems={"center"}>
            <Box display={"flex"} gap={1} alignItems={"center"}>
              <img src={phoneIcon} alt="" />
              <Typography fontSize={".85rem"} fontWeight={"400"}>
                Get App
              </Typography>
            </Box>
            <Typography fontSize={"1rem"} fontWeight={"400"}>
              |
            </Typography>
            <Typography fontSize={".85rem"} fontWeight={"400"}>
              Help
            </Typography>
          </Box>
        </Box>
      </AppBar>

      <AppBar
        component="nav"
        position="static"
        sx={{
          bgcolor: "#fff",
          color: "#2D2C2C",
          height: { xs: "20vh", sm: "20vh" },
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
              {/* <MenuIcon fontSize="50px" /> */}
              <img src={menuIcon} alt="" />
            </IconButton>
            <Box
              sx={{
                display: { sm: "flex" },
                width: { xs: 70, sm: 80, md: 90, lg: 110 },
                cursor: "pointer",
              }}
              onClick={() => navigate(routes.home.paths[0])}
            >
              <img src={logo} alt="" width={"100%"} height={"100%"} />
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
                  component={RouterLink}
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
            justifyContent={{ sm: "space-between", xs: "end" }}
            minWidth={{ sm: "80%", md: "50%" }}
          >
            <Box
              width={{ md: "65%", sm: "65%" }}
              display={{ xs: "none", sm: "block" }}
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
                          <IconButton
                            type="submit"
                            onClick={() => navigate("/search")}
                          >
                            <img src={search} alt="" height={20} />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Paper>
              </Search>
            </Box>
            <Box
              sx={{
                display: { sm: "flex", lg: "flex" },
                height: "100%",
                alignItems: "center",
                minWidth: { md: "20%" },
              }}
            >
              <Box
                px={2}
                height={"100%"}
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={{ md: 4, xs: 2 }}
              >
                <Box
                  sx={{ height: { sm: 25, xs: 20 }, cursor: "pointer" }}
                  onClick={() => navigate(routes.wishList.paths[0])}
                >
                  <img src={wishlistIcon} alt="" height={"100%"} />
                </Box>
                <Box
                  sx={{ height: { sm: 25, xs: 20 }, cursor: "pointer" }}
                  // onClick={() => navigate(routes.cart.paths[0])}
                  onClick={handleShoppingDrawerToggle}
                >
                  <img src={cartIcon} alt="" height={"100%"} />
                </Box>
                <Box>
                  <Box
                    sx={{ height: { sm: 25, xs: 20 }, cursor: "pointer" }}
                    onClick={(e) => setAnchorEl(e.currentTarget)}
                  >
                    <img src={profileIcon} alt="" height={"100%"} />
                  </Box>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleDropdownClose}
                    sx={{ mt: ".4rem", minWidth: "25ch" }}
                    elevation={0}
                  >
                    {rightMenuItems.map((dt) => (
                      <MenuItem
                        onClick={handleDropdownClose}
                        sx={{ py: ".35rem", px: ".9rem" }}
                      >
                        <Link
                          component={RouterLink}
                          to={dt.path}
                          color="inherit"
                          sx={{
                            textDecoration: "none",
                            fontWeight: "400",
                            fontSize: "16px",
                            textAlign: "right",
                            width: "100%",
                          }}
                        >
                          {dt.name}
                        </Link>
                      </MenuItem>
                    ))}
                    <MenuItem
                      onClick={handleDropdownClose}
                      sx={{ py: ".35rem", px: ".9rem" }}
                    >
                      <Link
                        color="inherit"
                        sx={{
                          textDecoration: "none",
                          fontWeight: "400",
                          fontSize: "16px",
                          textAlign: "right",
                          width: "100%",
                        }}
                      >
                        Logout
                      </Link>
                    </MenuItem>
                  </Menu>
                </Box>
              </Box>
              {/* <Box
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
              </Box> */}
            </Box>
          </Box>
        </Toolbar>
        <Toolbar sx={{ display: { sm: "none" }, width: "100%" }}>
          <Search>
            <Paper
              component={"form"}
              sx={{
                borderRadius: 20,
                border: "1px solid #FF6C86",
                boxShadow: "none",
                width: "100%",
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
                      <IconButton
                        type="submit"
                        onClick={() => navigate("/search")}
                      >
                        <img src={search} alt="" height={20} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Paper>
          </Search>
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
      <Drawer
        container={container}
        variant="temporary"
        anchor={"right"}
        open={shoppingCartOpen}
        onClose={handleShoppingDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          // display: { xs: "block", lg: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: { xs: "100%", sm: 550 },
          },
        }}
      >
        {shoppingDrawer}
      </Drawer>
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
  // [theme.breakpoints.up("md")]: {
  //   width: "45ch",
  // },
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

const rightMenuItems = [
  {
    name: "Dashboard",
    path: "/profile/dashboard",
  },
  {
    name: "Orders",
    path: "/profile/order",
  },
  {
    name: "Downloads",
    path: "/profile/download",
  },
  {
    name: "Address",
    path: "/profile/address",
  },
  {
    name: "Account Details",
    path: "/profile/account",
  },
];
