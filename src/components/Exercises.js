import React from 'react';
import { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({exercises, setExercises, bodyPart}) => {
    // console.log("Exercises",exercises);

    const [currentPage, setCurrentPage] = useState(1);
    const exercisePerPage = 9;

    const indexOfLastExercise = currentPage * exercisePerPage;
    //The index of the last exercise on the current page from the exercises array
    const indexofFirstExercise = indexOfLastExercise - exercisePerPage;
    //The index of the first exercise on the current page from the exercises array
    const currentExercises = exercises.slice(indexofFirstExercise,indexOfLastExercise);
    //The array of exercises on the current page, we will use this array to display the exercise on the current page
    
    const Paginate = (e, value) => {
        setCurrentPage(value);
        window.scrollTo({top: 1800, behaviour: 'smooth '})
    }
    
    useEffect( () => {
        const fetchExercisesData = async() => {
            let exercisesData = [];

            if (bodyPart === 'All'){
                exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
            }
            else {
                exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
            }
            setExercises(exercisesData);
        }
        fetchExercisesData();
    }, [bodyPart]);


  return (
    <Box id='exercises'
        sx={{ mt : { lg: '110px' }}}
        mt='50px'
        p='20px'
    >
        <Typography varient='h3' mb='46px'>
            Showing Results
        </Typography>
        <Stack direction='row' sx={{ gap : { lg: '110px', xs: '50px'}}}
        flexWrap='wrap' justifyContent='center'>
            {currentExercises.map( (exercise, index) => (
                <ExerciseCard key={index} exercise={exercise}/>
            ) )}
        </Stack>
        <Stack mt='1000px' alignItems='center'>
                {
                    exercises.length > 9 && (
                        <Pagination
                            color='standard'
                            shape='rounded'
                            defaultPage={1}
                            count = {Math.ceil(exercises.length / exercisePerPage)}
                            page={currentPage}
                            onChange={Paginate}
                            size='large'
                        />
                    )
                }
        </Stack>
        {/* The Paginate component will pass the event object and the value of the curent page we click on as argument to the function invoked on the handler attached to the Pagination component */}

    </Box>
  )
}

export default Exercises