import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function weatherinfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="day">
        <div className="row">
          <div className="col-2">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={54} />
            </div>
          </div>
          <div className="col-4">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>

          <div className="col-4">
            <div id="currentdate">
              <FormattedDate date={props.data.date} />
            </div>
            <div id="description">{props.data.description}</div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-4">
          <h1 id="city">{props.data.city}</h1>
        </div>

        <div className="col-4">
          <ul>
            <li>
              Humidity: <span id="humidity">{props.data.humidity}</span>%
            </li>
            <li>
              Wind: <span id="wind">{props.data.wind}</span> m/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
