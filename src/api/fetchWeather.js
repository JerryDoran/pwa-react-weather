import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "b103457414c40ba30734e8b8f590d6c4";

export const fetchWeather = async (query) => {
  const {data} = await axios.get(URL, {
    params: {
      q: query,
      units: "imperial",
      APPID: API_KEY
    }
  });
  return data;
};
