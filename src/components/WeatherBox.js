import React, { useState } from 'react';
import SearchBar from './SearchBar';
import WeatherInfo from './WeatherInfo';
import WelcomeScreen from './WelcomeScreen';
import LoadingScreen from './LoadingScreen';
import ErrorScreen from './ErrorScreen';
import { apiKey, BASE_URL } from '../utils/apiInfo';
import { weatherBoxStyle } from '../theme/customStyles';
import { Paper } from '@mui/material';


const WeatherBox = () => {

    const [cityName, setCityName] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);

    // API URL
    const apiUrl = `${BASE_URL}/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    // Fetching the Weather Data
    const fetchWeatherData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setIsLoading(false);
            setWeatherData(data);
        } catch (error) {
            console.log(error);
        }
    };

    // Function for getting the Weather Data
    const getWeatherData = (e) => {
        e.preventDefault();
        fetchWeatherData();
        setCityName("");
    };

    return (
        <Paper sx={weatherBoxStyle}>

            <SearchBar
                cityName={cityName}
                setCityName={setCityName}
                getWeatherData={getWeatherData}
            />

            {
                isLoading ? (
                    <LoadingScreen />
                ) : (
                    weatherData?.name ? (
                        <WeatherInfo weatherData={weatherData} />
                    ) : weatherData?.cod === '404' ? (
                        <ErrorScreen weatherData={weatherData} />
                    ) : (
                        <WelcomeScreen />
                    )
                )
            }

        </Paper>
    );
};

export default WeatherBox;