import React, { useState } from "react";
import "./weather.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherForecast from "./WeatherForecast";

import WeatherInfo from "./weatherinfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    const apiKey = "04bde8cc7f569f7c5603cdbc6deb89a3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <form id="searchform" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Choose your city"
                    aria-label="Choose your city"
                    autoFocus="on"
                    id="searchcity"
                    onChange={handleCityChange}
                  />
                </div>
                <div className="col-4">
                  <button type="submit" className="btn btn-warning w-100">
                    Search
                  </button>
                </div>
              </div>
            </form>
            <WeatherInfo data={weatherData} />
            <WeatherForecast />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
