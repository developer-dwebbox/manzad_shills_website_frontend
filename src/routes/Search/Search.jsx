import { Box, Typography } from "@mui/material";
import React from "react";
import ProductListing from "../Shop/ProductListing";

const Search = () => {
  return (
    <Box mb={4}>
      <Box bgcolor={"#FFF6F7"} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Box py={4} >
          <Typography variant="h4" sx={{fontSize:'2rem',fontWeight:'',textAlign:'center'}}> Search Results</Typography>
          <Typography variant="h4" sx={{fontSize:'1rem',fontWeight:''}}> Home > Shop > Search results for “gel”</Typography>
        </Box>
      </Box>
      <ProductListing/>
    </Box>
  );
};

export default Search;
