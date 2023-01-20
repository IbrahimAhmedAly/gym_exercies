import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Stack, TextField } from "@mui/material";

import HorizontalScrollbar from "./HorizontalScrollbar";
import { fetchData } from "../utils/fetchData";

const SearchExercises = ({ setExcercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    fetchData(`exercises/bodyPartList`).then((data) =>
      setBodyParts(["all", ...data])
    );
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(`exercises`);

      const searchedExercieses = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search)
      );

      setSearch("");
      setExcercises(searchedExercieses);
    }
  };

  return (
    <Stack alignItems="center" justifyContent="center" mt="37px" p="20px">
      <Typography
        variant="h5"
        fontWeight={700}
        textAlign="center"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box alignItems="center" mb="72px" position="relative">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="72px"
          type="text"
          placeholder="Search Exercises"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <Button
          sx={{
            color: "#fff",
            fontSize: { lg: "20px", xs: "14px" },
            width: { lg: "175px", xs: "80px" },
            height: "56px",
            textTransform: "none",
            backgroundColor: "#FF2625",
            position: "absolute",
            right: 0,
          }}
          className="search-btn"
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          isBodyParts
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
