"use client"

export default async function handler(req, res) {
  const { cityData } = req.body;
  const cityName = process.env.CITY;
  const getCityData = await fetch(
    // `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`
    // `https://api.open-meteo.com/v1/forecast?latitude=45.1787&longitude=5.7148&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&forecast_days=1`
    // `https://geocoding-api.open-meteo.com/v1/search?name=nice&count=1&language=fr&format=json`,
    `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1&language=fr&format=json`,
    {
      method: "GET",
      headers: {
          "Content-Type": "application/json",
      },
  }
  );
  const cData = await getCityData.json();
  res.status(200).json(cData);
}
