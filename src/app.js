import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './index.css';
import Navbar from './components/navbar';
import Home from './pages/home'
import ExerciseDetails from './pages/ExerciseDetails';
import Footer from './components/footer';

const App = () => {
  return (
    <Box>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise/:id" element={<ExerciseDetails />} />
        </Routes>
        <Footer/>
    </Box> 
  )
}

export default App