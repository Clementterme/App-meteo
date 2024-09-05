"use client"

export default async function handler(req, res) {
  const { cityInput, cityData, latitude, longitude } = req.body;
  // console.log(cityData);
  const getWeatherData = await fetch(
    // `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&forecast_days=1`,
    // `https://api.open-meteo.com/v1/forecast?latitude=45.17869&longitude=5.7148&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&forecast_days=1`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await getWeatherData.json();
  res.status(200).json(data);
}
