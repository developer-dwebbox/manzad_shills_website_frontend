import React, { useState } from "react";
import { Box, Link, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Menu, MenuItem } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useSelector } from "react-redux";

const QuickLinks = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = React.useState(0);
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);

  const { isAuthenticated, name } = useSelector((state) => state.auth);

  const handleDropdownClick = (event) => {
    console.log(event, "event");
    setAnchorEl(event.currentTarget);
  };

  const linkSX = {
    textDecoration: "none",
    fontWeight: "500",
    display: "flex",
    placeItems: "center",
    gap: ".3rem",
  };
  const dropDownSX = {
    textDecoration: "none",
    fontWeight: "400",
    fontSize: "14px",
  };
  const bottomDropDownSX = {
    textDecoration: "none",
    fontWeight: "400",
    fontSize: "10px",
  };
  const menuItemSX = { py: ".15rem", px: ".9rem" };
  const bottomMenItemSX = { py: ".15rem", px: ".9rem", minHeight: "auto" };
  const bottomLinkSX = {
    fontSize: "10px",
    padding: 0,
    color: "#465152",
    minWidth: "auto",
    "& .MuiBottomNavigationAction-label": {
      fontSize: "10px",
    },
  };

  const handleDropdownClose = () => {
    console.log("event closed");
    setAnchorEl(null);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);

  console.log(anchorEl, "event");
  return (
    <Box
      sx={{
        flexGrow: 1,
        top: 0,
        zIndex: 500,
        position: "static",
      }}
    >
      {isSmallScreen ? (
        ""
      ) : (
        // Render a horizontal navigation bar for larger screens
        <AppBar position="static" elevation={0}>
          <Toolbar
            sx={{
              backgroundColor: "#FFF",
              display: "flex",
              gap: { sm: "2rem", md: "4rem" },
              justifyContent: "center",
              color: "#465152",
              py: 3,
            }}
          >
            {QuickLinksData.map((data, id) => (
              <Box position={"relative"}>
                <Link
                  component={RouterLink}
                  to="/"
                  color={`inherit`}
                  sx={linkSX}
                  onMouseEnter={() => setHoveredIndex(id)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {data.name}
                </Link>
                {hoveredIndex === id ? (
                  <Box
                    position={"absolute"}
                    sx={{transform:'translateX(50%'}}
                    left={`calc(-${id*50}px)`}
                    onMouseEnter={() => setHoveredIndex(id)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <DropDown data={data} />
                  </Box>
                ) : (
                  ""
                )}
              </Box>
            ))}
          </Toolbar>
        </AppBar>
      )}
    </Box>
  );
};

export default QuickLinks;

const DropDown = ({ data }) => {
  const columns = Math.ceil(data.subLinks.length / 7);
  console.log(columns);
  return (
    <Box
      // mt={1}
      boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
      sx={{
        bgcolor: "#fff",
        borderRadius: "0 0 8px 8px",
        zIndex: 500,
        padding: 1,
        px: 2,
      }}
    >
      <Box sx={{ display: "flex" }}>
        {[...Array(columns)].map((_, columnIndex) => (
          <Box
            key={columnIndex}
            sx={{ width: "fit-content", minWidth: "161px" }}
          >
            {data.subLinks
              .slice(columnIndex * 7, columnIndex * 7 + 7)
              .map((item, index) => (
                <Typography
                  variant="h5"
                  key={index}
                  sx={{ color: "#2D2C2C", fontSize: "0.85rem", my: 2,cursor:'pointer'}}
                >
                  {item.subLinkName}
                </Typography>
              ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export const QuickLinksData = [
  {
    id: 1,
    name: "Appliances",
    subLinks: [
      {
        subLinkName: "Straightening Machine",
        path: "/sm",
      },
    ],
  },
  {
    id: 2,
    name: "Brushes & Tools",
    subLinks: [
      {
        subLinkName: "Professional Brush kit",
        path: "/pbk",
      },
    ],
  },
  {
    id: 3,
    name: "Hair Care",
    subLinks: [
      {
        subLinkName: "Colour hair spray",
        path: "",
      },
      {
        subLinkName: "Hair Care",
        path: "",
      },
      {
        subLinkName: "Hair Serum",
        path: "",
      },
      {
        subLinkName: "Keratin Shampoo",
        path: "",
      },
      {
        subLinkName: "Shampoo",
        path: "",
      },
      {
        subLinkName: "Shampoo & Conditioner",
        path: "",
      },
      {
        subLinkName: "Straightening Cream",
        path: "",
      },
    ],
  },
  {
    id: 4,
    name: "Make up",
    subLinks: [
      {
        subLinkName: "Blusher & Highlighter",
        path: "",
      },
      {
        subLinkName: "Concealer",
        path: "",
      },
      {
        subLinkName: "Contour",
        path: "",
      },
      {
        subLinkName: "Eye",
        path: "",
      },
      {
        subLinkName: "Eyelash Extension",
        path: "",
      },
      {
        subLinkName: "Eyeliner",
        path: "",
      },
      {
        subLinkName: "Eyeliner Gel",
        path: "",
      },
      {
        subLinkName: "Eyeshadow",
        path: "",
      },
      {
        subLinkName: "Face",
        path: "",
      },
      {
        subLinkName: "Facial Kit",
        path: "",
      },
      {
        subLinkName: "Foundation",
        path: "",
      },
      {
        subLinkName: "Lip Palettes",
        path: "",
      },
      {
        subLinkName: "Lips",
        path: "",
      },
      {
        subLinkName: "Lipsticks",
        path: "",
      },
      {
        subLinkName: "Makeup Setting Spray",
        path: "",
      },
      {
        subLinkName: "Makeup Blender",
        path: "",
      },
      {
        subLinkName: "Makeup Fixer",
        path: "",
      },
      {
        subLinkName: "Mascara",
        path: "",
      },
      {
        subLinkName: "Mixing Pallete",
        path: "",
      },
      {
        subLinkName: "Mixing Solution",
        path: "",
      },
      {
        subLinkName: "Primer",
        path: "",
      },
    ],
  },
  {
    id: 5,
    name: "Nail Art",
    subLinks: [
      {
        subLinkName: "Buffer",
        path: "",
      },
      {
        subLinkName: "Cuticle Oil",
        path: "",
      },
      {
        subLinkName: "Contour",
        path: "",
      },
      {
        subLinkName: "Gel Polish",
        path: "",
      },
      {
        subLinkName: "Nail Art Accessories",
        path: "",
      },
      {
        subLinkName: "Nail Brush",
        path: "",
      },
      {
        subLinkName: "Nail Care",
        path: "",
      },
      {
        subLinkName: "Nail Extension",
        path: "",
      },
      {
        subLinkName: "Nail Glue",
        path: "",
      },
      {
        subLinkName: "Nail Lamp",
        path: "",
      },
      {
        subLinkName: "Nail Machine",
        path: "",
      },
      {
        subLinkName: "Nail Tip",
        path: "",
      },
      {
        subLinkName: "Nail Tool",
        path: "",
      },
    ],
  },
  {
    id: 6,
    name: "Skin care",
    subLinks: [
      {
        subLinkName: "Body Lotion",
        path: "",
      },
      {
        subLinkName: "Clay Pack",
        path: "",
      },
      {
        subLinkName: "Face & Body Scrub",
        path: "",
      },
      {
        subLinkName: "Face Serum",
        path: "",
      },
      {
        subLinkName: "Face Wash",
        path: "",
      },
      {
        subLinkName: "Manicure & Pedicure",
        path: "",
      },
      {
        subLinkName: "Massage Cream",
        path: "",
      },
      {
        subLinkName: "Massage Gel",
        path: "",
      },
      {
        subLinkName: "Moisturizer cream",
        path: "",
      },
      {
        subLinkName: "Sheet Mask",
        path: "",
      },
      {
        subLinkName: "Wax",
        path: "",
      },
    ],
  },
];
