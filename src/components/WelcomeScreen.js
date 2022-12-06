import React from 'react';
import { Box, Typography } from '@mui/material';

const WelcomeScreen = () => {
    return (
        <>
            <Box mt={8} mb={4}>
                <Typography variant="h4" color="primary.main">
                    WeatherX
                </Typography>
                <Typography variant="h6" fontWeight={400}>
                    Find the weather of your city
                </Typography>
            </Box>
            <Box>
                <Box
                    component="img"
                    src="/img/weather-img.svg"
                    width={0.8}
                />
            </Box>
        </>
    );
};

export default WelcomeScreen;