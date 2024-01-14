import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project is coded by Katia Kanievska &{" "}
          <a
            href="https://github.com/Katusha-K/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            is open-sourced on Github and hosted on Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
