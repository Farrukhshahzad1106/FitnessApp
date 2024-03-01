import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
  const [detailedExercise, setDetailedExercise] = useState({});
  const {id} = useParams();
  console.log(id);

  useEffect( () => {
    const fetchDetailedExerciseData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const url = `${exerciseDbUrl}/exercises/exercise/${id}`;
      console.log(url);

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      // Upon clicking on a particular exercise card we want to open it in detail, the detail of a particular exercise is fetchedusing this url with /id of th eexercise being the endpoint
      console.log(exerciseDetailData); 
      setDetailedExercise(exerciseDetailData);
    }
    fetchDetailedExerciseData();
  }, [id]);

  return (
    <Box>
      <Detail detailedExercise={detailedExercise}/>
      <ExerciseVideos/>
      <SimilarExercises/>{/*Using the Similar Exercises Component we will show similar exercises for both target muscle and equipment */}
    </Box>
  )
}

export default ExerciseDetail;

//To get the exercise Videos we will use the Youtube Search and Download API by h0p3rwe from RapidAPI.com