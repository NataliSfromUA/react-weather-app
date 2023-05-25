import React from "react";
import "./weather.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Weathr() {
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
                <img id="icon" src="./sunny.png" alt="Sun" />
              </div>
              <div className="col-2">
                <div id="weekday">Friday</div>
                <div id="currentdate">17.05.2023</div>
              </div>
              <div className="col-4">
                <div id="currenttime">19:20</div>
                <div id="description">Sunny</div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-4">
              <h1 id="city">Sydney</h1>
            </div>
            <div className="col-3">
              <h1>
                <span id="temperature">20</span>
                <span className="units">°C </span>
              </h1>
            </div>

            <div className="col-4">
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
        </div>
      </div>
    </div>
  );
}
