import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  return (
    <section class="future-forecast" id="future-forecast">
      <div class="col-2 day-forecast">
        <p>
          <div id="forecast-date">Thu</div>
          <WeatherIcon code={props.weatherData.icon} />
          <div>
            <span id="forecast-min">10</span> /{" "}
            <span id="forecast-max">20</span>
          </div>
        </p>
      </div>
    </section>
  );
}
