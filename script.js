async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '9da94beb1b2543414594b090cf38b70b';
    console.log(apiKey);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert(error.message);
    }
}

function displayWeather(data) {
    const glassBox = document.getElementById('weather-info');
    const glassBoxTitle = document.querySelector('.glassBox__title');
    const weatherIcon = document.getElementById('weather-icon');
    const glassBoxContent = document.querySelector('.glassBox__details');
  
    glassBoxTitle.textContent = `${data.name}, ${data.sys.country}`;
  
    const weatherCondition = data.weather[0].main.toLowerCase();
    let iconUrl = '';

    console.log(weatherCondition)
  
    switch (weatherCondition) {
      case 'clear':
        iconUrl = 'https://www.freeiconspng.com/thumbs/sunny-icon/sunny-icon-0.png';
        break;
      case 'clouds':
            iconUrl = 'https://www.transparentpng.com/thumb/clouds/aT7LU6-clouds.png';
        break;
      // Add more cases for different weather conditions if needed
      default:
        iconUrl = 'https://www.nicepng.com/png/detail/57-570478_rain-cloud-icon-light-rain-icon.png';
    }
  
    weatherIcon.src = iconUrl;
    glassBoxContent.innerHTML = `
      <p>Temperature: ${data.main.temp} °C</p>
      <p>Weather: ${data.weather[0].description}</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;

    glassBox.style.display = 'block';
  }



