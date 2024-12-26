import React, { useState } from "react";
import "./Weather.css";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const getWeatherData = async () => {
    if (!city) {
      setErrorMessage("Please enter a city name");
      return;
    }

    const apiKey = "c6770102e4285870b0d6b42e63e3bfe1";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod === "404") {
        setErrorMessage("City not in database or does not exist!!");
        setWeatherData(null);
      } else {
        setWeatherData(data);
        setErrorMessage("");
      }
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.");
      setWeatherData(null);
    }
  };

  return (
    <div className="weather-container">
      <h1>Search</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeatherData}>Get Weather</button>

      {errorMessage && <div className="error-message">{errorMessage}</div>}

      {weatherData && (
        <div className="weather-info">
          <h2>
            {weatherData.name}, {weatherData.sys.country}
          </h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
