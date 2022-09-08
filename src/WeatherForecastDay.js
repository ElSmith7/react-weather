import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.forecastData.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.forecastData.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.forecastData.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <span className="weather-forecast-day">
      <div id="forecast-date">{day()}</div>
      <WeatherIcon code={props.forecastData.weather[0].icon} size={50} />
      <div>
        <span id="forecast-max">{maxTemperature()}</span> /{" "}
        <span id="forecast-min">{minTemperature()}</span>
      </div>
    </span>
  );
}
