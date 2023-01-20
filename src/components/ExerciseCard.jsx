import React from "react";
import { Link } from "react-router-dom";
import { Box, Stack, Typography, Button } from "@mui/material";

const ExerciseCard = ({ excercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${excercise.id}`}>
      <img src={excercise.gifUrl} alt={excercise.name} loading="lazy" />

      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            backgroundColor: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {excercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            backgroundColor: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {excercise.target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        mt="11px"
        pb="10px"
        fontSize="22px"
        fontWeight="bold"
        textTransform="capitalize"
        color="#000"
      >
        {excercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
