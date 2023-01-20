import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Typography, Stack } from "@mui/material";

import { fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";
import Loader from "./Loader";

const Exercises = ({ bodyPart, excercises, setExcercises }) => {
  const [currentPage, setcurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;

  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

  const currentExercises = excercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (e, value) => {
    setcurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(`exercises`);
      } else {
        exercisesData = await fetchData(`exercises/bodyPart/${bodyPart}`);
      }

      setExcercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  // if (!currentExercises.length) return <Loader />;
  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
      >
        {currentExercises.map((excercise, index) => (
          <ExerciseCard key={index} excercise={excercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {excercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(excercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
