import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Box } from "@mui/material";

import Detail from "../components/Detail";
import ExerciseVideo from "../components/ExerciseVideo";
import SimilarExercises from "../components/SimilarExercises";

import { fetchData, youtubeFetchData } from "../utils/fetchData";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDetailData = await fetchData(`exercises/exercise/${id}`);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideoData = await youtubeFetchData(
        `search?query=${exerciseDetailData.name}`
      );
      setExerciseVideos(exerciseVideoData.contents);

      const targetMuscleExercisesData = await fetchData(
        `exercises/target/${exerciseDetailData.target}`
      );
      setTargetMuscleExercises(targetMuscleExercisesData);

      const eqipmentExercisesData = await fetchData(
        `exercises/equipment/${exerciseDetailData.equipment}`
      );
      setEquipmentExercises(eqipmentExercisesData);
    };
    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideo
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetail;
