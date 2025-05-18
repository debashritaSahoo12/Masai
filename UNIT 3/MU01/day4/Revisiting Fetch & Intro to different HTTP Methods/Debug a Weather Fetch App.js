const weatherForm = document.getElementById('weatherForm');
const cityInput = document.getElementById('city');
const weatherDisplay = document.getElementById('weather');
const errorDisplay = document.getElementById('error') || weatherDisplay; // fallback to weatherDisplay if errorDisplay is null

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();

  if (!city) {
    errorDisplay.textContent = 'Please enter a city name.';
    weatherDisplay.textContent = '';
    return;
  }

  fetchWeather(city);
});

async function fetchWeather(city) {
  const apiKey = "YOUR_API_KEY"; // replace with your actual API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    weatherDisplay.textContent = `Temperature in ${data.name}: ${data.main.temp}°C`;
    weatherDisplay.innerHTML += `<br>Weather:
    ${data.weather[0].description}`;
    errorDisplay.textContent = "";
  } catch (error) {
    errorDisplay.textContent = `Error: ${error.message}`;
    weatherDisplay.textContent = "";
  }
}
