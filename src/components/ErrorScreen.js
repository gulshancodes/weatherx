import React from 'react';
import { Box, Typography } from '@mui/material';

const ErrorScreen = ({ weatherData }) => {

    return (
        <Box mt={5}>
            <Typography variant="h4" color="primary.main" textTransform="capitalize">
                {weatherData?.message}
            </Typography>
            <Typography variant="h6" fontWeight={400}>
                Please enter correct City Name
            </Typography>
        </Box>
    );
};

export default ErrorScreen;