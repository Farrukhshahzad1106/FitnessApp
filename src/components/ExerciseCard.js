import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';


const ExerciseCard = ({exercise}) => {
  const {id, gifUrl, name, bodyPart, target} = exercise;
  return (
    <Link to={`/exercise/${id}`} className='exercise-card'>
        <img src={gifUrl} alt={name} loading='lazy'/>
        <Stack direction='row'>
          <Button sx={{ml:'21px', color:'#fff', background: '#ffa9a9',
                      fontSize:'14px', borderRadius:'20px', textTransform:'capitalize'}}>
                        {bodyPart}
          </Button>
          <Button sx={{ml:'21px', color:'#fff', background: '#fcc75 7',
                      fontSize:'14px', borderRadius:'20px', textTransform:'capitalize'}}>
                        {target}
          </Button>
        </Stack>
        <Typography ml='21px' fontSize='22px' color='#000' fontWeight='bold' 
                    mt='11px' pb='10px' textTransform='capitalize'>
          {name}
          <br/>
          {id}
        </Typography>
    </Link>
    
  )
}

export default ExerciseCard