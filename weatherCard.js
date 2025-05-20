import React from 'react';
import './WeatherCard.css'; // Kart bile?eninin kendi CSS dosyas? olacak

// Hava durumu aç?klamalar?n? simge URL'leri ile e?leyen bir obje
const weatherIconMap = {
    Freezing: 'https://openweathermap.org/img/wn/01n@2x.png',
    Bracing: 'https://openweathermap.org/img/wn/02n@2x.png',
    Chilly: 'https://openweathermap.org/img/wn/03n@2x.png',
    Cool: 'https://openweathermap.org/img/wn/04n@2x.png',
    Mild: 'https://openweathermap.org/img/wn/09d@2x.png',
    Warm: 'https://openweathermap.org/img/wn/10d@2x.png',
    Balmy: 'https://openweathermap.org/img/wn/11d@2x.png',
    Hot: 'https://openweathermap.org/img/wn/13d@2x.png',
    Sweltering: 'https://openweathermap.org/img/wn/50d@2x.png',
    Scorching: 'https://openweathermap.org/img/wn/01d@2x.png',
};

function WeatherCard({ forecast }) {
    return (
        <div className="weather-card">
            <h3>{forecast.date}</h3>
            <div className="weather-card-icon">
                {weatherIconMap[forecast.summary] ? (
                    <img
                        src={weatherIconMap[forecast.summary]}
                        alt={forecast.summary}
                        style={{ width: '80px', height: '80px' }}
                    />
                ) : (
                    <p>{forecast.summary}</p>
                )}
            </div>
            <p>S?cakl?k: {forecast.temperatureC}°C / {forecast.temperatureF}°F</p>
            <p>Özet: {forecast.summary}</p>
        </div>
    );
}

export default WeatherCard;