import React, { useEffect, useState } from "react";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";
import { Box, Button, Typography } from "@mui/material";
import { useKeenSlider } from "keen-slider/react";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import reviewbg from '../../assets/Home/reviewbg.png'

const Review = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  useEffect(() => {
    const slider = new KeenSlider("#keen-slider", {
      loop: true,

      slides: {
        origin: "auto",
        perView: 1,
        spacing: 30,
      },
      breakpoints: {
        "(min-width: 0px)": {
          slides: {
            origin: "auto",
            perView: 1.5,
            spacing: 10,
          },
        },
        "(min-width: 450px)": {
          slides: {
            origin: "auto",
            perView: 2,
            spacing: 10,
          },
        },
        "(min-width: 600px)": {
          slides: {
            origin: "auto",
            perView: 2.2,
            spacing: 10,
          },
        },
        "(min-width: 768px)": {
          slides: {
            origin: "auto",
            perView: 3,
            spacing: 30,
          },
        },
        "(min-width: 1230px)": {
          slides: {
            origin: "auto",
            perView: 2.2,
            spacing: 30,
          },
        },
        "(min-width: 1440px)": {
          slides: {
            origin: "auto",
            perView: 2.6,
            spacing: 30,
          },
        },
        "(min-width: 1980px)": {
          slides: {
            origin: "auto",
            perView: 3.2,
            spacing: 30,
          },
        },
      },
    });

    const keenSliderPrevious = document.querySelector("#keen-slider-previous");
    const keenSliderNext = document.querySelector("#keen-slider-next");

    const keenSliderMobPrevious = document.querySelector(
      "#keen-slider-mob-previous"
    );
    const keenSliderMobNext = document.querySelector("#keen-slider-mob-next");

    keenSliderMobPrevious?.addEventListener("click", () => slider.prev());
    keenSliderMobNext?.addEventListener("click", () => slider.next());

    keenSliderPrevious?.addEventListener("click", () => slider.prev());
    keenSliderNext?.addEventListener("click", () => slider.next());

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <Box my={6}>
      <Box display={"flex"} flexWrap={"wrap"} justifyContent={'center'} alignItems={'center'} py={10} px={{xs:1,md:4}} sx={{backgroundImage:`url(${reviewbg})`,backgroundPosition:'contain'}} >
        <Box width={{md:"40%}"}} minWidth={{md:400}}>
          <Typography
            // variant="h6"
            width={{md:'50%'}}
            mx={4}
            sx={{
              fontSize: "2rem",
              lineHeight: "50px",
              color: "#2D2C2C",
              textAlign:{md: 'left',xs:'center'}
            }}
          >
            Customer  Reviews
          </Typography>
          <Typography
            my={1}
            // variant="h4"
            mx={4}
            sx={{
              fontSize: "1rem",
              lineHeight: "30px",
              color: "#858D97",
              //   width: "60%",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </Typography>
          <Box display="flex" gap={1} mx={4} my={2} justifyContent={{md:"start",xs:'center'}}>
            <Button
              p={0}
              id="keen-slider-previous"
              sx={{
                backgroundColor: "transparent",
                border: "2px solid #FF6C86",
                borderRadius: "50%",
                minWidth: "unset",
                "&:hover": {},
                "&.Mui-disabled": {
                  background: "#9AA0A1",
                },
              }}
            >
              <ArrowBackIosNewRoundedIcon
                sx={{
                  fontSize: "2.5rem",
                  padding: ".7rem",
                }}
              />
            </Button>
            <Button
              p={0}
              id="keen-slider-next"
              sx={{
                backgroundColor: "transparent",
                border: "2px solid #FF6C86",
                borderRadius: "50%",
                minWidth: "unset",
                "&:hover": {},
                "&.Mui-disabled": {
                  background: "#9AA0A1",
                },
              }}
            >
              <ArrowForwardIosRoundedIcon
                sx={{
                  fontSize: "2.5rem",
                  padding: ".7rem",
                }}
              />
            </Button>
          </Box>
        </Box>
        <Box width={{md:"60%"}} minWidth={{md:700}} sx={{ overflowX: "hidden" }}>
          <div id="keen-slider" className="keen-slider " ref={sliderRef}>
            {[0, 1, 2, 3].map((data, id) => (
              <div className={`keen-slider__slide number-slide${id} `}>
                <Box
                  //   width={350}
                  
                  height={"100%"}
                  bgcolor={"#FFFFFF"}
                  borderRadius={2}
                  py={4}
                  px={2}
                  sx={{
                    boxShadow :"rgba(149, 157, 165, 0.2) 0px 8px 24px"
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {xs:'.7rem',md:".9rem"},
                      color: "#858D97",
                      textAlign: "center",
                      fontStyle: "italic",
                      lineHeight: {xs:'20px',md:"30px"},
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "1rem",
                      color: "#2D2C2C",
                      textAlign: "center",
                      lineHeight: "",
                      mt: 1,
                    }}
                  >
                    Esha Verma
                  </Typography>
                </Box>
              </div>
            ))}
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default Review;
