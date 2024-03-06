import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { CustomSubCategoryCarousel } from "../../components/Carousel/CustomSubCategoryCarousel";
import SubcategoryCards from "../../components/Cards/SubcategoryCards";

const SubCategory = () => {
  const [selectedID,setSelectedID] = useState(2);
  return (
    <Box mb={4}>
      <Box
        bgcolor={"#FFF6F7"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        pb={4}
      >
        <Box py={4}>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" },
              fontWeight: "",
              textAlign: "center",
            }}
          >
            Gel Nail Polish
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: ".75rem", sm: ".875", md: "1rem" },
              fontWeight: "",
            }}
          >
            {" "}
            {" Home > Shop > Nail Art > Gel Polish"}
          </Typography>
        </Box>
        <Box width={{ xs: "95%", sm: "80%", md: "70%" }} position={"relative"}>
          <CustomSubCategoryCarousel items={{ lg: 6, md: 5, sm: 4, xs: 4 }}>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((dt) => (
              <div key={dt}  onClick ={()=>setSelectedID(dt)}>
                <SubcategoryCards id={dt} name="selected" selectedid={selectedID}/>
              </div>
            ))}
          </CustomSubCategoryCarousel>
        </Box>
      </Box>
    </Box>
  );
};

export default SubCategory;

const data = [
  {
    subCatName: "Buffer",
    img: "",
    path: "",
  },
  {
    subCatName: "Cuticle Oil",
    img: "",
    path: "",
  },
  {
    subCatName: "Gel Polish",
    img: "",
    path: "",
  },
  {
    subCatName: "Nail Art Accessories",
    img: "",
    path: "",
  },
  {
    subCatName: "Nail Brush",
    img: "",
    path: "",
  },
  {
    subCatName: "Nail Care",
    img: "",
    path: "",
  },
  {
    subCatName: "Cuticle Oil 2",
    img: "",
    path: "",
  },
  {
    subCatName: "Gel Polish 2",
    img: "",
    path: "",
  },
];
