import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather APP</h1>
        <footer>
          This project was coded by
          <a
            href="https://app.netlify.com/sites/fabulous-marzipan-645376/overview"
            target="_blank"
          >
            {" "}
            Natalia Sukova{" "}
          </a>{" "}
          open-sourced at
          <a
            href="https://github.com/NataliSfromUA/react-weather-app"
            target="_blank"
          >
            {" "}
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}
