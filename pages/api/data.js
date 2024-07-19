export default async function handler(req, res) {
  const { cityInput } = req.body;
  const getWeatherData = await fetch(
    // `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`
    `https://api.open-meteo.com/v1/forecast?latitude=45.1787&longitude=5.7148&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,weather_code,wind_speed_10m&forecast_days=1`
  );
  const data = await getWeatherData.json();
  res.status(200).json(data);
}
