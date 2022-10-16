import getWeatherInfo from "./weatherAPI";
import { displayOnSite } from "./display";

export default function eventListener() {
  const btnSubmit = document.querySelector("#submit");
  const weatherToggle = document.querySelector(".weather");

  btnSubmit.addEventListener("click", async (e) => {
    e.preventDefault();
    weatherToggle.classList.remove("hidden");
    displayOnSite(await getWeatherInfo());
  });
}
