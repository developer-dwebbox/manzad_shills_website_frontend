import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import skincare from "../../assets/Home/skin-care.png";
import haircare from "../../assets/Home/hair-care.png";

const Banner2 = () => {
  return (
    <Grid
      container
      px={{ xs: 1, sm: 2, md: 4 }}
      minHeight={"60vh"}
      my={6}
      spacing={4}
    >
      <Grid item md={6} xs={12}>
        <Box
          sx={{
            background: `url(${skincare})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: {xs:'300px',sm:'350px',md:"400px"},
            mb: {xs:2,md:6},
            padding: 2,
            pb: 4,
            borderRadius:2,
            display: "flex",
            alignItems: "end",
          }}
        >
          <div>
            <Typography
              variant="h6"
              sx={{ color: "#FFFFFF", fontSize: "1rem" }}
            >
              Best for All Skin Types
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#FFFFFF", fontSize: "2.5rem" }}
            >
              Skin Care
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                width: { xs: "100%", sm: "90%" },
                bgcolor: "transparent",
                borderRadius: "50px",
                color: "#fff",
                fontSize: "1rem",
                textTransform: "capitalize",
                px: 0,
                py: 1,
                boxShadow: "none",
                border: "2px solid #fff",
                ":hover": {
                  bgcolor: "transparent",
                  boxShadow: "none",
                },
              }}
            >
              Explore
            </Button>
          </div>
        </Box>
      </Grid>
      <Grid item md={6} xs={12}>
        <Box
          sx={{
            background: `url(${haircare})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: {xs:'300px',sm:'350px',md:"400px"},
            mt: {xs:2,md:6},
            padding: 2,
            pb: 4,
            display: "flex",
            alignItems: "end",
            borderRadius: 2,
            justifyContent: "end",
          }}
        >
          <div>
            <Typography
              variant="h6"
              sx={{ color: "#FFFFFF", fontSize: "1rem", textAlign: "end" }}
            >
              Shine with the best
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#FFFFFF", fontSize: "2.5rem", textAlign: "end" }}
            >
              Hair Care
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "end" }}>
              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  width: { xs: "100%", sm: "90%" },
                  bgcolor: "transparent",
                  borderRadius: "50px",
                  color: "#fff",
                  fontSize: "1rem",
                  textTransform: "capitalize",
                  px: 0,
                  py: 1,
                  boxShadow: "none",
                  border: "2px solid #fff",
                  ":hover": {
                    bgcolor: "transparent",
                    boxShadow: "none",
                  },
                }}
              >
                Explore
              </Button>
            </Box>
          </div>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Banner2;
