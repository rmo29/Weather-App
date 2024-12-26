import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <h2>About Weather App</h2>
      <p>
        This is a simple weather application built with React.js. It fetches
        real-time weather data using the OpenWeather API and displays
        information such as temperature, city, and weather description.
      </p>
    </div>
  );
};

export default About;
