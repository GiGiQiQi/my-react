import React from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/herobanner';
import SearchExercises from '../components/SearchExercises';


const home = () => {
  return (
    <Box>
    <HeroBanner />
    <SearchExercises />
    </Box>
  )
}

export default home