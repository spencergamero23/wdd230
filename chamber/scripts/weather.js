
const loc = document.querySelector('#Location');
const temp = document.querySelector('#Temperature');
const weatherIcon = document.querySelector('#weather-icon');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=47.980065178078846&lon=-122.2021039567026&appid=d9719af272a7d9fb2566454da625cad1&units=imperial'

async function apiFetch() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(await response.text());
        }

        const weather = await response.json();
        displayWeather(weather);

    } catch (error) {
        console.error('There was a problem fetching the data:', error);
    }
}

function displayWeather(weather) {
    loc.textContent = weather.name;
    temp.textContent = ` ${weather.main.temp}°F - ${weather.weather[0].description}`;
    weatherIcon.src = `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`;
    weatherIcon.alt = weather.weather[0].description;
}


apiFetch();

// Forecast code
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=47.98006517807884&lon=-122.2021039567026&appid=d9719af272a7d9fb2566454da625cad1&units=imperial';
const threeDayForecast = document.querySelector('#ThreeDayForecast');

async function fetchForecastData() {
    try {
        const response = await fetch(forecastUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch forecast data');
        }
        const data = await response.json();
        displayThreeDayForecast(data);
    } catch (error) {
        console.error('Error fetching forecast data:', error);
    }
}

function displayForecastItem(forecastItem) {
    const { dt, weather, main } = forecastItem;
    const date = new Date(dt * 1000);
    const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}.png`;

    const forecastItemElement = document.createElement('ul');
    forecastItemElement.innerHTML = `
        <p><img src="${iconUrl}" alt="${weather[0].description}" width="40"></p>
        <p>${Math.round(main.temp)}° F</p>
        <p>${weather[0].description}</p>
        <p>${formattedDate}</p>
    `;
    return forecastItemElement;
}

function displayThreeDayForecast(data) {
    const forecastItems = data.list.filter(item => item.dt_txt.includes('12:00:00')).slice(0, 3);
    forecastItems.forEach(item => {
        const forecastItemElement = displayForecastItem(item);
        threeDayForecast.appendChild(forecastItemElement);
    });
}

fetchForecastData();
