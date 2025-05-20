import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [forecasts, setForecasts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
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

    useEffect(() => {
        populateWeatherData();
    }, []);

    const contents = forecasts === undefined
        ? <p><em>Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <table className="table table-striped" aria-labelledby="tableLabel">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp(C)</th>
                    <th>Temp(F)</th>
                    <th>Summary</th>
                    <th>Weather-Icon</th>
                </tr>
            </thead>
            <tbody>
                {forecasts.map(forecast =>
                    <tr key={forecast.date}>
                        <td>{forecast.date}</td>
                        <td>{forecast.temperatureC}</td>
                        <td>{forecast.temperatureF}</td>
                        <td>{forecast.summary}</td>
                        <td>

                            <img
                                src={weatherIconMap[forecast.summary]}
                                alt={forecast.summary}
                                style={{ width: '50px', height: '50px' }}
                            />
                        </td>
                        
                    </tr>
                   
                )}
            </tbody>
        </table>;

    return (
        <div>
            <h1 id="tableLabel">Weather forecast</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
        </div>
    );
    
    async function populateWeatherData() {
        setLoading(true);
        setError(null);   
        try {
            const response = await fetch('weatherforecast');
            if (!response.ok) {
                
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setForecasts(data);
        } catch (e) {
            
            setError(e.message); 
            setForecasts([]);   
            console.error("Failed to fetch weather data:", e); 
        } finally {
            
            setLoading(false);
        }
    }

}

export default App;