import "./WeatherApp.css";

export default function Weather() {
  let overviewWeatherData = {
    city: "London",
    imgUrl: "http://openweathermap.org/img/wn/04d@2x.png",
    date: "Tuesday 16:00",
    description: "Cloudy",
  };
  let currentWeatherData = {
    temp: "24",
    feelsLike: "24",
    humidity: "40",
    wind: "6",
  };
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
        <header className="location-overveiw">
          <div className="row">
            <div className="col-6">
              <h1 className="city">{overviewWeatherData.city}</h1>
              <h6 className="sub-heading">
                Last Updated:
                <span id="time-date">{overviewWeatherData.date}</span>
                <br />
                <span id="weather-description">
                  {overviewWeatherData.description}
                </span>
              </h6>
            </div>
            <div className="col-6">
              <img
                className="weather-icon"
                id="weather-icon"
                src={overviewWeatherData.imgUrl}
                alt={overviewWeatherData.description}
              />
            </div>
          </div>
        </header>
        <section className="current-weather">
          <div className="row">
            <div className="col-7 current-temp">
              <span id="current-temp">{currentWeatherData.temp}</span>
              <span className="unit" id="unit">
                °C
              </span>
            </div>
            <div className="col-5">
              <ul className="current-conditions">
                <li>
                  <strong>
                    Feels Like:
                    <span id="feels-like"> {currentWeatherData.feelsLike}</span>
                    °
                  </strong>
                </li>
                <li>
                  <strong>
                    Humidity:
                    <span id="humidity">{currentWeatherData.humidity}</span>%
                  </strong>
                </li>
                <li>
                  <strong>
                    Wind: <span id="wind">{currentWeatherData.wind}</span>km/h
                  </strong>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <footer className="footer">
        <a href="https://github.com/ElSmith7/react-weather" target="_blank">
          Open-source Code
        </a>
        by Eleanor Smith
      </footer>
    </div>
  );
}
