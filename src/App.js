import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import { Box } from '@mui/material'

import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Box width='400px' sx={{width: {xl: '1488px'}}} m='auto'>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/exercise/:id' element={<ExerciseDetail/>}/>
        </Routes>
        <Footer/>
    </Box>
  )
}

export default App;


// 1 - If we are getting the error 
// $ git push origin main
// fatal: 'origin' does not appear to be a git repository
// fatal: Could not read from remote repository.

// Please make sure you have the correct access rights
// and the repository exists.

// SOLN : We need to configure the remote repository
//         git remote add origin "repo-url"