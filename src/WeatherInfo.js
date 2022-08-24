import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <span>
      <header className="location-overview">
        <div className="row">
          <div className="col-6">
            <h1 className="city">{props.weatherData.city}</h1>
            <h6 className="sub-heading">
              Last Updated:
              <span id="time-date">
                <FormattedDate date={props.weatherData.date} />
              </span>
              <br />
              <span id="weather-description">
                {props.weatherData.description}
              </span>
            </h6>
          </div>
          <div className="col-6">
            <img
              className="weather-icon"
              id="weather-icon"
              src={props.weatherData.icon}
              alt={props.weatherData.description}
            />
          </div>
        </div>
      </header>
      <section className="current-weather">
        <div className="row">
          <div className="col-7 current-temp">
            <span id="current-temp">{props.weatherData.temperature}</span>
            <span className="unit" id="unit">
              °C
            </span>
          </div>
          <div className="col-5">
            <ul className="current-conditions">
              <li>
                <strong>
                  Feels Like:
                  <span id="feels-like"> {props.weatherData.feelsLike}</span>°
                </strong>
              </li>
              <li>
                <strong>
                  Humidity:
                  <span id="humidity">{props.weatherData.humidity}</span>%
                </strong>
              </li>
              <li>
                <strong>
                  Wind: <span id="wind">{props.weatherData.wind}</span>km/h
                </strong>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </span>
  );
}
