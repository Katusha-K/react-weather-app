import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project is coded by Katia Kanievska{" "}
          <a
            href="https://github.com/Katusha-K/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            it is open-sourced.
          </a>
        </footer>
      </div>
    </div>
  );
}
