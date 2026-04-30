import { useEffect, useState } from 'react';
import WeatherCard from './WeatherCard';
import './App.css';

function App() {
  const [forecasts, setForecasts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/weatherforecast')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Veri alınamadı');
        }

        return response.json();
      })
      .then((data) => {
        setForecasts(data);
      })
      .catch((error) => {
        console.error('Hata:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="app-container">
      <h1>WeatherForecast App</h1>
      <p>Ten day WeatherForecast</p>

      {loading ? (
        <p>loading...</p>
      ) : (
        <div className="weather-cards-container">
          {forecasts.map((forecast, index) => (
            <WeatherCard key={index} forecast={forecast} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
