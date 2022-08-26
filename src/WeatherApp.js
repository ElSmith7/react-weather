import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./WeatherApp.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    const apiKey = `5c32603554bdbae2e57c8722d88e7625`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleCitySearch(event) {
    setCity(event.target.value);
  }

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      feelsLike: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed * 3.6),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="weather-app" id="background">
          <form
            className="search-form"
            id="search-country-form"
            onSubmit={handleSubmit}
          >
            <div className="row">
              <div className="col-8">
                <input
                  className="form-control shadow-sm"
                  id="country-input"
                  type="search"
                  placeholder="Search City"
                  autoComplete="off"
                  onChange={handleCitySearch}
                />
              </div>
              <div className="col-2">
                <input
                  className="form-control shadow-sm submit"
                  type="submit"
                  value="🔍"
                />
              </div>
              <div className="col-2">
                <button
                  type="button"
                  className="btn btn-primary shadow-sm now-button"
                  id="now-button"
                >
                  <span className="now-button-wrapper">Now</span>
                </button>
              </div>
            </div>
          </form>
          <WeatherInfo weatherData={weatherData} city={city} />
        </div>
        <footer className="footer">
          <a
            href="https://github.com/ElSmith7/react-weather"
            rel="noreferrer"
            target="_blank"
          >
            Open-source Code
          </a>
          <span> by </span>
          <a
            href="https://cute-quokka-d9c751.netlify.app"
            rel="noreferrer"
            target="_blank"
          >
            Eleanor Smith
          </a>
        </footer>
      </div>
    );
  } else {
    search();
    return "loading...";
  }
}
