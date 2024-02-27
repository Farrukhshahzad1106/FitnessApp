import React from 'react';
import { Box } from '@mui/material';
import { useState } from 'react';

import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const Home = () => {

  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState(['All']);

  return (
    <Box>
      <HeroBanner/>
      <SearchExercises  setExercises={setExercises}
                        bodyPart={bodyPart}
                        setBodyPart={setBodyPart}
      />
      <Exercises  setExercises={setExercises}
                  bodyPart={bodyPart}
                  setBodyPart={setBodyPart}
      />
    </Box>
  )
}

export default Home;