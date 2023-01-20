import React, { useState } from "react";

import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

const Home = () => {
  const [bodyPart, setBodyPart] = useState(["all"]);
  const [excercises, setExcercises] = useState([]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setExcercises={setExcercises}
      />
      <Exercises
        bodyPart={bodyPart}
        excercises={excercises}
        setExcercises={setExcercises}
      />
    </Box>
  );
};

export default Home;
