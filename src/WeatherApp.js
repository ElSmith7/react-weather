import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./WeatherApp.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/04d@2x.png`,
      feelsLike: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed * 3.6),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="weather-app" id="background">
          <form className="search-form" id="search-country-form">
            <div className="row">
              <div className="col-8">
                <input
                  className="form-control shadow-sm"
                  id="country-input"
                  type="search"
                  placeholder="Search City"
                  autoComplete="off"
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
          <header className="location-overview">
            <div className="row">
              <div className="col-6">
                <h1 className="city">{city}</h1>
                <h6 className="sub-heading">
                  Last Updated:
                  <span id="time-date">
                    <FormattedDate date={weatherData.date} />
                  </span>
                  <br />
                  <span id="weather-description">
                    {weatherData.description}
                  </span>
                </h6>
              </div>
              <div className="col-6">
                <img
                  className="weather-icon"
                  id="weather-icon"
                  src={weatherData.icon}
                  alt={weatherData.description}
                />
              </div>
            </div>
          </header>
          <section className="current-weather">
            <div className="row">
              <div className="col-7 current-temp">
                <span id="current-temp">{weatherData.temperature}</span>
                <span className="unit" id="unit">
                  °C
                </span>
              </div>
              <div className="col-5">
                <ul className="current-conditions">
                  <li>
                    <strong>
                      Feels Like:
                      <span id="feels-like"> {weatherData.feelsLike}</span>°
                    </strong>
                  </li>
                  <li>
                    <strong>
                      Humidity:
                      <span id="humidity">{weatherData.humidity}</span>%
                    </strong>
                  </li>
                  <li>
                    <strong>
                      Wind: <span id="wind">{weatherData.wind}</span>km/h
                    </strong>
                  </li>
                </ul>
              </div>
            </div>
          </section>
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
    const apiKey = `5c32603554bdbae2e57c8722d88e7625`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return "loading...";
  }
}
