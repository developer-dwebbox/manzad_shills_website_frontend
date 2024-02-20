import React from "react";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCards from "../Cards/ProductCards";
import SubcategoryCards from "../Cards/SubcategoryCards";
import BlogCards from "../Cards/BlogCards";
import { Button } from "@mui/material";

export const CustomCarousel = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1023 },
      items: props.items.lg,
      paritialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1023, min: 767 },
      items: props.items.md,
      paritialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 767, min: 510 },
      items: props.items.sm,
      paritialVisibilityGutter: 30,
    },
    smMobile: {
      breakpoint: { max: 509, min: 0 },
      items: props.items.xs,
      paritialVisibilityGutter: 30,
    },
  };

  return (
    <>
      <Carousel
        //  swipeable={false}
        // draggable={false}
        showDots={false}
        responsive={responsive}
        // ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={true}
        autoPlaySpeed={2500}
        customLeftArrow={<CustomArrows direction="left" />}
        customRightArrow={<CustomArrows direction="right" />}
        keyBoardControl={true}
        // customTransition="all .5"
        // transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", "smMobile"]}
        deviceType="desktop"
        dotListClass="custom-dot-list-style"
        itemClass="center"

        // centerMode={true}
      >
        {props.children}
      </Carousel>
    </>
  );
};

const CustomArrows = ({ onClick, direction, className, disabled }) => {
  let position = direction === "right" ? { right: 0 } : { left: 0 };
  console.log(className, "classname");
  return (
    <Button
      onClick={onClick}
      className={className}
      p={0}
      sx={{
        position: "absolute",
        // top: "50%",
        backgroundColor: "transparent",
        transform:
          direction === "right" ? "translate(0%,0%)" : "translate(0%,-0%)",
        ...position,
        "&:hover": {},
        display: { lg: "flex", xs: "none" },

        "&.Mui-disabled": {
          background: "#9AA0A1",
        },
      }}
      disabled={disabled}
    >
      {direction === "right" ? (
        <ArrowForwardIosRoundedIcon
          sx={{
            fontSize: "3rem",
            padding: ".8rem",
            color: disabled ? "black" : "#FF6C86",
            "&:hover": {
              // color: "white",
            },
          }}
        />
      ) : (
        <ArrowBackIosNewRoundedIcon
          sx={{
            fontSize: "3rem",
            padding: ".8rem",
            color: disabled ? "grey" : "#FF6C86",
            "&:hover": {
              color: "white",
            },
          }}
        />
      )}
    </Button>
  );
};
