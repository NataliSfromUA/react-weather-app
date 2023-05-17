import React from "react";
import "./weather.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Weathr() {
  return (
    <div className="Weather">
      <div class="weather-app-wrapper">
        <div class="weather-app">
          <form id="searchform">
            <div class="row">
              <div class="col-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Choose your city"
                  aria-label="Choose your city"
                  autofocus="on"
                  id="searchcity"
                />
              </div>
              <div class="col">
                <button type="submit" class="btn btn-warning">
                  Search
                </button>
              </div>
              <div class="col">
                <div>
                  <button
                    type="button"
                    class="btn btn-outline-warning"
                    id="current-location-button"
                  >
                    Current
                  </button>
                </div>
              </div>
            </div>
          </form>

          <div class="day">
            <div class="row">
              <div class="col-2">
                <img id="icon" src="" alt="Sun" />
              </div>
              <div class="col-2">
                <div id="weekday">Friday</div>
                <div id="currentdate">17.05.2023</div>
              </div>
              <div class="col-4">
                <div id="currenttime">19:20</div>
                <div id="description">Sunny</div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-4">
              <h1 id="city">Sydney</h1>
            </div>
            <div class="col-3">
              <h1>
                <span id="temperature">20</span>
                <span class="units">19°C </span>
              </h1>
            </div>

            <div class="col-4">
              <ul>
                <li>
                  Humidity: <span id="humidity">80</span>%
                </li>
                <li>
                  Wind: <span id="wind">5</span> m/h
                </li>
              </ul>
            </div>
          </div>

          <div class="weather-forecast" id="forecast"></div>
        </div>
      </div>
    </div>
  );
}
