import React, { useState } from "react";
import "./weather.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <form id="searchform">
              <div className="row">
                <div className="col-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Choose your city"
                    aria-label="Choose your city"
                    autoFocus="on"
                    id="searchcity"
                  />
                </div>
                <div className="col">
                  <button type="submit" className="btn btn-warning w-100">
                    Search
                  </button>
                </div>
                <div className="col">
                  <div>
                    <button
                      type="button"
                      className="btn btn-outline-warning w-100"
                      id="current-location-button"
                    >
                      Current
                    </button>
                  </div>
                </div>
              </div>
            </form>

            <div className="day">
              <div className="row">
                <div className="col-2">
                  <img
                    id="icon"
                    src={weatherData.iconUrl}
                    alt={weatherData.description}
                  />
                </div>

                <div className="col-4">
                  <div id="currentdate">
                    <FormattedDate date={weatherData.date} />
                  </div>
                  <div id="description">{weatherData.description}</div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-4">
                <h1 id="city">{weatherData.city}</h1>
              </div>
              <div className="col-3">
                <h1>
                  <span id="temperature">
                    {Math.round(weatherData.temperature)}
                  </span>
                  <span className="units">°C </span>
                </h1>
              </div>

              <div className="col-4">
                <ul>
                  <li>
                    Precipitation: <span id="precipitation">80</span>%
                  </li>
                  <li>
                    Humidity: <span id="humidity">{weatherData.humidity}</span>%
                  </li>
                  <li>
                    Wind: <span id="wind">{weatherData.wind}</span> m/h
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "04bde8cc7f569f7c5603cdbc6deb89a3";
    let city = `${props.defaultCity}`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
