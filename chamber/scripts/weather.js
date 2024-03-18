
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

        const data = await response.json();
        console.log(data);
        displayWeather(data);

    } catch (error) {
        console.error('There was a problem fetching the data:', error);
    }
}

function displayWeather(data) {
    loc.textContent = data.name;
    temp.textContent = ` ${data.main.temp}°F - ${data.weather[0].description}`;
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    weatherIcon.alt = data.weather[0].description;
}


apiFetch();

const forecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=47.98006517807884&lon=-122.2021039567026&appid=d9719af272a7d9fb2566454da625cad1&units=imperial'