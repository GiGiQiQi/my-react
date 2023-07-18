import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typhography } from '@mui/material';

const HorizontalScrollBar = ({ data }) => {
  return (
    <div>
        {data.map((item) => (
        <Box>

        </Box>
        )
        )}
    </div>
  )
}

export default HorizontalScrollBar