import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { QuickLinksData } from "../../components/QuickLinks";
import ProductCards from "../../components/Cards/ProductCards";

const ProductListing = () => {
  const [value, setValue] = React.useState([0, 30]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function valuetext(value) {
    return `${value}°C`;
  }
  return (
    <Box my={4} px={2}>
      <Box>
        <Grid container>
          <Grid item md={2} display={{ xs: "none", md: "flex" }}>
            {/* {QuickLinkdata.m} */}
            <Box px={1}>
              <Box>
                <Typography
                  variant="h5"
                  sx={{ color: "#2D2C2C", fontSize: "1rem",mb:4, }}
                >
                  Price
                </Typography>
                <Box pr={3}>
                  <PrettoSlider
                    getAriaLabel={() => "Temperature range"}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="on"
                    getAriaValueText={valuetext}
                  />
                </Box>
              </Box>
              <Box sx={{ height: "60vh", overflowY: "auto" }} my={2}>
                <Typography
                  variant="h5"
                  sx={{ color: "#2D2C2C", fontSize: "1rem", mb: 1 }}
                >
                  Categories
                </Typography>
                {QuickLinksData.map((dt) => (
                  <Accordion
                    sx={{
                      border: "none",
                      boxShadow: "none",
                      p: 0,
                      "&:before": {
                        display: "none",
                        boxShadow: "none",
                      },
                    }}
                  >
                    <AccordionSummary
                      // expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                      sx={{
                        fontSize: "0.9rem",
                        p: 0,
                        "&:before": {
                          display: "none",
                          boxShadow: "none",
                        },
                      }}
                    >
                      {" "}
                      {dt.name} ({dt.subLinks.length})
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        p: 0,
                        my: 1,
                        cursor: "pointer",
                        "&:before": {
                          display: "none",
                        },
                        boxShadow: "none",
                      }}
                    >
                      {dt.subLinks.map((lnks) => (
                        <Typography sx={{ fontSize: "0.8rem", pl: 2, my: 2 }}>
                          {" "}
                          {lnks.subLinkName}
                        </Typography>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid item md={10}>
            <Box>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Box>
                  <FormControl
                    sx={{
                      m: 1,
                      minWidth: { xs: 150, md: 200 },
                      outline: "1px solid #FF6C86",
                      borderRadius: 1,
                    }}
                    size="small"
                  >
                    <InputLabel
                      id="demo-select-small-label"
                      sx={{
                        outline: "none",
                        color: "#465152",
                        fontSize: { xs: ".7rem", md: "1rem" },
                      }}
                    >
                      Sort by popularity
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      label="Sort by popularity"
                      // onChange={handleChange}
                      // variant="outlined"
                      sx={{
                        color: "#465152",
                        ".MuiOutlinedInput-notchedOutline": {
                          borderColor: "#FF6C86",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#FF6C86",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#FF6C86",
                        },
                        ".MuiSvgIcon-root ": {
                          fill: "465152 !important",
                        },
                      }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>10</MenuItem>
                      <MenuItem value={20}>20</MenuItem>
                      <MenuItem value={30}>30</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      color: "#465152",
                      fontSize: { xs: ".7rem", md: "1rem" },
                    }}
                  >
                    No. of Products
                  </Typography>
                  <FormControl
                    sx={{
                      m: 1,
                      minWidth: { xs: 50, md: 70 },
                      outline: "1px solid #FF6C86",
                      borderRadius: 1,
                    }}
                    size="small"
                  >
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={10}
                      label="Age"
                      // onChange={handleChange}
                      variant="outlined"
                      sx={{
                        color: "#465152",
                        ".MuiOutlinedInput-notchedOutline": {
                          borderColor: "#FF6C86",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#FF6C86",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#FF6C86",
                        },
                        ".MuiSvgIcon-root ": {
                          fill: "465152 !important",
                        },
                      }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>10</MenuItem>
                      <MenuItem value={20}>20</MenuItem>
                      <MenuItem value={30}>30</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
              <Box display={{ xs: "flex", md: "none" }}>
                <Button
                  variant="contained"
                  sx={{
                    mt: 4,
                    // width: { xs: "70%", sm: "30%" },
                    bgcolor: "#FF6C86",
                    borderRadius: "50px",
                    color: "#fff",
                    fontSize: { xs: ".85rem", md: "1rem" },
                    textTransform: "capitalize",
                    px: 4,
                    py: { xs: 1, md: 2 },
                    boxShadow: "none",
                    // border: "2px solid #FF6C86",
                    ":hover": {
                      bgcolor: "#FF6C86",
                      boxShadow: "none",
                    },
                  }}
                >
                  Filter
                </Button>
              </Box>
              <Box
                display={"flex"}
                justifyContent={"start"}
                flexWrap={"wrap"}
                gap={{ md: 1, xs: 0 }}
              >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((dt) => (
                  // <Box width={{ xs: 160, sm: 180, md: 220 }}>
                  <Box minWidth={{ xs: 150, sm: 180, md: 220 }} maxWidth={{ xs: 200, sm: 220, md: 260 }} flex={1}>
                    <ProductCards />
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ProductListing;

const PrettoSlider = styled(Slider)({
  color: "#FF6C86",
  height: 6,
  "& .MuiSlider-track": {
    border: "none",
    backgroundColor: "#858D97",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "6px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&::before": {
      display: "none",
    },
  },
  "& .MuiSlider-rail": {
    backgroundColor: "#858D97",
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    // width: 32,
    // height: 32,
    // borderRadius: "50% 50% 50% 0",
    // backgroundColor: "#FF6C86",
    color:'#000',
    // transformOrigin: "bottom left",
    // transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    // "&::before": { content: "er" },
    "&.MuiSlider-valueLabelOpen": {
      // transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      // transform: "rotate(45deg)",
    },
  },
});
