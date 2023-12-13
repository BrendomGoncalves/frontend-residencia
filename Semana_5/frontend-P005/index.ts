// import fetch from 'node-fetch';
import fetch from 'node-fetch';

const cidade = "Ilhéus"
const url = `https://api.hgbrasil.com/weather?key=39b142ef&lat=-14.797916606986151&lon=-39.172089901957214`;

interface WeatherData {
    results: {
        temp: number;
        description: string;
        date: string;
        time: string;
        humidity: number;
        wind_speedy: string;
        sunrise: string;
        sunset: string;
        forecast: {
            date: string;
            weekday: string;
            max: number;
            min: number;
            description: string;
        }[];
    };
}

function getWeather(): Promise<WeatherData> {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao obter o clima');
                }
                return response.json();
            })
            .then(data => {
                resolve(data as WeatherData);
            })
            .catch(error => {
                reject(`Erro ao obter o clima: ${error}`);
            });
    });
}

getWeather()
    .then(data => {
        const currentWeather = data.results;
        console.log(currentWeather);
        updateWeatherInfo(currentWeather);
    })
    .catch(error => {
        console.log(error);
    });

function updateWeatherInfo(data: any) {
    const weatherInfo = document.getElementById('weather-info');
    if (weatherInfo) {
        weatherInfo.innerHTML = `
            <h2>Condições atuais em ${cidade}</h2>
            <p>Data: ${data.date}, ${data.time}</p>
            <p>Temperatura: ${data.temp}°C</p>
            <p>Descrição: ${data.description}</p>
            <p>Umidade: ${data.humidity}%</p>
            <p>Velocidade do vento: ${data.wind_speedy}</p>
            <p>Sunrise: ${data.sunrise}</p>
            <p>Sunset: ${data.sunset}</p>
        `;
    }
}