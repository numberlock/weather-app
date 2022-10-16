export const selectIcon = function (data) {
  const sendBack = `/src/images/${data.weather[0].icon}@2x.png`;

  return sendBack;
};

export const displayOnSite = function (data) {
  const city = document.querySelector(".city-country");
  city.textContent = `${data.name}, ${data.sys.country}`;

  const desc = document.querySelector(".description");
  desc.textContent = data.weather[0].description;

  const temp = document.querySelector(".temp");
  temp.textContent = `${Math.round(data.main.temp)}°C`;

  const weatherIcon = document.querySelector(".weather-icon");
  weatherIcon.src = selectIcon(data);

  const feelsLike = document.querySelector(".feels-like");
  feelsLike.textContent = `Feels like: ${Math.round(data.main.feels_like)}°C`;

  const pressure = document.querySelector(".pressure");
  pressure.textContent = `Pressure: ${data.main.pressure} hPa`;

  const tempMin = document.querySelector(".temp-min");
  tempMin.textContent = `Min. Temperature: ${Math.round(data.main.temp_min)}°C`;

  const humidity = document.querySelector(".humidity");
  humidity.textContent = `Humidity: ${data.main.humidity} %`;

  const windSpeed = document.querySelector(".wind-speed");
  windSpeed.textContent = `Wind: ${data.wind.speed} km/hNW`;

  const tempMax = document.querySelector(".temp-max");
  tempMax.textContent = `Max. Temperature: ${Math.round(data.main.temp_max)}°C`;
};
