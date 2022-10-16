import cordinatesConverter from "./geoCodingAPI";

const textInput = document.querySelector("#text-input");

export default async function getWeatherInfo() {
  try {
    const geoInfo = await cordinatesConverter(textInput.value);
    console.log(geoInfo[0]);

    const openWeather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${geoInfo[0].lat}&lon=${geoInfo[0].lon}&units=metric&appid=1bdf0cbef1c66e6d7ba6d40dab697a5b`,
      { mode: "cors" }
    );
    const weatherData = await openWeather.json();
    console.log(weatherData);
    return weatherData;
  } catch (error) {
    console.log(error);
  }
}
