import React from "react";
import Box from '@mui/material/Box';

function Example() {
    return (
        <Box
    sx={{
        display: 'flex',
        justifyContent: 'center', // Horizontally center the box
        alignItems: 'center', // Vertically center the box
        minHeight: '100vh' // Ensure the container takes up the full height of the viewport
    }}
>
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center', // Vertically center the items
            alignItems: 'center', // Horizontally center the items
        }}
    >
        <Box>ITEM 1</Box>
        <Box>ITEM 2</Box>
        <Box>ITEM 3</Box>
        <Box>ITEM 4</Box>
        <Box>ITEM 5</Box>
    </Box>
</Box>

    );
}

export default Example;
