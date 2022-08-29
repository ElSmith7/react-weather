import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  return (
    <span className="WeatherForecastDay">
      <div id="forecast-date">{props.forecastData.dt}</div>
      <WeatherIcon code={props.forecastData.weather[0].icon} size={50} />
      <div>
        <span id="forecast-min">{props.forecastData.temp.max}</span> /{" "}
        <span id="forecast-max">{props.forecastData.temp.min}</span>
      </div>
    </span>
  );
}
