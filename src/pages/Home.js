import React from 'react';
import { Box } from '@mui/material';
import { useState } from 'react';

import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const Home = () => {

  const [exercises, setExercises] = useState([]);
  //The exercises state variable is used to store the filtered search after the user searches something on the seaarch bar.
  const [bodyPart, setBodyPart] = useState('All');
  //The bodyPart will be the selected bodypart from the HorizontalScrollbar on which we have clicked
  console.log(bodyPart);
  console.log(exercises);
  return (
    <Box>
      <HeroBanner/>
      <SearchExercises  setExercises={setExercises}
                        bodyPart={bodyPart}
                        setBodyPart={setBodyPart}
      />
      <Exercises  setExercises={setExercises}
                  exercises={exercises}
                  bodyPart={bodyPart}
      />
    </Box>
  )
}

export default Home;