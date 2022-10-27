import './App.css';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import './components/Search/Search';
import Search from './components/Search/Search';
import { OPENWEATHER_API_URL } from './api';
import { OPENWEATHER_API_KEY } from './api';
import { useState } from 'react';
import Forecast from './components/Forecast/Forecast';


function App() {
  const [currenWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    // console.log(searchData);
    const [lat, lon] = searchData.value.split(' ');

    const currentWeatherFetch = fetch(`${OPENWEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=metric`)
    const forecastFetch = fetch(`${OPENWEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=metric`);
    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      }).catch((err) => {
        console.log(err);
      })
  }
  console.log(currenWeather);
  console.log(forecast);
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currenWeather && <CurrentWeather data={currenWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
