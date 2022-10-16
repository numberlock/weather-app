export default async function cordinatesConverter(input) {
  try {
    const geoCoding = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${input}&appid=1bdf0cbef1c66e6d7ba6d40dab697a5b`,
      { mode: "cors" }
    );
    const data = await geoCoding.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
