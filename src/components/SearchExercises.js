import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { fetchData, exerciseOptions } from '../utils/fetchData';

import HorizontalScrollBar from './HorizontalScrollBar';

const SearchExercises = () => {

    const [search, setSearch] = useState('')
    const [bodyParts, setBodyParts] = useState([]);
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList/bodyPartsList', exerciseOptions);

        setBodyParts(['all', ...bodyPartsData]);
        
        };

        fetchExercisesData();
    }, []);
    //Creates a connection to an API
    const handleSearch = async () => {
        if(search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

            const searchedExercises = exercisesData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyParts.toLowerCase().includes(search)
            );

            setSearch('');
            setExercises(searchedExercises);
        }
    }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
        <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
            Awesome Exercises you <br/ > Should Know
        </Typography>
        <Box>
            <TextField 
                height='76px'
                sx={{
                    input: { fontweight: '700', borders: 'none', borderRadius: '4px'},
                    width: { lg: '800px', xs: '350px'},
                    backgroundColor: '#fff', borderRadius: '40px'
                }}
                value={search}
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
                placeholder="Search Exercises"
                type="text"
            />
            <Button className="search-btn"
                sx={{
                    bgcolor: '#FF2625',
                    color: '#FFF',
                    textTransform: 'none',
                    width: {
                        lg: '173px',
                        xs: '80px'
                    },
                    height: '56px',
                    position: 'absolute',
                }}
                onClick={handleSearch}
            >
            SEARCH
            </Button>
        </Box>
        <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
            <HorizontalScrollBar data={bodyParts}/>
        </Box>
    </Stack>
  )
}

export default SearchExercises