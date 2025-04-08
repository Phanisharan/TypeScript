const cityInput = document.getElementById("cityInput") as HTMLInputElement;
const getWeatherBtn = document.getElementById("getWeatherBtn")!;
const weatherInfo = document.getElementById("weatherInfo")!;

getWeatherBtn.addEventListener("click", async () => {
  const city = cityInput.value.trim();
  if (!city) {
    weatherInfo.textContent = "Please enter a city name.";
    return;
  }

  weatherInfo.textContent = "Loading...";

  try {
    // Get coordinates for the city
    const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}`);
    const geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
      weatherInfo.textContent = "City not found!";
      return;
    }

    // Try to get the result from India if city is ambiguous
    const location = geoData.results.find((loc: any) => loc.country === "India") || geoData.results[0];
    const { name, country, latitude, longitude } = location;

    // Get weather using coordinates
    const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
    const weatherData = await weatherRes.json();

    const weather = weatherData.current_weather;
    if (!weather) {
      weatherInfo.textContent = "Weather data not available.";
      return;
    }

    weatherInfo.innerHTML = `
      <strong>${name}, ${country}</strong><br>
      🌡️ Temperature: ${weather.temperature}°C<br>
      💨 Wind Speed: ${weather.windspeed} km/h<br>
      🧭 Wind Direction: ${weather.winddirection}°
    `;
  } catch (error) {
    console.error(error);
    weatherInfo.textContent = "Failed to fetch weather data.";
  }
});
