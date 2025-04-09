async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "c8aa8fe307b5ac9bf2b2128949521639"; // Got it from the openWeatherMap website after creating an account
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("City not found");
  
      const data = await response.json();
      const weatherInfo = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>Condition:</strong> ${data.weather[0].main}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
      `;
      document.getElementById("weatherInfo").innerHTML = weatherInfo;
  
    } catch (error) {
      document.getElementById("weatherInfo").innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
  }
  