const cityInput = document.getElementById("cityInput");
const getWeatherBtn = document.getElementById("getWeatherBtn");
const weatherResult = document.getElementById("weatherResult");

async function getWeather() {
   const city = cityInput.value;

   const geoResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
   const geoData = await geoResponse.json();

   const lat = geoData.results[0].latitude;
   const lon = geoData.results[0].longitude;

   const weatherResponse = await fetch( `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
   const weatherData = await weatherResponse.json();
    
   const temp = weatherData.current_weather.temperature;
   weatherResult.textContent = `Temperature: ${temp}°C`;
}

getWeatherBtn.addEventListener("click", getWeather);