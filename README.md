# React Weather App

A weather app which displays current and five-day weather forecast for a searched location.

## About the project

This app allows the user to search a city and uses the weather data from [Open Weather Map](https://openweathermap.org/) to display the forecast, as well as the current weather conditions.

I built this application to develop my React skills and to compare to my [Javascript Weather app](https://github.com/ElSmith7/weather-app), demonstrating each approach's strengths and weaknesses.

I chose to not include some of the elements of the previous Javascript iteration of the app, like the geoloaction or night mode. This is because I wanted to focus on making reusable components with other functionalities - such as the fahrenheit to celsius conversion.

## Built with

- React
- css3
- Bootstrap

## Conclusion

When comparing the two versions of the app, this React application is far more readable - with all the components logically placed in the tree and props passing down as needed.

Although it is worth mentioning, now that I have more practice in making reusable functional components, I do think there are areas of this app that could be re-worked to be made explicitly reusable. For instance this would be vital if the app were to be scaled up to be a much larger project; like a weather app that provides in depth weather warnings and a full synoptic chart. In this case, it would also require context or Redux to pass the data more efficiently.

However, at the size the app is now, there is no need for such modifications. In fact, implementing them may cause unnecessary complexity for such a small project.
