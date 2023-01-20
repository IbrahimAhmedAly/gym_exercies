import React from "react";
import { Box, Typography, Button } from "@mui/material";

import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile <br /> And Repeat
      </Typography>
      <Typography
        fontFamily="Alegreya"
        lineHeight="35px"
        fontSize="22px"
        mb={2}
      >
        check out the most effective exercies personalized to you
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{ backgroundColor: "#ff2625", padding: "10px" }}
      >
        Explore Excercises
      </Button>
      <Typography
        fontWeight={600}
        color="#FF2625"
        fontSize="200px"
        sx={{ opacity: "0.1" }}
        display={{ lg: "block", xs: "none" }}
      >
        Excercise
      </Typography>

      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
