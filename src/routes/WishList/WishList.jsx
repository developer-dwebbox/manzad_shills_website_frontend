import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import ProductCards from "../../components/Cards/ProductCards";

const WishList = () => {
  const [age, setAge] = React.useState("");
  return (
    <Box mb={4}>
      <Box
        bgcolor={"#FFE9ED"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box py={{ xs: 2, md: 4 }}>
          <Typography
            variant="h4"
            sx={{ fontSize: { xs: "1rem", md: "1.45rem" }, fontWeight: "400" }}
          >
            {" "}
            Wishlist
          </Typography>
        </Box>
      </Box>
      <Box px={{ md: 6 }}>
        <Box display={"flex"} alignItems={"center"}>
          <Typography variant="p">No. of Products</Typography>
          <Box sx={{}} my={4}>
            <FormControl
              sx={{
                m: 1,
                minWidth: 70,
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
                //   onChange={handleChange}
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
        <Box
          display={"flex"}
          justifyContent={{ md: "start", xs: "center" }}
          flexWrap={"wrap"}
          gap={{ md: 5, xs: 0 }}
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((dt) => (
            <Box width={{ md: 240,sm:190,xs: 160 }}>
              <ProductCards wishList={true} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default WishList;
