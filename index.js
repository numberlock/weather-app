const textInput = document.querySelector("#text-input");
const btnSubmit = document.querySelector("#submit");

const cordinatesConverter = async function (input) {
  const geoCoding = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=1bdf0cbef1c66e6d7ba6d40dab697a5b`,
    { mode: "cors" }
  );
  const data = await geoCoding.json();
  return data;
};

const getWeatherInfo = async function () {
  const geoInfo = await cordinatesConverter(textInput.value);

  const openWeather = await fetch(
    `http://api.openweathermap.org/data/2.5/forecast?lat=${geoInfo[0].lat}&lon=${geoInfo[0].lon}&units=metric&appid=1bdf0cbef1c66e6d7ba6d40dab697a5b`,
    { mode: "cors" }
  );
  const weatherData = await openWeather.json();
  return weatherData;
};

const selectIcon = function (data) {
  return "./src/img/icons8-clouds-96.png";
};

const displayOnSite = function (data) {
  console.log(data);
  const city = document.querySelector(".city-country");
  city.textContent = `${data.city.name}, ${data.city.country}`;
  const temp = document.querySelector(".temp");
  temp.textContent = `${Math.round(data.list[0].main.temp)}°C`;
  const weatherIcon = document.querySelector(".weather-icon");
  weatherIcon.src = selectIcon(data);
};

btnSubmit.addEventListener("click", async (e) => {
  e.preventDefault();
  displayOnSite(await getWeatherInfo());
});
