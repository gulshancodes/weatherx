import React, { useState } from 'react';
import SearchBar from './SearchBar';
import WeatherInfo from './WeatherInfo';
import WelcomeScreen from './WelcomeScreen';
import ErrorScreen from './ErrorScreen';
import { apiKey, BASE_URL } from '../utils/apiInfo';
import { Paper } from '@mui/material';


const style = {
    maxWidth: "600px",
    width: "100%",
    px: 5,
    py: 6,
    textAlign: "center",
    bgcolor: "rgba( 255, 255, 255, 0.15 )",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
    borderRadius: "16px",
    boxShadow: "0 8px 30px 0 rgba(31, 38, 135, 0.37)",
    backdropFilter: "blur(8.5px)",
};


const WeatherBox = () => {

    // const [isLoading, setIsLoading] = useState(true);
    const [cityName, setCityName] = useState("");
    const [weatherData, setWeatherData] = useState(null);

    // API URL
    const apiUrl = `${BASE_URL}/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    // Fetching the Weather Data
    const fetchWeatherData = async () => {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
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
        <Paper sx={style}>

            <SearchBar
                cityName={cityName}
                setCityName={setCityName}
                getWeatherData={getWeatherData}
            />

            {
                weatherData?.name ? (
                    <WeatherInfo weatherData={weatherData} />
                ) : weatherData?.cod === '404' ? (
                    <ErrorScreen weatherData={weatherData} />
                ) : (
                    <WelcomeScreen />
                )
            }

        </Paper>
    );
};

export default WeatherBox;