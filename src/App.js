import React from "react";
import "./App.css";
import Weather from "./weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer className="footer">
          This project was coded by
          <a
            href="https://app.netlify.com/sites/fabulous-marzipan-645376/overview"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Natalia Sukova{" "}
          </a>{" "}
          open-sourced at
          <a
            href="https://github.com/NataliSfromUA/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}
