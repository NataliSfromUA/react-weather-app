import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFar(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCels(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <h1>
          <span id="temperature">{Math.round(props.celsius)}</span>
          <span className="units">
            <a href="" onClick={convertToCels}>
              °C
            </a>{" "}
            |{" "}
            <a href="" onClick={convertToFar}>
              °F
            </a>
          </span>
        </h1>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <h1>
          <span id="temperature">{Math.round(fahrenheit())}</span>
          <span className="units">
            <a href="" onClick={convertToCels}>
              °C
            </a>{" "}
            |{" "}
            <a href="" onClick={convertToFar}>
              °F
            </a>
          </span>
        </h1>
      </div>
    );
  }
}
