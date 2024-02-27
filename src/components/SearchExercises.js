import React from 'react';
import { useState, useEffect } from 'react';
import {Box, Button, Stack, TextField, Typography} from '@mui/material';
import { fetchData, exerciseOptions } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {

    const [search, setSearch] = useState('');

    //In the useEffect we are making an GET request to fetch the list of bodypart which will be displayed in the form of a scrollable menu
    useEffect( () => {
            const fetchExercisesData = async () => {
                const bodyPartsData = await fetchData ('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
                console.log(bodyPartsData)
                setBodyPart(['All', ...bodyPartsData]);
                
            }
            fetchExercisesData();
            console.log("Body Part",bodyPart); 
    }, [])

    //When the search button is clicked the handleSearch async function is invoked and it will make a GET request to the database and fetches all the exercises and then filters it with the search text and returns the result
    const handleSearch = async() => {
        if(search){
            const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

            const searchedExercises = exerciseData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
            )
            setSearch('');
            setExercises(searchedExercises);
            //We are setting a list of exercises after filtering the result based on the search key
            //The exercises state variable will be used to display the respective exercises after the search is performed.
            //Since the exercises to be displayed will be implemented in another component we defined the state variable in the 'Home' parent component
        }
    }


  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
        <Typography fontWeight={700}  
                    sx={{
                        fontSize: { lg:'44px', xs: '30px'}
                    }}
                    mb='50px' textAlign='center'>
                Awesome Exercises You <br/>Should Know
        </Typography>
        <Box position='relative' mb='72px'>
                    <TextField
                        sx={{
                            input: {
                                    fontWeight:'700', 
                                    border: 'none',
                                    borderRadius: '4px'
                                    },
                            width: { lg: '800px', xs:'350px'},
                            backgroundColor: '#fff',
                            borderRadius: '40px'
                        }}
                        height='76px'
                        value={search}
                        onChange={(e) => {setSearch(e.target.value.toLowerCase())}}
                        placeholder='Search Exercises'
                        type='text'
                    />
                    <Button className='search-btn'
                            sx={{
                                bgcolor :'#ff2625',
                                color: '#fff',
                                textTransform: 'none',
                                width: { lg: '175px', xs: '80px'},
                                fontSize: {lg: '20px', xs: '14px'},
                                height: '56px',
                                position:'absolute',
                                right: '0'
                            }}
                            onClick={handleSearch}
                            >
                            Search
                    </Button>
        </Box>
        <Box sx={{
            position: 'relative',
            width: '100%',
            p: '20px'
        }}>
            <HorizontalScrollbar data={bodyPart} bodyPart={bodyPart} setBodyPart={setBodyPart} />

        </Box>
    </Stack>
  )
}

export default SearchExercises