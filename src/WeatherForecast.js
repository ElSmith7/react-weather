import axios from "axios";
import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState({ ready: false });

  function handleResponse(response) {
    setForecast(response.data.daily);
  }

  if (forecast.ready) {
    return (
      <section className="future-forecast" id="future-forecast">
        <div className="col-2 day-forecast">
          <WeatherForecastDay forecastData={forecast[0]} />
        </div>
      </section>
    );
  } else {
    const apiKey = `5c32603554bdbae2e57c8722d88e7625`;
    let latitude = props.weatherData.coordinates.lat;
    let longitude = props.weatherData.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
