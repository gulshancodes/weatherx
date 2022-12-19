import React from 'react';
import { Box, Divider, Typography, Grid } from '@mui/material';
import { time, day } from '../utils/helpers';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import OpacityIcon from '@mui/icons-material/Opacity';
import AirIcon from '@mui/icons-material/Air';
import CompressIcon from '@mui/icons-material/Compress';

const WeatherInfo = ({ weatherData }) => {

    const { name, sys, main, weather, wind } = weatherData;

    // additional weather details
    const weatherDetails = [
        {
            id: 1,
            icon: <ThermostatIcon fontSize="large" />,
            text: "Real Feel",
            num: main?.feels_like,
            unit: "°c",
        },
        {
            id: 2,
            icon: <OpacityIcon fontSize="large" />,
            text: "Humidity",
            num: main?.humidity,
            unit: "%",
        },
        {
            id: 3,
            icon: <AirIcon fontSize="large" />,
            text: "Wind Speed",
            num: wind?.speed,
            unit: "m/s",
        },
        {
            id: 4,
            icon: <CompressIcon fontSize="large" />,
            text: "Pressure",
            num: main?.pressure,
            unit: "mbar",
        },
    ];

    return (
        <Box>
            <Typography variant="h4" mt={5} color="primary.main">
                {name}
                <Typography variant="h5" component="span">
                    , {sys?.country}
                </Typography>
            </Typography>

            <Typography component="p">
                {time} | {day}
            </Typography>

            <Typography variant="h1" fontWeight="500" mt={5} color="primary.main">
                {Math.trunc(main?.temp)}°c
            </Typography>

            <Typography component="p" mb={5}>
                Min: {main?.temp_min}°c | Max: {main?.temp_max}°c
            </Typography>

            <Divider>
                <Typography variant="h5">
                    {weather?.[0]?.main}
                </Typography>
            </Divider>

            <Grid container mt={5} columnSpacing={2} rowGap={3}>
                {
                    weatherDetails.map(item => {
                        const { id, icon, text, num, unit } = item;
                        return (
                            <Grid item xs={6} sm={3} key={id}>
                                <Box color="primary.light">
                                    {icon}
                                </Box>
                                <Box mt={1.5}>
                                    <Typography component="p">
                                        {text}
                                    </Typography>
                                    <Typography component="p" fontWeight="500">
                                        {num}{unit}
                                    </Typography>
                                </Box>
                            </Grid>
                        );
                    })
                }
            </Grid>
        </Box>
    );
};

export default WeatherInfo;